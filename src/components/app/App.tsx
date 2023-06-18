import { AppRoutes } from "../approutes/App.routes";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
export default function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
