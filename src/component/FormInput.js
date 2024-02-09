
import React, { useState } from 'react';
import {Form, Row,Col, Button, Card} from "react-bootstrap"

function FormInput({onSendTodo,lastId}) {
  const details={
    grade:" ",
    subject:" ",
    date:" ",
    topic:" ",
    lesson:" ",
    goal: " ",
    material:" ",
    outcome:" ",
    assigment:" ",
    reflection:" ",
    g_assigment:" ",
    presentation:" "

  }
  const [devalue, setDevalue]=useState(details);
  const [toggle,setToggle]=useState(false)


  function handleTodoUpdate(){
     
    const todoInfo={
      id:lastId +1,
      grade:devalue.grade,
      subject:devalue.subject,
      date:devalue.date ,
      topic:devalue.topic,
      lesson:devalue.lesson,
      goal:devalue.goal,
      material:devalue.material,
      outcome:devalue.outcome,
      assigment:devalue.outcome,
      reflection:devalue.reflection,
      g_assigment:devalue.g_assigment,
      presentation:devalue.presentation
    }
    onSendTodo(todoInfo)
    setDevalue(devalue)
    setToggle(!toggle)
  }

  return (
    <div>
    <Col md="8"  className='mx-auto mt-3 mb-3'>
    <Card>
      <Card.Header className='fw-bold bg-primary text-white'>
       Daily Lesson Plan
        <Button onClick={()=>setToggle(!toggle)} className='float-end' variant='success'>+</Button>
      </Card.Header>
      <Card.Body  className='bg-dark text-white'>
           { toggle &&
            <Form className='justify-content-center mx-3 border-primary'>
            <Row md="8" className='mt-5'>
              <Col as={Col} >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start fw-bold'>Grade</Form.Label>
            <Form.Control type="text" 
                 onChange={(e)=>setDevalue({...devalue, grade:e.target.value})} />
          </Form.Group>
              </Col>
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label className='float-start fw-bold'>Subject</Form.Label>
            <Form.Control type="text" 
             onChange={(e)=>setDevalue({...devalue, subject:e.target.value})} />
          </Form.Group>
              </Col>
              
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label className='float-start fw-bold'>Date</Form.Label>
            <Form.Control type="date" 
                   onChange={(e)=>setDevalue({...devalue, date:e.target.value})} />
          </Form.Group>
              </Col>
             
    
            </Row>
            <Row>
                
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label className='float-start fw-bold'>  Topic</Form.Label>
            <Form.Control as="textarea"  
                   onChange={(e)=>setDevalue({...devalue, topic:e.target.value})} />
          </Form.Group>
              </Col>
               
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label className='float-start fw-bold'>Lesson</Form.Label>
            <Form.Control as="textarea" 
                   onChange={(e)=>setDevalue({...devalue, lesson:e.target.value})} />
          </Form.Group>
              </Col>
            </Row>
            <Row>
               
            <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
            <Form.Label className='float-start fw-bold'>Lesson Focus and Goal</Form.Label>
            <Form.Control as="textarea" 
                   onChange={(e)=>setDevalue({...devalue, goal:e.target.value})} />
          </Form.Group>
              </Col>
            </Row>
            <Row>
               
            <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
            <Form.Label className='float-start fw-bold'>Material</Form.Label>
            <Form.Control as="textarea" 
                   onChange={(e)=>setDevalue({...devalue, material:e.target.value})} />
          </Form.Group>
              </Col>
               
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
            <Form.Label className='float-start fw-bold'>Learning Outcome</Form.Label>
            <Form.Control as="textarea" 
                   onChange={(e)=>setDevalue({...devalue, outcome:e.target.value})} />
          </Form.Group>
              </Col>
            </Row>
            <Row>
               
               <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
               <Form.Label className='float-start fw-bold'>Assigment</Form.Label>
               <Form.Control as="textarea" 
                      onChange={(e)=>setDevalue({...devalue, assigment:e.target.value})} />
             </Form.Group>
                 </Col>
                  
                 <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
               <Form.Label className='float-start fw-bold'>Reflection </Form.Label>
               <Form.Control as="textarea" 
                      onChange={(e)=>setDevalue({...devalue, reflection:e.target.value})} />
             </Form.Group>
                 </Col>
             </Row>
             <Row>
               
               <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
               <Form.Label className='float-start fw-bold'>Group Assigment</Form.Label>
               <Form.Control as="textarea" 
                      onChange={(e)=>setDevalue({...devalue, g_assigment:e.target.value})} />
             </Form.Group>
                 </Col>
                  
                 <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
               <Form.Label className='float-start fw-bold'>Group Presentation </Form.Label>
               <Form.Control as="textarea" 
                      onChange={(e)=>setDevalue({...devalue, presentation:e.target.value})} />
             </Form.Group>
                 </Col>
             </Row>
            <Col md="4" className=' mx-auto' >
              <div className='d-grid'>
              <Button variant='primary' size='sm' onClick={handleTodoUpdate}>Add Todo</Button>
              </div>
              </Col>
          </Form>

          }
      </Card.Body>
    </Card>
    </Col>
    </div>
  )
}

export default FormInput;