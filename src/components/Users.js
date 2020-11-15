import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'

const Users = ({Vincxeebi, switchToUpdate, deleteUser}) => {
const beforeDelete = (vincxa)=>{
    if(window.confirm(`you really want to delete user ${vincxa.username} ? `))
    deleteUser(vincxa.id)
}
return(
    <div>
<Table striped bordered hover variant="dark">
<thead>
  <tr>
    <th>User ID</th>
    <th>Username</th>
    <th>Number</th>
    <th>Email</th>
  </tr>
</thead>
<tbody>
  {
    Vincxeebi.map(vincxa => {
      return(
        <tr key={vincxa.id}>
          <td>{vincxa.id}</td>
          <td>{vincxa.username}</td>
          <td>{vincxa.number}</td>
          <td>{vincxa.email}</td>
          <td>
            <Button onClick={()=>{switchToUpdate(vincxa)}} variant="dark">Edit</Button>{' '}
            <Button onClick={()=>{beforeDelete(vincxa)}} variant="danger">Delete</Button> 
          </td>
        </tr>
      )
    })
  }
</tbody>
</Table>
</div>
)
}
Users.displayName = 'Users';
Users.porpTypes = {
  Vincxeebi : PropTypes.array.isRequired,
  switchToUpdate : PropTypes.func.isRequired,
  deleteUser : PropTypes.func.isRequired
}
export default Users;