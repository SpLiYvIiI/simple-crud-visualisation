import {React,useState} from 'react'
import {FormControl,Dropdown,InputGroup,DropdownButton} from 'react-bootstrap'
import PropTypes from 'prop-types';




 const Search = ({searchUser})=>{
    const [searchBy,setsearchBy] = useState('username')
    const [searchVal,setsearchVal] = useState('')
    return (<InputGroup className="mb-3" >
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={"Searching by : " + searchBy}  
      id="input-group-dropdown-1"
    >
      <Dropdown.Item onClick={()=>{setsearchBy('username');searchUser(searchVal,'username')}}>Username</Dropdown.Item>
      <Dropdown.Item onClick={()=>{setsearchBy('number');searchUser(searchVal,'number')}}>Number</Dropdown.Item>
      <Dropdown.Item onClick={()=>{setsearchBy('email');searchUser(searchVal,'email')}}>Email</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1"  onChange={(e)=>{setsearchVal(e.target.value);searchUser(e.target.value,searchBy)}} placeholder={"Enter "+ searchBy} value = {searchVal}/>
  </InputGroup>)
}
Search.displayName = 'Search'
Search.propTypes = {
  searchUser: PropTypes.func.isRequired
}
export default  Search;