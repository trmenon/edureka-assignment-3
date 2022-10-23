import React, { Component} from 'react';
import {userDetailsFormFields} from './constants';
import { Modal, Form, Table} from '../../../components';
import { getCourseList, createNewEnquiry} from '../../../api';

class CourseWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false,
            tableData: {headers: [], data: []},
            selectedKey: ''
        }
    }

    componentDidMount() {
        // console.log("Course-Widget-Component mounted");
        this.fetchAllCourses();
        
    }
    componentDidUpdate() {
        // console.log("Course-Widget-Component updated with state");
        // console.log(this.state);
    }

    fetchAllCourses = async ()=> {
        const res = await getCourseList();
        if(res && res.length > 0) {
            this.setState({
                ...this.state, 
                tableData: {
                    headers:Object.keys(res[0]).map((element)=> element.toUpperCase()),
                    data: res
                }
            });
        }
    }

    handleBtnToggle = (key)=> {
        this.setState({
            ...this.state,
            openForm: true,
            selectedKey: key
        })
    }

    closeModal = ()=> {
        this.setState({...this.state, openForm: false});
    }

    handleFormSubmit = async (data)=> {
        const res = await createNewEnquiry({...data, requestedCourseId: this.state?.selectedKey});
        if(Object.keys(res).length > 0) {
            alert("Request sent");
        }else {
           alert("Unable to send enquiry. Try again later");
        }
        this.closeModal();
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    {this?.state?.openForm === true?
                        <Modal 
                            component = {
                                <Form 
                                    fields = {userDetailsFormFields} 
                                    actionHandler = {this.handleFormSubmit}
                                />
                            }
                            onClose = {this.closeModal}
                        />
                        : ''
                    }
                </div>
                <div className='table-wrapper'>                    
                    <Table 
                        tableData= {this.state?.tableData}
                        enquiryBtnPresent = {true}
                        handleAction = {this.handleBtnToggle}
                    />
                </div>
                
            </React.Fragment>
        )
    }

}

export default CourseWidget;