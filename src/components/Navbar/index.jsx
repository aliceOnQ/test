import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="/products/category/療癒"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                療癒
            </NavLink>
            <NavLink to="/products/category/校園"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                校園
            </NavLink>
            <NavLink to="/products/category/奇幻"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                奇幻
            </NavLink>
            <NavLink to="/products/category/愛情"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                愛情
            </NavLink>
            <NavLink to="/products/category/恐怖"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                恐怖
            </NavLink>
            <NavLink to="/products/category/懸疑"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                懸疑
            </NavLink>   
        </div>
    );
}