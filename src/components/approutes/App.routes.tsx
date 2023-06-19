import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Home/Home"));
const List = lazy(() => import("../List/List"));
const Register = lazy(() => import("../register/Register"));
const Login = lazy(() => import("../login/Login"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user" element={<List></List>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
   
      </Routes>
    </Suspense>
  );
}
