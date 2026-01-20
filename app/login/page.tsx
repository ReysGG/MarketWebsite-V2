import { LoginForm } from "@/components/login-form";
import { signIn } from "@/lib/auth";

const LoginPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {/* <LoginForm /> */}
        <form
          action={async (formData) => {
            "use server";
            await signIn("credentials", {
              // lowercase!
              email: formData.get("email"),
              password: formData.get("password"),
              redirectTo: "/", // ✅ Tambahkan ini
            });
          }}
        >
          <input type="email" name="email" placeholder="m@example.com" />
          <input type="password" name="password" placeholder="*****" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
