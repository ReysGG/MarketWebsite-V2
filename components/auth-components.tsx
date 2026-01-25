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

export function SignOut({ classname }: { classname?: string }) {
  return (
    <form action={signOutAction} className="w-full">
      <button className={classname}>Sign Out</button>
    </form>
  );
}
