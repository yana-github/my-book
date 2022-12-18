import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/screenContainer.module.css";

const ScreenContainer = (props) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={
        theme === "light" ? styles.container_light : styles.container_dark
      }
    >
      {props.children}
    </div>
  );
};

export default ScreenContainer;
