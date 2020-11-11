import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import BlogAdd from './components/BlogAdd'
import Blogs from './components/Blogs'
import BlogEdit from './components/BlogEdit'

const vincxebi =
[
  {
    id: 1,
    author : "atulie1",
    title : "racxa1",
    url : "wikipedia.com"
  },
  {
    id: 2,
    author : "atulie2",
    title : "racxa2",
    url : "wikipedia.com"
  },
  {
    id: 3,
    author : "atulie3",
    title : "racxa3",
    url : "wikipedia.com"
  },
  
]

const App = ()=>{
  const [Vincxeebi,setVincxeebi] = useState(vincxebi)
  const [isUpdate,setisUpdate] = useState(false)
  const [toUpdate,setToUpdate] = useState({})
  const addBlog = (newObj) => setVincxeebi(Vincxeebi.concat(newObj))
  const updateBlog = (newObj) => setVincxeebi(Vincxeebi.map(vincxa => vincxa.id === newObj.id ? newObj : vincxa))
  const deleteBlog = (id) => setVincxeebi(Vincxeebi.filter(vincxa => vincxa.id !== id))
  const flipisUpdate = ()=> setisUpdate(!isUpdate)
  const switchToUpdate = (toUpdate) =>{
    flipisUpdate()
    setToUpdate(toUpdate)
  }
  return(
    <div>
  <Container>
    {isUpdate ? <BlogEdit updateBlog={updateBlog} toUpdateObj={toUpdate} flipisUpdate={flipisUpdate}/> :<BlogAdd addBlog={addBlog}/>}
    <Blogs Vincxeebi={Vincxeebi} switchToUpdate={switchToUpdate} deleteBlog={deleteBlog}/>
  </Container>
    </div>
  )
}

export default App