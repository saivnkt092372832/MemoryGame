import Home from "./Components/Home";
import FindDifferences from "./Components/FindDifference";
import 'bootstrap/dist/css/bootstrap.min.css';
import Level3 from "./Components/Level3";
import Level1 from "./Components/Level1";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useAccordionButton } from "react-bootstrap";
import { useEffect } from "react";

function App() {
  // const [data,setdata]=useState({});
  const scoree=useSelector((state)=>state.score.totalScore);
  const maill=useSelector((state)=>state.score.mail);
  const level2score=useSelector((state)=>state.score.level2score)
  const level3score=useSelector((state)=>state.score.level3score)
  // console.log(scoree,maill);
  useEffect(()=>{
    if(maill!='v')
   { const dataa={maill,scoree};
    console.log(dataa);
    fetch('https://backend-422fb-default-rtdb.firebaseio.com/score/getscore.json/',{
      method:'POST',
      body:JSON.stringify(dataa)
    });}
    
  }
  ,[scoree,level2score,level3score])
  return(
    <>
    <Home></Home>
   {/* <FindDifferences></FindDifferences> */}
   {/* <Level3></Level3> */}
   {/* <Level1></Level1> */}
    </>
  )
}    

export default App;
