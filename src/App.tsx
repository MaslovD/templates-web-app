// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { Layout } from "./components";
import ExamplePage from "./pages/ExamplePage";
import TagDetailsPage from "./pages/TagDetailsPage";
import "./output.css";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<ExamplePage />} />
                        <Route path="tags/:tag_uuid" element={<TagDetailsPage />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
