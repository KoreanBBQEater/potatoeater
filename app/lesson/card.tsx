import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    id: number;
    imageSrc: string | null;
    audioSrc: string | null;
    text: string;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    disabled?: boolean;
    status?: "correct" | "wrong" | "none",
    type: typeof challenges.$inferSelect["type"];
}

export const Card = ({
    id,
    imageSrc,
    audioSrc,
    text,
    shortcut,
    selected,
    onClick,
    disabled,
    status,
    type
}: Props) => {
    return (
        <div
            onClick={() => {}}
            className={cn(
                "h-full border-2 rounded-xl border-b-4 p-4 lg:p-6 cursor-pointer active:border-b-2",
                "bg-[#1E1E1E] border-[#303030] hover:bg-neutral-800",
                selected && "border-[#7E57C2] bg-[#7E57C2]/15 hover:bg-[#7E57C2]/20",
                selected && status === "correct" && "border-[#66BB6A] bg-[#66BB6A]/15 hover:bg-[#66BB6A]/20",
                selected && status === "wrong" && "border-[#EF5350] bg-[#EF5350]/15 hover:bg-[#EF5350]/20",
                disabled && "pointer-events-none opacity-50",
            )}
        >
            {imageSrc && (
                <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
                    <Image
                    src={imageSrc} 
                    fill
                    alt={text}
                    />
                </div>
            )}
            <div className={cn(
                "flex items-center justify-between",
                type === "ASSIST" && "flex-row-reverse",
            )}>
                {type === "ASSIST" && <div />}
                <p className={cn(
                    "text-neutral-300 text-sm lg:text-base",
                    selected && "text-[#7E57C2]",
                    selected && status === "correct" && "text-[#66BB6A]",
                    selected && status === "wrong" && "text-[#EF5350]",
                )}>
                    {text}
                </p>
                <div className={cn(
                    "lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold" ,
                    "border-[#303030]",
                    selected && "border-[#7E57C2] text-[#7E57C2]",
                    selected && status === "correct" && "border-[#66BB6A] text-[#66BB6A]",
                    selected && status === "wrong" && "border-[#EF5350] text-[#EF5350]",
                )}
                >
                    {shortcut}
                </div>
            </div>
        </div>
    )
}