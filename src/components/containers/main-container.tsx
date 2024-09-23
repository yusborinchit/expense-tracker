import { cn } from "~/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MainContainer({ children, className }: Props) {
  return (
    <div className={cn("mx-auto max-w-screen-md px-8", className)}>
      {children}
    </div>
  );
}
