import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center w-full">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
