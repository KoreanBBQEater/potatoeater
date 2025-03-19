import { Loader } from "lucide-react";

const Loading = () => {
    return ( 
        <div className="h-full w-full flex items-center justify-center bg-background-base">
            <Loader className="h-6 w-6 text-brand-primary animate-spin"/>
        </div>
     );
}
 
export default Loading;