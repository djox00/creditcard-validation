import React from 'react'
import './CardHistory.css';
import { Row } from 'react-bootstrap';
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";







const CardHistory = (props) => {


    console.log(props.Status);


    return (

        <div className="back" style={props.Status == 'Valid' ? { background: "#3cff0065" } : { background: "#f8000065" }}>
            <Row>
                <div className="cardInfo">    <FontAwesomeIcon icon={faCreditCard} /> {props.cardNumber}  {props.cardType}   </div>
            </Row>


        </div >




    )

}

export default CardHistory
