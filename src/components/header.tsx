import { getServerAuthSession } from "~/server/auth";
import SignInButton from "./auth/sign-in-button";
import SignOutButton from "./auth/sign-out-button";
import MainContainer from "./containers/main-container";

export default async function Header() {
  const session = await getServerAuthSession();

  return (
    <header>
      <MainContainer className="flex items-center justify-between py-4">
        <a href="/" className="text-xl font-bold tracking-tighter">
          Expense Tracker
        </a>
        {session ? <SignOutButton /> : <SignInButton />}
      </MainContainer>
    </header>
  );
}
