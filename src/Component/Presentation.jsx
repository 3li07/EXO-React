import { Component } from "react";

function Presentation({data}) {
    return <div style={{backgroundColor: "#7430f9"}} className="col-md-4">
        <ul className="list">
            <li className="list-item">Nom: {data.nom}</li>
            <li className="list-item">Prenom: {data.prenom}</li>
            <li className="list-item">Telephone: {data.tel}</li>
            <li className="list-item">Email: {data.mail}</li>
        </ul>
    </div>
}
export default Presentation
