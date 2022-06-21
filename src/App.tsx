import { Navbar } from "./components/Navbar/";
import { Videos } from "./components/Videos";
import { VideosTimeline } from "./components/VideosTimeline";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mx-1">
        <Videos />
        <VideosTimeline />
      </div>
    </>
  );
}

export default App;
