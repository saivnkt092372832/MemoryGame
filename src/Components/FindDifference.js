import React, { useRef, useState ,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import imageUrlb from '../Images/image1.png';
import imageUrla from "../Images/image2.png";
import style from './FindDifference.module.css';
import { Modal } from "bootstrap";
import Modall from "./Modal";
import Clue from "./Clue";
import NavigatorBar from './NavigatorBar'
import { scoreActions } from "../store/scores";

const Game={
  title:"Find The Differences (instructions)",
  instruction:[
  "1.You will be given 2 images one is original another is modified.","2.Your task is to identify the 5 differences among those images",
"3.You will get the difference by clicking the position of the difference in the Modified image. ",
"4.On finding each difference you will get a score of 5points.","5.There would be the timeout of 20 seconds make sure you have to guess all the 5 differences ",
"6.If you can guess all the differences correctly you will get the code for further process",
],best:"ALL THE BEST",
}
const FindDifferences = () => {
  const [again,setAgain]=useState({0:1,1:1,2:1,3:1,4:1});
  const [numDifferencesFound, setNumDifferencesFound] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [ImageWidth,setImageWidth]=useState(628);
  const [ImageHeight,setImageHeight]=useState(380);
  const [time,setTime]=useState(30);
  const [reach,setReach]=useState(true);
  const [win,setWin]=useState(false);
  const dispatch = useDispatch();
  const imgRef=useRef();

  const differences = [
    {
      id: 1,
      imageUrl1: imageUrla,
      imageUrl2: imageUrlb,
      differencesList: [
        { x: (ImageWidth*69.80)/100, y: (ImageHeight*13.77)/100,},
        { x:(ImageWidth*14.61)/100, y: (ImageHeight*38.48)/100, },
        { x: (ImageWidth*81.16)/100, y: (ImageHeight*93.46)/100,},
        {x:(ImageWidth*51.94)/100, y: (ImageHeight*46.83)/100,},
        {x:(ImageWidth*21.75)/100, y: (ImageHeight*78.34)/100,}
      ]
    }
  ];
  useEffect(()=>{
    if(time===1)
    {
    setReach(true);
    setIsGameOver(true);
    }
    setTimeout(()=>{
      if(!reach)
      setTime((e)=>e-1)
    },1000)
  },[time,reach])
  useEffect(()=>{
    console.log(again)
  },[again])
  useEffect(() => {
      setImageWidth(imgRef.current.width);
      const fg=document.querySelector('#sai');
      setImageHeight((imgRef.current.width*117.85)/100);
      // alert("Please read the instructions before playing the game");
  }, []);
  const handleImageClick = e => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    {console.log(x) 
    console.log(y)
    console.log(differences[0].differencesList[0]);
      }
    const differencesList = differences[0].differencesList;

    for (let i = 0; i < differencesList.length; i++) {
      const difference = differencesList[i];
      if (x > difference.x - 15 && x < difference.x + 15 && y > difference.y - 15 && y < difference.y + 15 && again[`${i}`]===1) {
        console.log([i]);
        setAgain((prevState )=> ({...prevState, [i]: 0}));
        setNumDifferencesFound(numDifferencesFound + 1);
        if (numDifferencesFound === differencesList.length - 1) {
          setIsGameOver(true);
        }
        break;
      }
    }
  };
 
  // const orivaari=(e)=>{
  //   const x = e.nativeEvent.offsetX;
  //   const y = e.nativeEvent.offsetY;
  //   console.log(x) 
  //   console.log(y)
  // }
  useEffect(()=>{
    if(isGameOver)
    {dispatch(scoreActions.setlevel2(numDifferencesFound))
    dispatch(scoreActions.modifyscore());
    if(numDifferencesFound === 5)
    setWin(true);}
    
  },[isGameOver])
  const settpoo=()=>{
    setReach(false);
  }
  useEffect(()=>{
    
  })
  return (
    <div className={style["App"]}>
      <Modall text="Dasd" onClickHandler={settpoo} instructions={Game}></Modall>
        <>
        <h1 className={style["main"]}>Find the Differences</h1>
        <span className={style['score']}>Current Score<span className={style['valuescore']}>{numDifferencesFound*5}</span></span>
        <p className={style["para"]}>Count Down Starts {time}</p>
        <div className={style["differences-found"]}>{numDifferencesFound} / {differences[0].differencesList.length} differences found</div>
        <div className={style["p1"]}>
        <p className={style["header"]}>Original Image</p>
        <p className={style["header"]}>Modified Image</p>
        </div>
          <div className={style["image-container"]}>
            <img className={style["image"]} id='sai' src={differences[0].imageUrl1} alt="original"  />
            <img className={style["image"]} ref={imgRef} src={differences[0].imageUrl2} alt="modified" onClick={handleImageClick} />
          </div>
        </>
        {win && <NavigatorBar best='Lets Goo!'msg="Wohooo! Congratulations!! you can proceed to next level by clicking below" state="Won!!" nextstate="Lets go to Level-3" navigate='level3'></NavigatorBar> }
    {!win && isGameOver && <NavigatorBar best='Better Luck Next Time' msg="Oops!! Sorry you have been eliminated!! as you didn't found the 5 differnces in the given countdown" state="Lose!!" nextstate="Play again" navigate=''></NavigatorBar>}
    </div>
  );
};

export default FindDifferences;