// 17.2
// import React from "react"
import Button from "./Components/Button"

const App = ()=>{
    let batchName =  "UnStopable"

    let styleObj = {color: "red",textAlign: "center"}

    return (
        <div className="section" >
            <h1 style= {styleObj} > Hello World</h1> 
            <p> Welcome to the class. - {batchName}</p>
            {/* curely braces can access JS elements */}

             {/* <Button name="Apple"  color="green" cName="f1"/> 
             <Button name="Mango"  color="yellow"
             cName="f2"
             /> 
             <Button name="Orange"  color="Orange"
             cName="f3"
             />  */}

             <Button 
               name="Apple"
               color = "red"
               quantity={10}
               store = {["Reliance", "tata", "BigBasket"]}
             />

             
             
           
            
        </div>
    )
}





export default App



// export const Hello1 = ()=>{
//     let batchName =  "UnStopable1"

//     let styleObj = {color: "red",textAlign: "center"}

//     return (
//         <div className="section" >
//             <h1 style= {styleObj} > Hello World1</h1> 
//             <p> Welcome to the class. - {batchName}</p>
//             {/* curely braces can access JS elements */}

//             <p> {styleObj.color} 1</p>
           
            
//         </div>
//     )
// }