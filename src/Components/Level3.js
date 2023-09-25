import { useEffect,useState } from 'react'
import React from 'react';
import style from'../Components/level3.module.css';
import PrintData from './PrintData';
import Modall from './Modal';
import Final from './Final';
import NavigatorBar from './NavigatorBar'
import Treasure from './Treasure';
import { scoreActions } from '../store/scores';
import { useDispatch } from 'react-redux';
const answersData=['butterfly','chair','house','lock','apple','computer','globe','guitar','scissor','clock','pencil','icecream','telephone','rainbow','kite','aeroplane','bulb','cake','hammer','flowerpot'];
const Game={
    title:"Memory Game (instructions)",
    instruction:[
    "1.You will be given one image consisting of many objects.","2.This image can be displayed for 20 seconds ",
  "3.Your task is to remember those items and type the items within 30 seconds in the form which will appear after the dissaperance of image.",
  "4.You will be added one point to current score on correct guess and one point can be deducted on wrong guess.","5.You have to score atleast 8 points to get the code for further process",
  ],best:"ALL THE BEST",
  }

const Level3=()=>{
    const [time,setTime]=useState(65);
    const [reach,setReach]=useState(true);
   const [loadImage,SetloadImage]=useState(true);
   const [inputData,setInputData]=useState('');
   const [items,setItems]=useState([]);
   const [score,setScore]=useState(0);
   const [negScore,setNegScore]=useState(0);
   const [win,setwin]=useState(false);
   const [gameover,setGameover]=useState(false);
   const dispatch=useDispatch();

//    const [minusScore,setMinusScore]=useState(0);
useEffect(()=>{
    console.log("okbro")
    if(time===1)
    {
    setReach(true);
    setGameover(true);
    }
    if(!reach){
    setTimeout(()=>{
      setTime((e)=>e-1)
    },1000)
}
  },[time,reach])
   useEffect(()=>{
    setTimeout(()=>{
        SetloadImage(true);
    },20000)
   },[loadImage]);
   useEffect(()=>{
    dispatch(scoreActions.setlevel3(score-negScore));
    dispatch(scoreActions.modifyscore());
    if(score-negScore >= 8)
    setwin(true);
    console.log(win)
   },[gameover])
   const inputHandler=(e)=>{
    setInputData(e.target.value);
   }
   const addItemHandler=(e)=>{
    e.preventDefault();
    setItems((e)=>[...e,inputData]);
    setInputData('');
   }
   const getScore=(x)=>{
    setScore(x);
   }
const getMinusScore=(ui)=>{
    setNegScore(ui);
}
const changee=()=>{
    SetloadImage(false);
    setReach(false);
}
   return(
    <div className='mainBody'>
        <Modall instructions={Game} onClickHandler={changee}></Modall>
        <h1 className={style['head']}>MEMORY GAME</h1>
    {!loadImage && <img className={style["jio"]}src='https://faculty.washington.edu/chudler/gif/puzmatch.gif' alt='sorry'></img>}
    {loadImage && <div>
        <span className={style["score"]}>Current Score<span className={style['valuescore']}>{score-negScore}</span></span>
        <p className={style['par']}>Count Down Starts {time}</p>
        <center><div className='row'>
        
      <div className={`col-6 text-center w-25 ${style["display"]}`}>
        <center> <PrintData data={items} getSc={getScore} minus={getMinusScore}></PrintData></center>
   </div>
       <div className='col-6 text-center w-50'> <center><form onSubmit={addItemHandler}>
        <label className={style.label} htmlFor='inputdata'>Enter the item</label>
            <div><input className={style.input} value={inputData}type='text' id='inputdata' onChange={inputHandler} placeholder='Best Of Luck'></input> </div>
            <div>
            <button className={style['klrahul']}>ADD ITEM </button>
            </div>
        </form></center>
        </div>
   </div>
   </center>
    </div>}
    {win && <Treasure title="WOHOOOO!!CONGRATULATIONS!! YOU HAD FOUND YOUR TREASURE"></Treasure> }
    {!win && gameover && <NavigatorBar best="Better Luck Next Time" msg="Oops!! Sorry you have been eliminated!! as you didn't remembered atleast 7 objects in the countdown!!" set="Better Luck Next Time" state="Lose!!" nextstate="Play again" navigate=''></NavigatorBar>}
    </div>
   )
}
export default Level3;