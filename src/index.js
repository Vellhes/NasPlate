import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from "./routes/Connexion/login";
import Register from "./routes/Connexion/register";
import Profil from "./routes/User/profil";
import AddNasForm from "./routes/Nas/NasAddForm";
import ListNas from "./routes/Nas/NasList";
import DetailNas from "./routes/Nas/NasDetail";
import Contact from "./routes/Contact";
import reportWebVitals from './reportWebVitals';
import MonIntervant from './routes/User/monIntervenant';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/register",
    element : <Register/>
  },
  {
    path : "/AddNas",
    element : <AddNasForm/>
  },
  {
    path: "/ListNas",
    element : <ListNas/>
  },
  {
    path: "/DetailNas",
    element : <DetailNas/>
  },
  {
    path : "/Contact",
    element : <Contact/>
  },
  {
    path : "/Profil",
    element : <Profil/>
  },
  {
    path : "/MonIntervenant",
    element : <MonIntervant/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
