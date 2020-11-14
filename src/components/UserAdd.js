import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ({addUser})=> {
    const [username,setusername] = useState('')
    const [number,setnumber] = useState('')
    const [email,setemail] = useState('')
    const beforeAddUser = (e)=>{
        e.preventDefault()
        const newObj =  {
          id : parseInt(Math.random() * (1500 - 1) + 1),
          username : username,
          number : number,
          email : email
        }
        addUser(newObj)
        setusername('')
        setnumber('')
        setemail('')
    }
    return(
<div>
<Form onSubmit={beforeAddUser}>
<Form.Group >
  <Form.Label>Username</Form.Label>
  <Form.Control required placeholder="Enter username"  onChange={(e)=>{setusername(e.target.value)}} value = {username}/>
</Form.Group>
<Form.Group >
  <Form.Label>Number</Form.Label>
  <Form.Control required placeholder="Enter number"  onChange={(e)=>{setnumber(e.target.value)}} value={number}/>
</Form.Group>
<Form.Group>
  <Form.Label>Email</Form.Label>
  <Form.Control required placeholder = "Enter email" onChange={(e)=>{setemail(e.target.value)}} value={email} type="email"/>
</Form.Group>
<Button variant="dark" type="submit">
  Add user
</Button>
</Form>
</div>
    )
}