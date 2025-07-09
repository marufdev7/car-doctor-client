import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Router.jsx';

createRoot(document.getElementById('root')).render(
    <div className='ml-24 mr-24 mx-auto'>
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    </div>
)
