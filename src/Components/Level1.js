import map from '../Images/map.png'
import telescope from '../Images/telescope.png'
import diamond from '../Images/diamond.png'
import ring from '../Images/ring.png'
import key from '..//Images/key.png'
import React, { useEffect, useState,useContext} from 'react';
import Clue from './Clue.js'
import './Level1.css';
import NavigatorBar from './NavigatorBar';
import Authent from './Auth'
import Modall from './Modal'



const string="kdtrm";

const Game={
    title:"Find the Clue (instructions)",
    instruction:[
    "1.You will be given 5 images with 5 clues.","2.Your task is to identify the correct image for the given clue",
  "3.The next clue will be given by clicking the correct image by the given clue .",
  "4.On wrong selection of image you will be eliminated and has to play again",
  "5.If you found all the images correctly you will be proceed to level-2",
  ],best:"ALL THE BEST",
  }
const Level1=()=>{
   const obj={
      key:false,map:false,telescope:false,ring:false,diamond:false,
  }
   const ctx=useContext(Authent);
    const [showClue,getshowClue]=useState(false);
 const [mapclue,setMapclue]=useState(false);
 const [keyclue,setKeyclue]=useState(false);
 const [Diamondclue,setDiamondclue]=useState(false);
 const [ringclue,setRingclue]=useState(false);
 const [telescopeclue,setTelescopeclue]=useState(false);
 const [result,setResult]=useState(true);
 const [str,setstr]=useState('');
 const [first,setFirst]=useState(0);
 
 const mapHandler=()=>{
   
    if(!obj.map)
    {
        obj.map=true;
    setstr((e)=>`${e}${'m'}`);
 setMapclue(true);

    }
 }
 const telescopeHandler=()=>{
    if(!obj.telescope)
    {
        obj.telescope=true;
    setstr((e)=>`${e}${'t'}`);
 setTelescopeclue(true);
    }
//  console.log(str);
 }
 const diamondHandler=()=>{
    if(!obj.diamond)
    {
        obj.diamond=true;
    setstr((e)=>`${e}${'d'}`);
 setDiamondclue(true);
    }
//  console.log(str);
 }
 const ringHandler=()=>{
    if(!obj.ring)
   { setstr((e)=>`${e}${'r'}`);
 setRingclue(true);
obj.ring=true;}
//  console.log(str);
 }
const keyHandler=()=>{
    if(!obj.key)
    {
     obj.key=true;
 setstr((e)=>`${e}${'k'}`);
 setFirst((e)=>e+1);
 setKeyclue(true);
    }
//  console.log(str);
}
// useEffect(()=>{
//     if( !keyclue)
//     setResult(false);
//     console.log(result)
// },[str])
 useEffect(()=>{
   
    if(!string.includes(str))
    setResult(false);
    if(str[0]!=string[0] &&( Diamondclue || mapclue || ringclue || telescopeclue))
    setResult(false)
    console.log(str);
    console.log(str[0])
    console.log(keyclue)
 },[keyclue,Diamondclue,ringclue,telescopeclue,mapclue])
//  useEffect(()=>{
//    if(!result)
//    window.location.reload();
//  },[result])

 const settpoo=()=>{
    getshowClue(true);
 }
    return(
        <>
        {/* {!ctx.x && alert("please login to play")} */}
         <Modall text="Dasd" onClickHandler={settpoo} instructions={Game}></Modall>
        
        <div>{ringclue && <Clue title="Clue" msg="The next clue is the one which you need to begin the hunt" ></Clue> }
        {mapclue && <NavigatorBar best='Lets Goo!'msg="Wohooo! Congratulations!! you can proceed to next level by clicking below" state="Won!!" nextstate="Lets go to Level-2" navigate='level2'></NavigatorBar>}
        {Diamondclue && <Clue title="Clue"msg="The next clue is select object which has hands but cannot clap"></Clue>}
        {telescopeclue && <Clue title="Clue" msg="The next clue is select object which changes its direction if we move the magnet towards it" ></Clue>}
        {keyclue && <Clue title="Clue"msg="The next clue is select object which has thumb and four fingers but not a hand"></Clue>}
        {showClue && <Clue title="Clue"msg="The first clue is select object can bend light to make tiny things look much bigger"></Clue>}
        <button1></button1>
        <div className='allimages'>
   <img src={map} onClick={mapHandler} className='clueimage'></img>
   <img src={telescope} onClick={telescopeHandler} className='clueimage'></img>
   <img src={diamond} onClick={diamondHandler} className='clueimage'></img>
   <img src={ring} onClick={ringHandler} className='clueimage'></img>
   <img src={key} onClick={keyHandler} className='clueimage'></img>
   </div>
   </div>
   {/* { <NavigatorBar best='Lets Goo!'msg="Wohooo! Congradulations!! you can proceed to next level by clicking below" state="Won!!" nextstate="Lets go to Level-3" navigate='level3'></NavigatorBar> } */}
    {!result && <NavigatorBar best='Better Luck Next Time' msg="Oops!! Sorry you have been eliminated!! as you didn't found the right clue" state="Lose!!" nextstate="Play again" navigate=''></NavigatorBar>}
 </>
    )
}
export default Level1;