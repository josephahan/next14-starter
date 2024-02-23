
import Links from "./links/Links";
import styles from './navbar.module.css'; //by renaming the css file to module.css, we can use the module css functionality with next.js, import the styles from the module.css file and use the styles object to access the css classes.
//if we were using tailwind css, we would import the styles from the tailwind css file

const NavBar = () => {
  return (
    <div className={styles.container}> {/* we can use module css functionality with next.js*/}
        {/* import the custom Links component */}
        <div className={styles.logo}>EMU</div>
        <Links />
    </div>
  );
}

export default NavBar;