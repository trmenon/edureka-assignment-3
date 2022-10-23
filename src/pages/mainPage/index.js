import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar} from '../../components';
import styles from './MainPage.module.css';

const MainPage = ()=> {
    return (
        <div className={styles['app-wrapper']}>
            <div className={styles['navbar-wrapper']}><Navbar/></div>
            <div className={styles['main-wrapper']}><Outlet/></div>
        </div>
    )
};

export default MainPage;