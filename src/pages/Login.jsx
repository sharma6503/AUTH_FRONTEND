import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Login.css';
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import API_URL from "../../config/global"; 

const Login=()=>{
    const[formData, setFormData]=useState({
        
        email:"",
        password:"",
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const{name,value}=e.target
    setFormData({...formData,
        [name]:value

    })

    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response=await axios.post(`${API_URL}/login`,formData)

           console.log(response)
           if (response.data==='Invalid Username and password '){
            alert("Invalid Username and password ")
           }
           else if (response.data==='Server busy')
           {
            alert("verify your emailid")
           }
           else if (response?.status){
            localStorage.setItem("userInfo",JSON.stringify(response))
            navigate("/home")
           }


    };

    return(
<Container>
    <h1>Login Form</h1>
    <Form onSubmit={handleSubmit}>
    
    <Form.Group>
        <Form.Label><b>Email</b></Form.Label>
        <br /><br />
        <Form.Control type="email" 
        name='email' 
        value={formData.email} 
        onChange={handleChange} required/>
    </Form.Group>
    <Form.Group>
        <Form.Label><b>Password</b></Form.Label>
        <br /><br />
        <Form.Control 
        type="password" 
        name='password' 
        value={formData.password} 
        onChange={handleChange} 
        required/>
    </Form.Group>
    <Button variant="primary" type="submit">Login</Button>
     {/* <p>ALready have an account?</p>
     <Link to='/login'>Login</Link>  */}
    </Form>

   </Container>

    )
}

export default Login