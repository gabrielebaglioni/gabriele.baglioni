import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, AboutMeWrapper,  } from "./pages";
import About2 from "./pages/About2.jsx";
import ParallaxBackground from "./components/parallaxBackground.jsx";

const App = () => {
    return (
        <main className=' min-h-screen'>
                <ParallaxBackground />
               
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route
                                path='/*'
                                element={
                                    <>
                                        <Routes>
                                            <Route path='/about' element={<About2 />} />
                                            <Route path='/projects' element={<AboutMeWrapper />} />
                                            <Route path='/contact' element={<Contact />} />
                                        </Routes>
{/*
                                        <Footer />
*/}
                                    </>
                                }
                            />
                        </Routes>
                    </Router>
        </main>
    );
};

export default App;
