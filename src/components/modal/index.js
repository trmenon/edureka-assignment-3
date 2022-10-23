import React from "react";
import styles from './Modal.module.css';

const Modal = (props)=> {
    const handleClose = ()=> {
        props?.onClose();
    }
    return (
        <div className={styles["modal-wrapper"]}>
            <div 
                
            ></div>
            <div className={styles["modal-content"]}>
                <div className={styles["modal-header"]}>
                    <div
                        className={styles["close-btn"]}
                        onClick = {handleClose}
                    >
                        &times;
                    </div>
                </div>
                <div>{props?.component}</div>
                
            </div>            
        </div>
    )
};

export default Modal;