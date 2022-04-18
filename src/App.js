import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmsDetail from "./pages/FilmsDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:id" element={<FilmsDetail />} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;