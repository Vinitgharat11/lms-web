import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

export default function MobileSidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
          <Menu/>
        </SheetTrigger>
        <SheetContent  side='left' className="p-2 bg-white">
          <Sidebar/>
        </SheetContent>
      </Sheet>
    </div>
  );
}
