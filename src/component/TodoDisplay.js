
import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { IoTrashOutline } from "react-icons/io5";
import Draggable from 'react-draggable';
import { FaRegEdit } from "react-icons/fa";

function TodoDisplay({item,onDelete, editTodo}) {
    let nodeRef = React.useRef(null)
  return (
    <Draggable 
     nodeRef={nodeRef}>
         <div>
     <Col md="4" className='mx-auto mt-3'>
        
        <Card  className='mb-3' ref={nodeRef}>
         <Card.Header className='text-center bg-primary fw-bold'>Daily Lesson Plan</Card.Header>
         <Card.Body  className='bg-dark text-white'>
             <ListGroup.Item className='text-start border-dark todo'><strong >Grade:</strong> {item.grade} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Subject:</strong> {item.subject} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Date:</strong> {item.date} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Topic:</strong> {item.topic} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Lesson:</strong> {item.lesson} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Goal:</strong> {item.goal} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Material:</strong> {item.material} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Outcome:</strong> {item.outcome} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Assigment:</strong> {item.assigment} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Reflection:</strong> {item.reflection} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Group Assigment:</strong> {item.g_assigment} </ListGroup.Item>
            <ListGroup.Item className='text-start  border-dark'><strong>Group Presentation:</strong> {item.presentation} </ListGroup.Item>
             <Row>
                <Col>
                <ListGroup.Item className='text-start  justify-content-center align-items-center'><Button onClick={()=>onDelete(item.id)} variant='danger'> <IoTrashOutline /> Delete</Button> </ListGroup.Item>
                </Col>
                 <Col>
                 <ListGroup.Item className='text-start justify-content-center align-items-center '><Button onClick={()=>editTodo(item.id)} variant='primary'> < FaRegEdit /> Edit</Button> </ListGroup.Item>
                 </Col>
             </Row>
         </Card.Body>
          </Card>
        
     </Col> 
    </div>
    </Draggable>
  )
}

export default TodoDisplay;