import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema"
import { title } from "process";

const sql = neon(process.env.DATABASE_URL!)
//@ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try{
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Psychology",
                imageSrc: "/psychology.svg"
            },
            {
                id: 2,
                title: "Mythology",
                imageSrc: "/mythology.svg"
            },
            {
                id: 3,
                title: "Economics",
                imageSrc: "/economics.svg"
            },
            {
                id: 4,
                title: "Philosophy",
                imageSrc: "/philosophy.svg"
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Introduction to Psychology",
                order: 1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "The Human Mind",
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Cognitive Processes",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Emotional Intelligence",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Behavioral Patterns",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Psychological Disorders",
            },

        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order:1,
                question: 'Which of these is associated with "classical conditioning"?'
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: "/pavlov.svg",
                correct: true,
                text: "Pavlov's dog experiment",
                audioSrc: "/pavlov_explanation.mp3"
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: "/freud.svg",
                correct: false,
                text: "Freud's dream analysis",
                audioSrc: "/freud_explanation.mp3"
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: "/skinner.svg",
                correct: false,
                text: "Skinner box",
                audioSrc: "/skinner_explanation.mp3"
            },
        ]);


        console.log("Seeding finished")
    }
    catch (error){
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();