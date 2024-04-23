import {
  // Router
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./routes/homePage";
import { AboutPage } from "./routes/about/aboutPage";
import { ContactPage } from "./routes/contact/contactPage";
import { ProjectPages } from "./routes/projects/projectPage";
import { ProjectPage } from "./routes/projects/project/projectPage";
import { NotFoundPage } from "./routes/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPages />} />

        {/* TODO! */}
        <Route path="/projects/???" element={<ProjectPage />} />

        {/* Using a wildcard catch everything else */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
