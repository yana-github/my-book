import { Link } from "react-router-dom";
import CustomizedSwitches from "./SwitcherTheme";

import classNames from "classnames";
import styles from "../../styles/menu.module.css";

import { changeTheme } from "../../redux/theme/actions";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const switchTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(nextTheme));
  };

  const classHeader = classNames(styles.header, {
    [styles.header_night]: theme === "dark",
  });

  return (
    <header className={classHeader}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/favorites" className={styles.link}>
        Favorites
      </Link>

      <CustomizedSwitches switchTheme={switchTheme} />
    </header>
  );
};

export default Menu;
