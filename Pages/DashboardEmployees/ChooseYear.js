import React from "react";

export default function ChooseYear({changeYear, yearData}) {

  return (

    <div>

    <h1>Les résultats de l'année : {yearData}</h1>

    <form>
        <label htmlFor="year">Choisissez une date</label>

        <select onChange={changeYear} id="year">
        <option selected={yearData === "2020" && "selected"} value="2020"> 2020 </option>
        <option selected={yearData === "2019" && "selected"} value="2019"> 2019 </option>
        <option selected={yearData === "2018" && "selected"} value="2018"> 2018 </option>
        <option selected={yearData === "2017" && "selected"} value="2017"> 2017 </option>
        </select>
    </form>

    </div>

  );
}
