import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Header from "./components/Header";

function App() {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticlePage />} />
            </Routes>
        </Router>
    )
}

export default App;
