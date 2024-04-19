import Result from "../result/result" ;
import Calculator from "../calculator/calculator";
import './whitebox.module.css'
import { useState } from "react";

function Whitebox() {

const [tip, setTip] = useState('5')
const [amount, setAmount] = useState(0.00)
const [bill, setBill] = useState('')
const [number, setNumber] = useState('1')
const [total, setTotal] =useState(0);

    return (
   <div className="white">
    <Calculator bill={bill} setBill={setBill} tip={tip} setTip={setTip} number={number} 
      setNumber={setNumber}total={total} setTotal={setTotal} amount={amount} setAmount={setAmount}   />
    <Result bill={bill} setBill={setBill} tip={tip} setTip={setTip} number={number} 
      setNumber={setNumber} total={total} setTotal={setTotal} amount={amount} setAmount={setAmount}   />
    </div>
    
        )}

        export default Whitebox;