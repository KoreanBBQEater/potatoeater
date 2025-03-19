import { MobileSidebar } from "./mobile-sidebar"

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-[#26A69A] border-b border-[#303030] fixed top-0 w-full z-50">
            <MobileSidebar />
        </nav>
    )
}