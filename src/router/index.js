import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, CourseWidget, EnquiryWidget } from '../pages';

const RouterComponent = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element= {<MainPage/>} >
                    <Route path = 'courses' element = {<CourseWidget/>}/>
                    <Route path = 'enquiries' element = {<EnquiryWidget/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;