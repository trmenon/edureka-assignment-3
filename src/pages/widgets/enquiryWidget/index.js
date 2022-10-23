import React, { Component} from 'react';
import { Table} from '../../../components';
import { getAllEnquiries} from '../../../api';

class EnquiryWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {headers: [], data: []}
        }
    }

    componentDidMount() {
        console.log("Enquiry-Widget-Component mounted");
        this.fetchAllEnquiries();
    }
    componentDidUpdate() {
        console.log("Enquiry-Widget-Component updated with state");
        console.log(this.state);
    }

    fetchAllEnquiries = async ()=> {
        const res = await getAllEnquiries();
        if(res && res.length > 0) {
            const data = res.map((element)=> {
                return (
                    {
                        id: element?.id,
                        enquired: element?.name,
                        phone: element?.number,
                        email: element?.email,
                        requestedCourseId: element?.requestedCourseId
                    }
                )
            })
            this.setState({
                ...this.state, 
                tableData: {
                    headers:Object.keys(data[0]).map((element)=> element.toUpperCase()),
                    data: data
                }
            });
        }
    }

    render() {
        return(
            <React.Fragment>
                <Table 
                    tableData= {this.state?.tableData}
                    enquiryBtnPresent = {false}
                    handleAction = {()=> {}}
                />
            </React.Fragment>
        )
    }

}

export default EnquiryWidget;