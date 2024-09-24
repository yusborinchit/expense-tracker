import { type ElementType } from "react";
import { cn } from "~/lib/utils";

interface Props {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
}

export default function MainContainer({
  children,
  as = "div",
  className,
}: Props) {
  const Component = as;

  return (
    <Component className={cn("mx-auto max-w-screen-sm px-8", className)}>
      {children}
    </Component>
  );
}
