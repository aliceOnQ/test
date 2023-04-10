import { Link } from 'react-router-dom';
import React from "react"
import styles from "./Header.module.css"
import NavBar from "../Navbar";
export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.header1}>
                <div className={styles.mainheader}>
                    最新
                </div>
                <div className={styles.mainheader}>
                    推廣
                </div>
                <Link to="/">
                <div className={styles.mainheader}>
                    HOME
                </div>
                </Link>
                <div className={styles.mainheader}>
                    最近按讚
                </div>
                <div className={styles.mainheader}>
                    我的帳戶
                </div>
            </div>
           <NavBar />
        </div>
    );
}



