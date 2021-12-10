export default function DisplayCharts({dataChart, BarChart, LineChart}){

    return(
        <div>
            <div className="dashboard-container">
                <BarChart data={dataChart.chart1} name={"Chiffres bimestriels"} />
                
                <LineChart data={dataChart.chart2} name={"Nombres d'abbonés (en milliers)"} />

                <LineChart data={dataChart.chart3} name={"Nombres de clients (en milliers)"} />

                <BarChart data={dataChart.chart4} name={"Budjet Marketing"} />
            </div>
            

        </div>
    )
    }