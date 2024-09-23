import MainContainer from "~/components/containers/main-container";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <>
      <header>
        <MainContainer className="flex items-center justify-between py-4">
          <a href="/" className="text-xl font-bold tracking-tighter">
            Expense Tracker
          </a>
          <nav className="hidden gap-4 text-muted-foreground sm:flex">
            <a href="#">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </MainContainer>
      </header>
      <MainContainer className="flex flex-col items-center gap-4">
        <h1 className="mt-44 text-center text-7xl font-bold tracking-tighter">
          Hello World.
        </h1>
        <p className="max-w-md text-center text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          maxime obcaecati, assumenda.
        </p>
        <Button asChild className="px-6 text-lg">
          <a href="#">Start Today!</a>
        </Button>
      </MainContainer>
    </>
  );
}
