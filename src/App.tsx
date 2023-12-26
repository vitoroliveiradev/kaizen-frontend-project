import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Container } from "./components/Container/Container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ToastContainer />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
