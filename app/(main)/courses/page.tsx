import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
    const coursesData = getCourses();
    const userProgressData =  getUserProgress();

    const [
        courses,
        userProgress,
    ] = await Promise.all([
        coursesData,
        userProgressData
    ])

    return ( 
        <div className="h-full m-w-[912px] px-3 mx-auto bg-[#121212] w-full">
            <h1 className="text-2xl font-bold text-[#9575CD]">
                Course Library
            </h1>
            <List 
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            />
        </div>
     );
}
 
export default CoursesPage;