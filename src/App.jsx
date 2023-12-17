import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YoutubePages from "./pages/youtube";
import LifeCyclePage from "./pages/lifecycle";
import CounterPage from "./pages/counter";
import BlogPage from "./pages/blog";
import ErrorPage from "./pages/404";
import Navbar from "./components/Layout/Navbar";
import DetailPostPage from "./pages/detailPost";
import HookPage from "./pages/hooks";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<YoutubePages />} />
        <Route path="/lifecycle" element={<LifeCyclePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/posts" element={<BlogPage />} />
        <Route path="/hooks" element={<HookPage />} />
        <Route path="/detail-post/:id" element={<DetailPostPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
