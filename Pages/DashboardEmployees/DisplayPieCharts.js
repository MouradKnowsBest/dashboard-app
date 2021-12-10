import React from "react";
import PieChart  from "../../Components/AllChart/PieChart";

export default function DisplayPieCharts({dataChart}) {

  return (
    <div className="">
      <h2>Les secteurs qui ont recruté :</h2>

      <PieChart
      labels={["Marketing", "Securité", "Front-End"]}
      data={dataChart.chart5}
      />

      <h2>L'âge des nouveaux employés :</h2>

      <PieChart
      labels={["< 20", "> 20 && < 30", "> 30 && < 60"]}
      data={dataChart.chart6}
      />

      <h2>Le niveau d'études :</h2>

      <PieChart
      labels={["Bac", "> Bac + 2", "> Bac + 5"]}
      data={dataChart.chart7}
      />

      <h2>La nationalité :</h2>

      <PieChart labels={["USA", "Germany", "UK"]} data={dataChart.chart8} />
    </div>
  );
}
