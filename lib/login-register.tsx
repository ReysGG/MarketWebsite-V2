"use server";

import { signIn } from "./auth";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { getUserFromDb } from "./databasefunction/getuserDB";
import { registerSchema, signInSchema } from "./zod";
import prisma from "./prisma";

export const register = async (prevState: unknown, formData: FormData) => {
  const { name, email, password, confirmPassword } = Object.fromEntries(
    formData.entries(),
  );

  if (password !== confirmPassword) {
    return { errorpassword: "Passwords do not match" };
  }

  const validation = registerSchema.safeParse({
    name: name as string,
    email: email as string,
    password: password as string,
    confirmPassword: confirmPassword as string,
  });

  if (!validation.success) {
    return { error: validation.error.flatten().fieldErrors };
  }

  const CheckUser = await getUserFromDb(email as string);
  if (CheckUser) {
    return { erroremail: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password as string, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        password: hashedPassword,
      },
    });

    if (!user) {
      return { error: "User not created" };
    }

    // Auto sign-in after registration
    await signIn("Credentials", {
      email: user.email,
      password: password as string,
      redirect: false,
    });

    // This will throw NEXT_REDIRECT which is intentional
    redirect("/");
  } catch (error) {
    console.error("Registration error:", error);
    return { error: "Failed to create account. Please try again." };
  }
};

export const login = async (prevState: unknown, formData: FormData) => {
  // Get and validate input
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Validate schema
  const validation = signInSchema.safeParse({ email, password });
  if (!validation.success) {
    return { error: "Invalid email or password format" };
  }

  // Check if user exists
  const user = await getUserFromDb(email);
  if (!user || !user.password) {
    return { error: "Invalid email or password" };
  }

  // Verify password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return { error: "Invalid email or password" };
  }

  // If all validation passes, proceed with signIn
  await signIn("Credentials", {
    email,
    password,
    redirect: false,
  });

  // This will throw NEXT_REDIRECT which is intentional - let it propagate
  redirect("/");
};
