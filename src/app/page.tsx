import MainContainer from "~/components/containers/main-container";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <MainContainer as="main" className="flex flex-col items-center gap-4">
      <h1 className="mt-40 text-center text-7xl font-bold tracking-tighter">
        Hello World.
      </h1>
      <p className="max-w-md text-center text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        maxime obcaecati, assumenda.
      </p>
      <Button asChild className="px-6 text-lg">
        <a href="/dashboard">Start Today!</a>
      </Button>
    </MainContainer>
  );
}
