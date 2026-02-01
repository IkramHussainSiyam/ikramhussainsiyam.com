import { X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import Button from "../../ui/button";
import Navlinks from "./navlinks";

export function NavbarSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent closeBtn={false} className="p-0 rounded-none bg-primary">
        <div className="flex items-center justify-between p-8 border-b border-secondary/65">
          <SheetTitle className="font-heading uppercase font-normal text-primary-foreground text-4xl md:text-5xl lg:text-5xl w-full tracking-wider">
            menu
          </SheetTitle>
          <SheetClose asChild>
            <Button size={"icon"} variant={"secondary"}>
              <X size={16} strokeWidth={3} />
            </Button>
          </SheetClose>
        </div>

        <Navlinks />
      </SheetContent>
    </Sheet>
  );
}
