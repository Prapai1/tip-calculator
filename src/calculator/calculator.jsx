import { useState } from 'react';


function Calculator ({bill,setBill,setTip,number,setNumber}){
    
    
    function handleClick (value) {
        setTip(value);
    }


    
    return (
   <div className="calculate">
    <div className="bill">
        <label>Bill</label><br/>
        <input type="text"  placeholder='0.00' value={bill}
        onChange={e => setBill(e.target.value)} />
    </div>

    <div className="tip">
        <label>Select Tip %</label><br/>
        <div className="tipButton">
       <button onClick={() =>handleClick('5')}>5%</button>
       <button onClick={() =>handleClick('10')}>10%</button>
       <button onClick={() =>handleClick('15')}>15%</button>
       <button onClick={() =>handleClick('20')}>20%</button>
       <button onClick={() =>handleClick('25')}>25%</button>
       <button onClick={() =>handleClick('50')}>50%</button> 
    </div>

    </div>
    <div className="people">
        <label>Number of People</label><br/>
        <input type="text" placeholder='0' value={number}
        onChange={e => setNumber(e.target.value)}/>
    </div>
</div>

    );
}

export default Calculator;