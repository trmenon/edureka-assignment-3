import React from 'react';
import styles from './Table.module.css';

const Table = (props)=> {
    console.log(props);
    const handleButtonClick = (key)=> {
        props?.handleAction(key);
    }

    return (
        <div className={styles['table-wrapper']}>
            <table className={styles['table-styles']}>
                <thead>
                    <tr>
                        {props?.tableData?.headers.map((element, index)=> {
                            return(
                                <th key = {`HEADER-ITEM-${index}`}>{element}</th>
                            )
                        })}
                        {props?.enquiryBtnPresent?<th key = {`HEADER-ITEM-ACTION`}>{'ACTION'}</th> : '' }
                        
                    </tr>
                </thead>
                <tbody>
                    {props?.tableData?.data.length === 0?
                        <tr>
                            <td>Nothing to show here</td>
                        </tr>
                        :
                        props?.tableData?.data.map((element)=> {
                            const dataList = Object.values(element);
                            return(
                                <tr key = {`ELEMENT-KEY-${element?.id}`}>                                    
                                    {dataList.map((course, index)=> {
                                        if(Array.isArray(course)) {                                            
                                            return (
                                                <td key={`LIST-ITEM-VALUE-${index}`}>
                                                    {course.join("-")}
                                                </td>
                                            )
                                        }else {
                                            return(
                                                <td key={`LIST-ITEM-VALUE-${index}`}>{course}</td>
                                            )
                                        }
                                    })}
                                    {props?.enquiryBtnPresent === false?
                                        ''
                                        :
                                        <td>
                                            <button 
                                                className='action-btn'
                                                onClick = {()=>handleButtonClick(element?.id)}
                                            >
                                                Enquire
                                            </button>
                                        </td>
                                    }                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Table;