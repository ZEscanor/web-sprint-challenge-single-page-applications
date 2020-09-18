import React,{useState, useEffect} from "react";
import {Route,Link} from 'react-router-dom';
import schema from './validation/formSchema.js'
import "./App.css";
import Form from "./form";
import Order from "./order.js";
import axios from 'axios';
import * as yup from "yup";

const initialFormValues ={
  //inputs
    size:'',
    specialInstructions:'',
    name:'',
    // checkbox
    specialSauce: false,
    mysterySauce:false,
    originalRed: false,
    bbqSauce:false,
    spinachAlfredo: false,
    //submit

    pepperoni:false,
    sausage:false,
    bacon:false,
    onions:false,
  }
  const initialFormErrors = {
    size:'',
    name:'',
    specialSauce:'',
  }
  const initialUser = [];
  const initialDisabled = true;
  

export default function App() {

  const [user,setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getFriends = () => {
    axios.get(`https://reqres.in/api/orders`)
     .then(res =>{
        console.log("this is",res)
     }
       )
       .catch(err => {
 
       })
      }


  const postNewFriend = newFriend => {
     console.log(newFriend)
     axios.post(`https://reqres.in/api/orders`,newFriend)
      .then( res =>{
        console.log("this is res", res.data);
       //setUser([...user],res.data)
       setUser(user.concat(res.data))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(()=>{
        setFormValues(initialFormValues)
      }
      )
      
   }

  const validate = (name,value) =>{
    yup
    .reach(schema,name)
    .validate(value)
    .then(valid => {
      setFormErrors({...formErrors, [name]: ""})
    })
    .catch(err =>{
      setFormErrors({
        ...formErrors, [name]: err.errors[0]
      });
    });
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    
    validate(name,value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newFriend = {
      size: formValues.size.trim(),
      specialInstructions: formValues.specialInstructions,
      name: formValues.name.trim(),
      specialSauce: formValues.specialSauce,
    mysterySauce:formValues.mysterySauce,
    originalRed: formValues.originalRed,
    bbqSauce:formValues.bbqSauce,
    spinachAlfredo: formValues.spinachAlfredo,
    //submit

    pepperoni:formValues.pepperoni,
    sausage:formValues.sausage,
    bacon:formValues.bacon,
    onions:formValues.onions,
      
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
    }
    postNewFriend(newFriend)

  }


  useEffect(() => {
    schema.isValid(formValues)
    .then(valid=>{
     setDisabled(!valid)
    }
      )
  },[formValues])
  useEffect(() => {
    getFriends()
  },[])
  return (
    <div className="App">
      <Route exact path='/'>
     
      <div className="App-header">
      <h1>Lambda Eats</h1>
      <div className="home-button"><Link to='/'>Home</Link></div>
      <div className="form-button"><Link to='/pizza'>Pizza</Link></div>
      </div>
      </Route>
      <Route path= {'/pizza'}>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

{
       user.map(member => {
        // console.log("meme",
        // member)
          return (
            <Order key={member.id} ourOrder= {member}/>
          )
       
       })
      }
      <footer className="footer"><div className="home-button"><Link to='/'>Home</Link></div></footer> 
      </Route>
   </div>
  )
  };
