import { Loader } from "lucide-react";

const Loading = () => {
    return ( 
        <div className="h-full w-full flex items-center justify-center">
            <Loader className="h-6 w-6 text-[#7E57C2] animate-spin"/>
        </div>
     );
}
 
export default Loading;