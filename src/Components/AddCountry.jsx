import { Button } from "@mui/material";
import { useState } from "react";
import  {useDispatch} from "react-redux"

export const AddCountry =()=>{
    const  [country,setCountry] =useState({
        country:""
    })
    

    const dispatch = useDispatch()
    const addcountry  =()=>{
        dispatch(addcountry(country.country))
    }
    return <>
    <h2>Add Country</h2>
    <input type="text" placeholder="cname" value={country} onChange={(e)=>setCountry({...country,country:e.target.value})} />
    <br />
    <br />
    <br />
    <Button variant="contained" color="success" onclick={addcountry}>
        Add Country

    </Button>
    </>
}
