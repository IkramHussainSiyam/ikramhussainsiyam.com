import { Slot } from "@radix-ui/react-slot";
import { cn } from "~/lib/utils";

export default function Container({ className, asChild, ...props }: TProps) {
  const Comp = asChild ? Slot : "section";

  return (
    <Comp
      className={cn("mx-4 md:mx-10 lg:mx-12 xl:mx-24", className)}
      {...props}
    />
  );
}

export interface TProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
