import { createBrowserRouter } from "react-router-dom";
import { MainLayout }          from "./components/layout/MainLayout";

//pages
import { NotFound } from "./pages/NotFound";
import { Detail }   from "./pages/Detail";
import { Home }     from "./pages/Home";



export const routes = createBrowserRouter(

    [
        {
            element:<MainLayout/>,
            children:[
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path:'/detail/:ia',
                    element: <Detail/>
                },
                {
                    path:'*',
                    element: <NotFound/>
                }
            ]
        }
    ]
) 