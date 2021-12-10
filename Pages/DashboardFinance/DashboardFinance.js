import React, { useState, useContext } from "react";
import BarChart from "../../Components/AllChart/BarChart";
import LineChart from "../../Components/AllChart/LineChart";
import { DashboardContext } from "../../context/DashboardContext";
import DisplayYear from './DisplayYear'
import DisplayCharts from './DisplayCharts'
import "./DashboardFinance.css";

export default function DashboardFinance() {

    const { dataChart, changeYear, yearData } = useContext(DashboardContext);

    return (
        <div className="global-container">
            
            <DisplayYear changeYear={changeYear} yearData={yearData} />

            <DisplayCharts dataChart={dataChart} BarChart={BarChart} LineChart={LineChart} />
        
        </div>
    )
}