"use client";

import { Github, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SignInButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn() {
    setIsLoading(true);
    await signIn("github");
  }

  return (
    <Button disabled={isLoading} onClick={handleSignIn}>
      {isLoading ? (
        <>
          <Loader className="mr-1 size-[18px] animate-spin" />
          <span>Signing In...</span>
        </>
      ) : (
        <>
          <Github className="mr-1 size-[18px]" />
          <span>Sign In</span>
        </>
      )}
    </Button>
  );
}
