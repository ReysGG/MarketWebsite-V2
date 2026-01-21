import { signInWithProvider, signOutAction } from "@/lib/auth-actions";
import { Button } from "./ui/button";

export function SignIn({ provider }: { provider?: string }) {
  return (
    <form action={signInWithProvider.bind(null, provider)}>
      <Button className="w-full" variant="outline" type="submit">
        Login with {provider}
      </Button>
    </form>
  );
}

export function SignOut() {
  return (
    <form action={signOutAction} className="w-full">
      <button className="bg-neutral-700 text-white px-2 py-1 rounded-md">
        Sign Out
      </button>
    </form>
  );
}
