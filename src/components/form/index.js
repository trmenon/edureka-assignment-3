import React, { useState} from "react";
import styles from './Form.module.css';
import formValidator from "./validator";

const Form = (props)=> {
    const [state, setState] = useState({
        error : {success: false, messages: []},
        fields : props?.fields.map((element)=> {
            return {
                ...element,
                value: ''
            }
        })
    })
    const handleChange = (key, value)=> {
        let current = state?.fields.map((element)=> {
            if(element?.key === key) {
                return {
                    ...element,
                    value: value
                }
            }else {
                return element;
            }
        });
        setState({...state, fields: current});
    }
    const handleSubmit = ()=> {
        const validation = formValidator(state?.fields);
        if(validation?.validated === false) {
            setState({
                ...state,
                error: {success: false, messages: validation?.errors}
            });
            handleReset();
        }else {
            props?.actionHandler(validation?.data);
        }
    }
    const handleReset = ()=> {
        setState({
            ...state,
            fields: state?.fields.map((element)=> {return {...element, value: ''}})
        })
    }

    return(
        <div className={styles["form-wrapper"]}>
            <div className={styles["form-field-section"]}>
                {state?.fields.length !== 0?
                    state?.fields.map((element, index)=> {
                        return(
                            <div
                                key = {element?.key}
                                className={styles["form-field-element"]}
                            >
                                <input                                                                 
                                    type = {element?.type || 'text'}
                                    placeholder = {element?.placeholderText || 'Enter value'}
                                    value = {element?.value}
                                    onChange = {(event)=> handleChange(element?.key, event?.target.value)}
                                />
                            </div>
                        )
                    }): ''
                }
            </div>
            <div className={styles["form-action-center"]}>
                <div 
                    className={`${styles["button-class"]} ${styles["button-type-submit"]}`}
                    onClick = {handleSubmit}
                >
                    Send
                </div>
                <div 
                    className={`${styles["button-class"]} ${styles["button-type-reset"]}`}
                    onClick = {handleReset}
                >
                    Reset
                </div>
            </div>
        </div>
    )
}

export default Form;