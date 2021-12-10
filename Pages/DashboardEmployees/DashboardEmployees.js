import React, {useContext, useState} from 'react'
import './DashboardEmployees.css'
import {DashboardContext} from '../../context/DashboardContext'
import DisplayPieCharts from './DisplayPieCharts'
import ChooseYear from './ChooseYear'


function DashboardEmployees() {

    const { dataChart, changeYear, yearData } = useContext(DashboardContext);

    return (
        <div className="global-container">

            <ChooseYear changeYear={changeYear} yearData={yearData} />

            <DisplayPieCharts dataChart={dataChart} />
        </div>
    )
}

export default DashboardEmployees
