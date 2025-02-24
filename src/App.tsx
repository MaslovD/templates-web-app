import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Layout} from "./components";
import ExamplePage from "./pages/ExamplePage";
import TagDetailsPage from "./pages/TagDetailsPage";


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Layout wraps all pages */}
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ExamplePage/>}/>
                    <Route path="tags/:tag_uuid" element={<TagDetailsPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
