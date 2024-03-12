import React from "react"
import './comp.css'

const LabList = () =>{
    return(
        <div className="labslist_main">
            <h2>Это список лабораторных работ</h2>
            <p>Он должен быть кликабельным. Ждите обновлений</p>
            <ul>
                <li>2 лабораторная</li>
                <li>3 лабораторная</li>
                <li>4 лабораторная</li>
            </ul>
        </div>
    )
}
export default LabList