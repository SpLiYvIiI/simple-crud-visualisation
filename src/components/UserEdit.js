import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ({updateUser,toUpdateObj,flipisUpdate})=> {
    const [newUsername,setnewUsername] = useState(toUpdateObj.username)
    const [newNumber,setnewNumber] = useState(toUpdateObj.number)
    const [newEmail,setnewEmail] = useState(toUpdateObj.email)
    const beforeUpdate = (e) => {
        e.preventDefault()
        const newObj = {
            id : toUpdateObj.id,
            username : newUsername,
             number : newNumber,
            email : newEmail,
        }
        flipisUpdate()
        updateUser(newObj)
    }
    return(
<div>
<Form onSubmit={beforeUpdate}>
<Form.Group >
  <Form.Label>Username</Form.Label>
  <Form.Control required placeholder="New username"  onChange={(e)=>{setnewUsername(e.target.value)}} value = {newUsername}/>
</Form.Group>
<Form.Group >
  <Form.Label>Number</Form.Label>
  <Form.Control required placeholder="New number"  onChange={(e)=>{setnewNumber(e.target.value)}} value={newNumber}/>
</Form.Group>
<Form.Group>
  <Form.Label>Email</Form.Label>
  <Form.Control required placeholder = "New email" onChange={(e)=>{setnewEmail(e.target.value)}} value={newEmail} type="email"/>
</Form.Group>
<div>
<Button variant="dark" type="submit">Update user</Button>{' '}
<Button variant="danger" onClick={()=>{flipisUpdate()}}>Cancel</Button>
</div>
</Form>
</div>
    )
}