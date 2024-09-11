"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

export function SignOutButton() {
  return (
    <Button
      variant={"destructive"}
      className="hover:bg-opacity-80"
      onClick={() => signOut()}
    >
      Sair
    </Button>
  );
}
