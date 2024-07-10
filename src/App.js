import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import JobPost from "./pages/JobPost";
import Schedule from "./pages/Schedule";
import Product from "./pages/Product";
import Golf from "./pages/Golf";
import Products from "./pages/Products";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/job" element={<JobPost />} />
        <Route path="/consultation" element={<Schedule />} />
        <Route path="/product/Entertainment_&_Lifestyle" element={<Product />} />
        <Route path="/product/Lighting" element={<Products />} />
        <Route path="/product/golf-simulation" element={<Golf />} />
        <Route path="/create" element={localStorage.getItem('loggedIn')?<CreateBlog />:<Navigate to='/login'/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;