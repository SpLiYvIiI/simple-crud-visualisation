import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

export default ({Vincxeebi, switchToUpdate, deleteBlog}) => {
const beforeDelete = (vincxa)=>{
    if(window.confirm(`you really want to delete blog ${vincxa.title} ? `))
    deleteBlog(vincxa.id)
}
return(
    <div>
<Table striped bordered hover variant="dark">
<thead>
  <tr>
    <th>Blog ID</th>
    <th>Author</th>
    <th>Title</th>
    <th>URL</th>
  </tr>
</thead>
<tbody>
  {
    Vincxeebi.map(vincxa => {
      return(
        <tr key={vincxa.id}>
          <td>{vincxa.id}</td>
          <td>{vincxa.author}</td>
          <td>{vincxa.title}</td>
          <td>{vincxa.url}</td>
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