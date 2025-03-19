import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-[#7E57C2] p-2 bg-[#121212]">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/psychology.svg"
                     alt="Psychology"
                     height={32}
                     width={40}
                     className="mr-4 rounded-md"
                     />
                    <span className="text-[#B0B0B0] hover:text-white transition-colors">Psychology</span>
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/economics.svg"
                     alt="Economics"
                     height={32}
                     width={40}
                     className="mr-4 rounded-md"
                     />
                    <span className="text-[#B0B0B0] hover:text-white transition-colors">Economics</span>
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/mythology.svg"
                     alt="Mythology"
                     height={32}
                     width={40}
                     className="mr-4 rounded-md"
                     />
                    <span className="text-[#B0B0B0] hover:text-white transition-colors">Mythology</span>
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/philosophy.svg"
                     alt="Philosophy"
                     height={32}
                     width={40}
                     className="mr-4 rounded-md"
                     />
                    <span className="text-[#B0B0B0] hover:text-white transition-colors">Philosophy</span>
                </Button>
            </div>
        </footer>
    );
};