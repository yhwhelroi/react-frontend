import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from "./contact/page";
import { Home } from "./home/page";
import { About } from "./about/page";
import Blog from "./blog/page";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
