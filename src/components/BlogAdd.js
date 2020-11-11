import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ({addBlog})=> {
    const [Author,setAuthor] = useState('')
    const [Title,setTitle] = useState('')
    const [URL,setURL] = useState('')
    const beforeAddBlog = (e)=>{
        e.preventDefault()
        const newObj =  {
          id : parseInt(Math.random() * (1500 - 1) + 1),
          author : Author,
          title : Title,
          url : URL
        }
        addBlog(newObj)
        setAuthor('')
        setTitle('')
        setURL('')
    }
    return(
<div>
<Form onSubmit={beforeAddBlog}>
<Form.Group >
  <Form.Label>Author name</Form.Label>
  <Form.Control required placeholder="Enter author"  onChange={(e)=>{setAuthor(e.target.value)}} value = {Author}/>
</Form.Group>
<Form.Group >
  <Form.Label>Blog title</Form.Label>
  <Form.Control required placeholder="Enter title"  onChange={(e)=>{setTitle(e.target.value)}} value={Title}/>
</Form.Group>
<Form.Group>
  <Form.Label>Blog URL</Form.Label>
  <Form.Control required placeholder = "Enter URL" onChange={(e)=>{setURL(e.target.value)}} value={URL}/>
</Form.Group>
<Button variant="primary" type="submit">
  Add blog
</Button>
</Form>
</div>
    )
}