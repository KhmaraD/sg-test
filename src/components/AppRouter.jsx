import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Authorization from "./Authorization/Authorization";
import Requests from "./Requests/Requests";
import InputTypeRange from "./InputTypeRange/InputTypeRange";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/authorization" element={<Authorization/>}/>
            <Route path="/requests" element={<Requests/>}/>
            <Route path="/input" element={<InputTypeRange/>}/>
            <Route path="/" element={<Navigate replace to="/authorization" />} />
            <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
    );
};

export default AppRouter;