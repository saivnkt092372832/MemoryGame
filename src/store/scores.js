import { createSlice } from "@reduxjs/toolkit";

const ScoreState = {mail:"v",totalScore:0,level2score:0,level3score:0}
const scoreSlice = createSlice({
    name:"Score",
    initialState:ScoreState,
    reducers:{ 
        setEmail(state,action){
            state.mail=action.payload;
        },
        modifyscore(state,action){
            state.totalScore=state.level2score+state.level3score;
        },
        setlevel2(state,action){
            state.level2score=action.payload;
        },
        setlevel3(state,action){
            state.level3score=action.payload;
        }
    }
})
export const scoreActions=scoreSlice.actions;
export default scoreSlice;