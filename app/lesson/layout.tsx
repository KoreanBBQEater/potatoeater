type Props = {
    children: React.ReactNode;
}


const LessonLayout = ({ children }: Props) => {
    return ( 
        <div className="flex flex-col h-screen">
            <div className="flex flex-col flex-1 w-full">
                {children}
            </div>
        </div>
    );
}

export default LessonLayout;
