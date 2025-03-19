import { MobileHeader } from "@/components/mobile-header";
import { SideBar } from "@/components/sidebar";

type Props ={
    children: React.ReactNode
};

const MainLayout = ({
    children,
}: Props) => {
    return(
        <div className="min-h-screen bg-[#121212]">
            <MobileHeader />
            <SideBar className="hidden lg:flex" />
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-[0px] bg-[#121212] min-h-screen">
                <div className="max-w-[1056px] mx-auto pt-6 h-full bg-[#121212]">
                    {children}
                </div>  
            </main>
        </div>
    )
};

export default MainLayout