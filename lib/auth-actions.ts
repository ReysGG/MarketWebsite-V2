"use server";

import { signIn, signOut } from "@/lib/auth";

export async function signInWithProvider(provider?: string) {
    await signIn(provider);
}

export async function signOutAction() {
    await signOut();
}
