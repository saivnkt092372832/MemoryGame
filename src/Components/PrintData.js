import React,{useEffect, useState}from "react";

import './printData.css'
const answersData=['butterfly','chair','house','lock','apple','computer','earth','guitar','scissor','clock','pencil','icecream','telephone','rainbow','kite','aeroplane','bulb','cake','hammer','flowerpot'];
const validArray=[];
const all=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
const PrintData=(props)=>{
    const [count,setcount]=useState(0);
     props.data.map((element,index) => {
        if (answersData.includes(element.toLowerCase()) && !all[index])
        {
        validArray.push(element.toLowerCase());
        all[index]=true;
        // console.log(validArray);
        }
        
    })
    var uniqueArray = Array.from(new Set(validArray));
    props.getSc(uniqueArray.length);
    props.minus(props.data.length-validArray.length);
    return(
        props.data.map((x)=>(
            <>
            {answersData.includes(x.toLowerCase()) && <p className="data" style={{color:'green'}}>{x}</p>}
            {!answersData.includes(x.toLowerCase()) &&  <p className="data" style={{color:'red'}}>{x}</p> }
            </>)
        )

        
    )
 
}
export default PrintData;