import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Signup.css';
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import API_URL from "../../config/global"; 

const Signup=()=>{
    const[formData, setFormData]=useState({
        name:"",
        email:"",
        password:"",
    });
    
    const handleChange=(e)=>{
        const{name,value}=e.target
    setFormData({...formData,
        [name]:value

    })

    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(`${API_URL}/signin/verify`,formData)

           console.log(response)
           if(response.data===true){
            alert("Registration link sent to ur email")
           }else if(response.data===false){
            alert("User already exist")
           }

        }catch(e){
            console.log("Error during reg",e)
        }
        


    };
return(
    
   <Container>
    <h1>Registeration Form</h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group>
        <Form.Label><b>Name </b></Form.Label>
        <br /><br />
        <Form.Control 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange}
         required/>
    </Form.Group>

    <Form.Group>
        <Form.Label><b>Email</b></Form.Label>
<br /><br />
        <Form.Control
         type="email" 
        name='email' 
        value={formData.email} 
        onChange={handleChange} 
        required/>
    </Form.Group>
    

    <Form.Group>
        <Form.Label><b>Password</b></Form.Label>
        <br /><br />
        <Form.Control 
        type="password" 
        name='password' 
        value={formData.password} 
        onChange={handleChange}
         required
         />

    </Form.Group>
<br />
    <Button variant="primary" type="submit">Register</Button>
 <p>Already have an account?  <Link to='/login'>Login</Link> </p>
    </Form>

   </Container>
  
   );
} 
      
export default Signup