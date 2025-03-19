import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type Props= {
    title: string;
    description: string;
};

export const UnitBanner = ({
    title,
    description,
}: Props) => {
    return ( 
        <div className="w-full rounded-xl bg-brand-secondary p-5 text-green flex items-center justify-between border-2 border-[#7E57C2]">
            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
                <p className="text-lg">
                    {description}
                </p>
            </div>
            <Link href="/lesson">
                <Button
                    size="lg"
                    variant="secondaryOutline"
                    className="hidden xl:flex"
                >
                    <NotebookText className="mr-2"/>
                    Continue
                </Button>
            </Link>
        </div>
     );
}
 
export default UnitBanner;