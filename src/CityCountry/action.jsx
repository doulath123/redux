import  axios from "axios"

import * as types from "./type"

const countryAddReq =(payload)=>(payload)=>({type:types.COUNTRRY_ADD_REQ,payload});
const countryAdded =(payload)=>(payload)=>({type:types.COUNTRY_ADDED,payload});
const countryAddFail=(payload)=>(payload)=>({type:types.COUNTRY_ADD_FAIL,payload});


const cityAddReq =(payload)=>(payload)=>({type:types.CITY_ADD_REQ,payload});
const cityAdded  =(payload)=>(payload)=>({type:types.CITY_ADDED,payload});
const cityAddFail=(payload)=>(payload)=>({type:types.CITY_ADD_FAIL,payload});

const AddCountry=(country)=>async(dispatch)=>{
    dispatch(countryAddReq({msg:"Loading"}))
    const res = await axios.post(" http://localhost:8080/add-country",{
        country
    }).catch((err)=>{
        dispatch(countryAddFail({msg:err.response.data}))
    })
    if(res){
        dispatch(countryAdded({}))
    }
}
export {AddCountry}