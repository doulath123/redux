import  {Routes,Route} from "react-router-dom";
import { AddCountry } from "./AddCountry";

import { HomePage } from "./HomePage";

export const AllRoute =() =>{
    return <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-country" element={<AddCountry/>}/>
        {/* <Route path="add-city" element={<AddCity/>}/> */}
    </Routes>
    </>
}