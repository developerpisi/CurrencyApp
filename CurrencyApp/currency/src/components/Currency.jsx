import React, { useState } from "react";
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL ='https://api.freecurrencyapi.com/v1/latest';
let API_KEY='fca_live_d7qTUpYk07PBfftQkEiXous96T2pdak1FGDV8yl3';

function Currency() {
    const [amount,setAmount] = useState(1);
    const[fromCurrency,setFromCurrency] = useState('USD');
    const[toCurrency,setToCurrency]=useState('TRY');
    const[result,setResult]=useState(0);
    
    
    const exchange = async ()=>{
    const response = await axios.get((`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`))  
    const result = (response.data.data[toCurrency]*amount).toFixed(2) ;
        setResult(result);
    }
    
    
    return (
        <div className='currency-div'>
            <div style={{marginTop:'-20px',rontFamily:'arial',backgroundColor:'black',color:'#fff',width:'50%',textAlign:'center'}}>
                <h3 >CURRENCY CONVERTER</h3>
            </div>
            
            <div style={{border:'2px solid black',width:'50%',paddingTop:'50px',paddingBottom:'100px', marginTop:'100px',marginRight:'30px',marginLeft:'30px',textAlign:'center'}}>
                <input value={amount} 
                       onChange={(e)=>setAmount(e.target.value)}
                       type="number" className='amount'/>
                
                <select onChange={(e)=>setFromCurrency(e.target.value)} className= 'from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaRegArrowAltCircleRight style={{fontSize:'25px',color:'#090909',marginRight:'10px'}}/>
                <select onChange={(e)=>setToCurrency(e.target.value)} 
                    className= 'to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                
                <input value={result}  type="number" className='result' ></input>
               
                <div style={{marginTop:'20px', cursor:'pointer'}}>
                    <button onClick={exchange}>CONVERT</button>
                </div>
            </div>
        </div>
    );
}

export default Currency;