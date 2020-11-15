import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import UserChanges from './components/UserChanges'
import Users from './components/Users'
import Search from './components/Search'

let db =
[
  {
    id: 1,
    username : "atulie1",
    number : "599134211",
    email : "atuka@gmail.com"
  },
  {
    id: 2,
    username : "atulie2",
    number : "557124211",
    email : "giorgi@gmail.com"
  },
  {
    id: 3,
    username : "atulie3",
    number : "558100212",
    email : "vincxa@gmail.com"
  },
  
]

const App = ()=>{
  const [Vincxeebi,setVincxeebi] = useState(db)
  const [isChange,setisChange] = useState(false)
  const [toUpdate,setToUpdate] = useState({})
  const addUser = (newObj) =>{
    const updated = db.concat(newObj)
    db=updated
    setVincxeebi(db)
  } 
  const updateUser = (newObj) => {
  const updated =  db.map(vincxa => vincxa.id === newObj.id ? newObj : vincxa)
  db = updated
  setVincxeebi(db)
  }
  const deleteUser = (id) => {
    const updated =  db.filter(vincxa => vincxa.id !== id)
    db = updated
    setVincxeebi(db)
  }
  const searchUser = (toSearch,criteria) => {
    if(toSearch === '') setVincxeebi(db)
    else{
      switch(criteria){
        case 'username' :{
          setVincxeebi(db.filter(user => user.username.toLowerCase().indexOf(toSearch.toLowerCase()) !== -1));
          break;
        } 
        case 'number' : {
          setVincxeebi(db.filter(user => user.number.toLowerCase().indexOf(toSearch.toLowerCase()) !== -1));
          break;
        }
        case 'email' : {
          setVincxeebi(db.filter(user => user.email.toLowerCase().indexOf(toSearch.toLowerCase()) !== -1));
          break;
        }
        default : break;
      }
    }
  }
  const flipisChange = ()=> setisChange(!isChange)
  const switchToUpdate = (toUpdate) =>{
    setToUpdate(toUpdate)
    flipisChange()
  }
  return(
    <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand >simple-crud</Navbar.Brand>
  </Navbar>
  <Container>
  {isChange ? 
  <UserChanges addUser={addUser} updateUser={updateUser} flipisChange={flipisChange} toUpdate={toUpdate}  setToUpdate={setToUpdate}/> 
  : 
  <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={()=>{flipisChange()}}>Add user</button>}
  <Search searchUser = {searchUser}/>
  <Users Vincxeebi={Vincxeebi} switchToUpdate={switchToUpdate} deleteUser={deleteUser}/>
  </Container>
    </div>
  )
}

export default App