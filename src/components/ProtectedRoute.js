import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  return (
    <Routes>
      <Route>
        {() => 
          props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-up" />
        }
      </Route>
    </Routes>
)};

export default ProtectedRoute;