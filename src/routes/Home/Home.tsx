import styles from "./Home.module.css";
import { About } from "../../components/About/About";
import { SliderComponent } from "../../components/SliderComponent/SliderComponent";
import { Notice } from "../../components/Notice/Notice";

export const Home = () => {
  return (
    <div>
      <SliderComponent />
      <About />
      <Notice />
    </div>
  );
};
