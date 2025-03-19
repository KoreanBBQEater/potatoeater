import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return(
        <div className="sticky top-0 bg-background-base pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 border-background-elevated mb-5 text-brand-primaryLight lg:z-50">
            <Link href="/courses">
                <Button variant="ghost">
                    <ArrowLeft className="h-5 w-5 stroke-2 border-0 text-brand-primaryLight"/>
                </Button>
            </Link>
            <h1 className="font-bold text-lg text-brand-primaryLight">
                {title}
            </h1>
            <div />
        </div>
    )
}