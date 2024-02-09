import React from 'react'
import { Col, Form } from 'react-bootstrap';

function Search({query, onQueryChange}) {
   
  return (
    <div>
        <Col md="8" className=' mx-auto '>
        <Form className='border-primary'>
        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
         <Form.Control type="text" placeholder="search todo item"  value={query}  onChange={(e)=>onQueryChange(e.target.value)}/>
        </Form.Group>
       
        </Form>
        </Col>
    </div>
  )
}

export default Search;