import styles from "./Home.module.css";
import { About } from "../../components/About/About";
import { SliderComponent } from "../../components/SliderComponent/SliderComponent";
import { Notice } from "../../components/Notice/Notice";
import { ToolsCompany } from "../../components/ToolsCompany/ToolsCompany";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <SliderComponent />
      <About />
      <Notice />
      <ToolsCompany />
    </div>
  );
};
