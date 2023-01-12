import React from "react";
import {LocationType} from "../models/LocationType";
import {Link, useParams} from "react-router-dom";

export type propsType = {
    location : LocationType
}



const LocationCard = (props : propsType) => {
    const params = useParams()
    console.log(params)
    return(
      <>
          <div className="row">
              <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                          <span className="card-title">Numéro de location : {props.location.id}</span>
                          {/* <p>Début de la location : {params.dateDebut} </p> */}
                          {/* <p>Fin de la location : {params.dateFin}</p> */}
                          <p>Locataire : {params.locataire}</p>
                          <p>Véhicule : {params.vehicule}</p>
                      </div>

                      <div className="card-action">
                          <Link to={`/DetailLocation/${props.location.id}`}>Voir la location</Link>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default LocationCard;