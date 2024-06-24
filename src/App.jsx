import React, { useEffect, useRef } from 'react'; 
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "react-image-lightbox/style.css";
import './App.css';
import HomeThree from './pages/HomeThree';
import ScrollToTop from './common/ScrollToTop';
import Property from './pages/Property';
// import PropertySidebar from './pages/PropertySidebar';
import PropertyDetails from './pages/PropertyDetails';
// import AddListing from './pages/AddListing';
import MapLocation from './pages/MapLocation';
import AboutUs from './pages/AboutUs';
import FaqPage from './pages/FaqPage';
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';
import BlogClassic from './pages/BlogClassic';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {


  const Wrapper = ({ children }) => {
    const location = useLocation();
    const navigationType = useNavigationType();
    const scrollPositions = useRef({});

    useEffect(() => {
      const handleScroll = () => {
        scrollPositions.current[location.pathname] = window.scrollY;
      };

      if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
        document.documentElement.scrollTo(0, 0);
      } else if (navigationType === 'POP') {
        const savedPosition = scrollPositions.current[location.pathname];
        if (savedPosition !== undefined) {
          window.scrollTo(0, savedPosition);
        }
      }

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname, navigationType]);

    return children;
  };
  
  
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<HomeThree />} />
            <Route path="/property" element={<Property />} />
            {/* <Route path="/property-sidebar" element={<PropertySidebar />} /> */}
            <Route path="/property/:title" element={<PropertyDetails />} />
            {/* <Route path="/add-new-listing" element={<AddListing />} /> */}
            <Route path="/map-location" element={<MapLocation />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:title" element={<ProjectDetails />} />
            <Route path="/blog" element={<BlogClassic />} />
            <Route path="/blog/:title" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>

      <ScrollToTop/>
    </>
  );
}

export default App;
