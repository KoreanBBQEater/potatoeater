import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const LessonPage = async () => {
    const lessonData = getLesson();
    const userProgressData = getUserProgress();

    const [
        lesson,
        userProgress
    ] = await Promise.all([
        lessonData,
        userProgressData
    ])

    if (!lesson || !userProgress) {
        redirect("/learn");
    }

    const initialLessonChallenges =lesson.challenges
    .filter((challenge) => challenge.completed)
    .length / lesson.challenges.length * 100;

    return ( 
        <Quiz
            initalLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            initalHearts={userProgress.hearts}
            initalPercentage={initialLessonChallenges}
            userSubscription={null}
        />
     );
}
 
export default LessonPage;