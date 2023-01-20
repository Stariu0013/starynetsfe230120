import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './store/store';
import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./components/Users/User/User";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/:id' element={<User />}/>
            </Routes>
        </Provider>
    </BrowserRouter>
);
