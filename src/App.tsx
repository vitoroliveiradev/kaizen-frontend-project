import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Container } from "./components/Container/Container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};
