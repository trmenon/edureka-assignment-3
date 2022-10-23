import React from "react";
import styles from './Navbar.module.css';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ()=> {
    const navigate = useNavigate();
    const location = useLocation();
    const handleRouting = (isEnquiry)=> {
        if(isEnquiry === true) {
            navigate('/enquiries');
        }else {
            navigate('/courses');
        }
    }
    return(
        <div className= {styles['navbar']}>
            <div className={styles['app-name']}>
                <h2>Course Enquiry</h2>
            </div>
            <div className={styles['nav-links']}>
                <div 
                    className={`${styles['nav-link-element']} ${location?.pathname === '/courses'? styles['nav-link-active']: ''}`}
                    onClick = {()=> handleRouting(false)}
                >
                    <h5>Courses</h5>
                </div>
                <div
                    className={`${styles['nav-link-element']} ${location?.pathname === '/enquiries'? styles['nav-link-active']: ''}`}
                    onClick = {()=> handleRouting(true)}
                >
                    <h5>Enquiries</h5>
                </div>
            </div>
        </div>
    )
}

export default Navbar;