import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { FavouritesProvider } from './utils/context/FavouriteContext';

function App() {
  return (
    <FavouritesProvider>
    <Router>
      <div className="flex flex-col justify-center items-center w-full">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
    </FavouritesProvider>
  );
}

export default App;
