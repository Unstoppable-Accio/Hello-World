

const Hello = ()=>{
    let batchName =  "UnStopable"

    let styleObj = {color: "red",textAlign: "center"}

    return (
        <div className="section" >
            <h1 style= {styleObj} > Hello World</h1> 
            <p> Welcome to the class. - {batchName}</p>
            {/* curely braces can access JS elements */}

            <p> {styleObj.color} </p>
           
            
        </div>
    )
}