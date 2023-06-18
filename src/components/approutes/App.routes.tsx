import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Home/Home"));
const List = lazy(() => import("../List/List"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user" element={<List></List>}></Route>
      </Routes>
    </Suspense>
  );
}
