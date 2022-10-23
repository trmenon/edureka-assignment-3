import config from '../constants/config.json';
import fetchCall from '../services';

const getCourseList = ()=> 
    fetchCall(
        "courses", 
        config?.methodTypes?.GET,
        {}
    );

const getCourseById = (id)=> 
    fetchCall(
        `courses/${id}`, 
        config?.methodTypes?.GET,
        {}
    );

const createNewEnquiry = (data)=>
    fetchCall(
        "enquiries",
        config?.methodTypes?.POST,
        data
    );

const getAllEnquiries = ()=> 
    fetchCall(
        "enquiries",
        config?.methodTypes?.GET,
        {}
    )

export {
    getCourseList,
    createNewEnquiry,
    getAllEnquiries,
    getCourseById
}