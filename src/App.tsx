import { gql, useQuery } from "@apollo/client";

import { Event } from "./pages/Event";

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

function App() {
  return <Event />;
}

export default App;
