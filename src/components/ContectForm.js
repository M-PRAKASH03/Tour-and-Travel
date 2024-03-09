import "./ContectFormStyles.css"
import { useState } from "react"

function ContectForm(){
    const [data,setData] = useState({username: "",email:"",password:"",textarea:""})

    const handlChange =(event)=>{
        const {name,value} = event.target

        setData((prevData)=>({...prevData,[name]:value}))
      }
      
      const handleSubmit = (event)=>{
        event.preventDefault()
      console.log(data)
    }

    return (
        <>
        <div className="form-continar">
            <h1>Send a message to us...!!</h1>
            <form onSubmit={handleSubmit}>
              
                <input type="text"
                placeholder="your username" 
                name="username"
                minLength={8}
                onChange={handlChange} 
                required /> 

                <input type="email"
                placeholder="your email"
                name="email" 
                onChange={handlChange}
                required />
                
                <input type="password"
                placeholder=" Your password"
                name="password" 
                minLength={6}
                onChange={handlChange}
                required />

               <textarea  placeholder="Message"
               name="textarea"
               onChange={handlChange}
               minLength={30}
               required
               >
               </textarea>
          <input type="submit"  className="sub-btn"/>          
          </form>
        </div>
        </>
    )

}
export default ContectForm