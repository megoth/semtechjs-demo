import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LDOSolidReact from "./ldo-solid-react";
import Frontpage from "./frontpage";
import Layout from "./layout";
import "bulma/css/bulma.min.css"
import Rdflib from "./rdflib";
import {BrowserSolidLdoProvider} from '@ldo/solid-react';
import LDO from "./ldo";
import RdflibSolid from "./rdflib-solid";
import Inrupt from "./inrupt";
import SoukaiSolid from "./soukai-solid";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Frontpage/>,
        },
        {
            path: "/ldo",
            element: <LDO/>,
        },
        {
            path: "/ldo-solid-react",
            element: <LDOSolidReact/>,
        },
        {
            path: "/rdflib",
            element: <Rdflib/>,
        },
        {
            path: "/rdflib-solid",
            element: <RdflibSolid/>,
        },
        {
            path: "/inrupt",
            element: <Inrupt/>,
        },
        {
            path: "/soukai-solid",
            element: <SoukaiSolid/>,
        },
    ]
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserSolidLdoProvider>
            <RouterProvider router={router}/>
        </BrowserSolidLdoProvider>
    </React.StrictMode>,
)
