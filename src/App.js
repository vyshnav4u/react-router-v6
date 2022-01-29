import logo from "./logo.svg";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";

function App() {
  return (
    // inorder to use react-router-dom you need to wrap it under <Router> tag
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile/:user" element={<Profile />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
