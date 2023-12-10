import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import Main from '../components/Main'
import Allstudent from '../student/Allstudent'
import Stu from '../student/Stu'




const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                        <Route path='Main' element={<Main />} />
                        <Route path="Allstudent" element={<Allstudent/>}/>
                        <Route path="Stu" element={<Stu/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router