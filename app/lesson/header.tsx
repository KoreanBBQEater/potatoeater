import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/user-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
    hearts: number;
    percentage: number;
    hasActiveSubscription: boolean;
};

export const Header = ({
    hearts,
    percentage,
    hasActiveSubscription
}: Props) => {
    const { open } = useExitModal();

    return ( 
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            <X 
                onClick={open}
                className="text-neutral-300 hover:text-white hover:opacity-75 transition cursor-pointer"
            />
            <Progress value={percentage} className="bg-[#303030] [&>div]:bg-[#7E57C2]" />
            <div className="text-[#EF5350] flex items-center font-bold">
                <Image
                    src="/heart.svg"
                    height={28}
                    width={28}
                    alt="heart"
                    className="mr-2"
                />
                {hasActiveSubscription
                    ? <InfinityIcon className="h-6 w-6 stroke-[3]"/>
                    : hearts
                }
            </div>
        </header>
     );
}