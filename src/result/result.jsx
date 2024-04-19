import { useEffect, useState } from 'react';
import Calculator from "../calculator/calculator";



function Result({bill,setBill,tip,setTip,amount,setAmount,total,setTotal,number,setNumber}) {

function tipAmount() {
    const tipValue = parseFloat(tip.replace('%',''))/100;
    const result = (bill * tipValue) / number; 
    setAmount(result.toFixed(2));
   
   
}

function totalResult () {
    const totalr = Number((bill / number)) + Number(amount);

    setTotal(totalr.toFixed(2));
}

function resetButton(){
    setBill ('');
    setNumber('1');
    setTip('5');
    setAmount('0.00');
    setTotal('0.00');

}


useEffect(() =>{
    tipAmount()
},[tip,bill,number,amount])
   
useEffect(() =>{
    totalResult()
},[tip,bill,number,amount])
return (
        <div className="result">
        <div className="TipAmount">
            <div>
                <label>Tip Amount</label>
                <h6>/ person</h6>
            </div>
            <div>
                <span>{amount}</span>
            </div>
        </div>
        <div className="Total">
            <div>
                <label>Total</label>
                <h6>/ person</h6>
            </div>
            <div>
                <span>{total}</span>
            </div>
        </div>
        <button className="reset" onClick={resetButton}>RESET</button>
    </div>
)

}

export default Result;