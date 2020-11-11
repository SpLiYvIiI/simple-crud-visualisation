import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ({updateBlog,toUpdateObj,flipisUpdate})=> {
    const [newAuthor,setnewAuthor] = useState(toUpdateObj.author)
    const [newTitle,setnewTitle] = useState(toUpdateObj.title)
    const [newURL,setnewURL] = useState(toUpdateObj.url)
    const beforeUpdate = (e) => {
        e.preventDefault()
        const newObj = {
            id : toUpdateObj.id,
            author : newAuthor,
            title : newTitle,
            url : newURL,
        }
        flipisUpdate()
        updateBlog(newObj)
    }
    return(
<div>
<Form onSubmit={beforeUpdate}>
<Form.Group >
  <Form.Label>Author name</Form.Label>
  <Form.Control required placeholder="New author"  onChange={(e)=>{setnewAuthor(e.target.value)}} value = {newAuthor}/>
</Form.Group>
<Form.Group >
  <Form.Label>Blog title</Form.Label>
  <Form.Control required placeholder="New title"  onChange={(e)=>{setnewTitle(e.target.value)}} value={newTitle}/>
</Form.Group>
<Form.Group>
  <Form.Label>Blog URL</Form.Label>
  <Form.Control required placeholder = "New URL" onChange={(e)=>{setnewURL(e.target.value)}} value={newURL}/>
</Form.Group>
<div>
<Button variant="primary" type="submit">Update Blog</Button>{' '}
<Button onClick={()=>{flipisUpdate()}}>Cancel</Button>
</div>
</Form>
</div>
    )
}