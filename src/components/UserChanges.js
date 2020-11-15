import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import notEmpty from '../helper/notEmpty'
import checkEmail from '../helper/checkEmail'
import checkUsername from '../helper/checkUsername'
import checkNumber from '../helper/checkNumber'


const UserChanges =  ({addUser,updateUser,flipisChange,toUpdate,setToUpdate})=> {
    const isItUpdate = notEmpty(toUpdate)
    const [username,setusername] = useState(toUpdate.username || '')
    const [number,setnumber] = useState(toUpdate.number || '')
    const [email,setemail] = useState(toUpdate.email || '')
    const [incorrectNumber,setincorrectNumber] = useState(false)
    const [incorrectUsername,setincorrectUsername] = useState(false)
    const [incorrectEmail,setincorrectEmail] = useState(false)
    const beforeAddUser = ()=>{
        const newObj =  {
          id : parseInt(Math.random() * (1500 - 1) + 1),
          username : username,
          number : number,
          email : email
        }
        addUser(newObj)
    }
    const beforeUpdate = () => {
      const newObj =  {
        id : toUpdate.id,
        username : username,
        number : number,
        email : email
      }
      updateUser(newObj)
      setToUpdate({})
  }
    const beforeChange = (e)=>{
    e.preventDefault()
    if(checkUsername(username) && checkEmail(email) && checkNumber(number)){
    if(!isItUpdate) beforeAddUser()
    else beforeUpdate()
    setusername('')
    setnumber('')
    setemail('')
    flipisChange()
    }
    else {
      if(!checkUsername(username)){
        setusername('')
        setincorrectUsername(true);
      } 
      if(!checkEmail(email)){
        setemail('')
        setincorrectEmail(true)
      } 
      if(!checkNumber(number)){
        setnumber('')
        setincorrectNumber(true)
      }
    }
    }
    return(
<div>
<Form onSubmit={beforeChange}>
<Form.Group >
  <Form.Label>Username</Form.Label>
  <Form.Control required placeholder="Enter username"  onChange={(e)=>{setusername(e.target.value)}} value = {username}/>
  {incorrectUsername ? <Form.Label style={{color : 'red', fomtSize : '20px'}}>
  <ul>
  <li>Minimum 6 characters</li>
  <li>username should contain at least one character</li>
  <li>No special characters allowed except _</li>
  <li>No space allowed</li>
  </ul>
  </Form.Label> : <></>}
</Form.Group>
<Form.Group >
  <Form.Label>Number</Form.Label>
  <Form.Control required placeholder="Enter number" onChange={(e)=>{setnumber(e.target.value)}} value={number} />
  {incorrectNumber ? <Form.Label style={{color : 'red', fomtSize : '20px'}}>
  Your number should contain only digits and must be 8-15 digits long 
  </Form.Label> : <></>
  }
</Form.Group>
<Form.Group>
  <Form.Label>Email</Form.Label>
  <Form.Control required placeholder = "Enter email" onChange={(e)=>{setemail(e.target.value)}} value={email} type="email"/>
  {incorrectEmail ? <Form.Label style={{color : 'red', fomtSize : '20px'}}>
  Enter valid email
  </Form.Label> : <></>
}
</Form.Group>
<Button variant="dark" type="submit">
  {isItUpdate ? 'Update user': 'Add user'}
</Button>
<Button variant="danger" onClick={()=>{    
    setusername('');
    setnumber('');
    setemail('');
    flipisChange();
    setToUpdate({})
}}>Cancel</Button>
</Form>
</div>
    )
}
UserChanges.displayName = 'UserAdd'
UserChanges.propTypes = {
  addUser: PropTypes.func.isRequired,
  updateUser : PropTypes.func.isRequired,
  flipisChange : PropTypes.func.isRequired,
  toUpdate : PropTypes.object.isRequired,
  setToUpdate : PropTypes.func.isRequired
}

export default UserChanges;