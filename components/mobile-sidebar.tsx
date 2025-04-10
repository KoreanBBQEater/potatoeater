import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";

import {SideBar} from "@/components/sidebar";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <SideBar />
            </SheetContent>
        </Sheet>
    )
}