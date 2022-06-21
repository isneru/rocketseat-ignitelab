import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      availableAt
      lessonType
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
  availableAt: Date;
  lessonType: string;
}

export const VideosTimeline: React.FC = () => {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  return (
    <div className="flex flex-col justify-center items-center w-1/5 text-xl">
      <h1 className="font-bold">Classes Timeline</h1>
      <ul className="my-4 mx-2">
        {data?.lessons.map((lesson) => {
          return (
            <div className="mb-6">
              <span className="font-light">
                {lesson.availableAt.toString()}
              </span>
              <li
                className="px-6 py-3 border rounded border-navborder"
                key={lesson.id}
              >
                {lesson.title}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
