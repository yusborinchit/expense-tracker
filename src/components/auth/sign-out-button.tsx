"use client";

import { Loader, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn() {
    setIsLoading(true);
    await signOut();
  }

  return (
    <Button disabled={isLoading} onClick={handleSignIn}>
      {isLoading ? (
        <>
          <Loader className="mr-1 size-[18px] animate-spin" />
          <span>Signing Out...</span>
        </>
      ) : (
        <>
          <LogOut className="mr-1 size-[18px]" />
          <span>Sign Out</span>
        </>
      )}
    </Button>
  );
}
