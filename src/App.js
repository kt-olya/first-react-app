/*import logo from "./logo.svg";*/
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
