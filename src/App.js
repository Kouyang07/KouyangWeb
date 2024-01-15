import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
// Import Footer if needed
import "./App.css";

const Menu = () => {
  return (
    <div className="MENU">
      <div className="MENU_TITLE">
        <h1>Kouyang</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div className="container">
          <div className="MENU_TITLE">
            <h1>Kouyang</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ fontSize: '1.5rem' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
  <a href="https://blog.kouyang.dev/" className="nav-link" style={{ fontSize: '1.5rem' }} target="_blank" rel="noopener noreferrer">
    Blogs
  </a>
</li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link" style={{ fontSize: '1.5rem' }}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" style={{ fontSize: '1.5rem' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

const Footer = () => {
  // Footer content
};

function App() {
  return (
    <div className="APP">
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
