import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects,  } from "./pages";
import About2 from "./pages/About2.jsx";

const App = () => {
    return (
        <main className='animated-bg min-h-screen'>
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
                                    <Route path='/projects' element={<Projects />} />
                                    <Route path='/contact' element={<Contact />} />
                                </Routes>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </main>
    );
};

export default App;
