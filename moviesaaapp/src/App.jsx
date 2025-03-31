import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import Movies from "./components/Movies/Movies";
import About from "./components/About";
import Contact from "./components/contact";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from "react";

function AppContent() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "#343a40" : "#f8f9fa",
                color: theme === "dark" ? "#ffffff" : "#000000",
                minHeight: "100vh",
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <AppContent />
            </Provider>
        </ThemeProvider>
    );
}

export default App;