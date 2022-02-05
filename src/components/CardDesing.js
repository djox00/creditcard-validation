import { Form } from 'react-bootstrap';
import './CardDesign.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';



const CardDesign = (props) => {

    const valid_credit_card = (value) => {
       
        if (/[^0-9-\s]+/.test(value)) return false;

        let nCheck = 0, bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }


    const GetCardType = (number) => {
   
        var re = new RegExp("^4");
        if (number.match(re) != null)
            return "Visa";

      
      
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
            return "Mastercard";

  
        re = new RegExp("^3[47]");
        if (number.match(re) != null)
            return "American Express";


        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null)
            return "Discover";

   
        re = new RegExp("^36");
        if (number.match(re) != null)
            return "Diners";

       
        re = new RegExp("^30[0-5]");
        if (number.match(re) != null)
            return "Diners - Carte Blanche";

     
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(re) != null)
            return "JCB";

       
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(re) != null)
            return "Visa Electron";

        return "";
    }


    const checkCard = (event) => {

        setVal(event.target.value);
    }

    const checkCardStatus = (event) => {

        event.preventDefault();
        if (Val != '') {
            setVal('');
            setType2(Type);
            setStatus2(Status);
            props.getData(Val, Type, Status);
        }

    }
    const [Type2, setType2] = useState('');
    const [Status2, setStatus2] = useState('');



    useEffect(() => {
        if (Val.replace(/\s/g, '').length) {

            let valid = valid_credit_card(Val);
            let cardType = GetCardType(Val);

            if (valid == true) {
                setStatus('Valid');
                setType(cardType);

            }
            else {
                setStatus('Not Valid');
                setType('');
            }

        }

    });



    const [Status, setStatus] = useState('');
    const [Val, setVal] = useState('');
    const [Type, setType] = useState('');



    return (



        < div className="background" >
            <Form onSubmit={checkCardStatus}>
                <Form.Group>
                    <Form.Label id="inputLabel">Enter card number</Form.Label>
                    <br />
                    <br />
                    <Form.Control id="inputField" type="text" onChange={checkCard} value={Val} /> <Form.Label id="cardStatus" style={Status2 == 'Valid' ? { color: "green" } : { color: "red" }}>{Status2}</Form.Label>
                    <br /> <Form.Label id="cardType">{Type2} </Form.Label>
                    <br /><br />
                    <Button className="checkButton" type="submit"> check</Button>
                </Form.Group>
            </Form>
        </div >

    );
}

export default CardDesign
