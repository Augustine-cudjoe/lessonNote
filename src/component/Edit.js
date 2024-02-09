
import React, { useState } from 'react';
import {Form, Row,Col, Button, Card} from "react-bootstrap"

function Edit({details , editTodo}) {
 
  const [devalue, setDevalue]=useState(details)
 


 

  function handleUpdate(e){
    e.preventDefault()
    editTodo(devalue, devalue.id)
    setDevalue( " ")
  }

  return (
    <div>
    <Col md="8"  className='mx-auto mt-3 mb-3'>
    <Card>
      <Card.Header className='fw-bold bg-primary text-white'>
       Daily Lesson Plan
        
      </Card.Header>
      <Card.Body  className='bg-dark text-white'>
      <Form className='justify-content-center mx-3 border-primary'>
            <Row md="8" className='mt-5'>
              <Col as={Col} >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start '>Grade</Form.Label>
            <Form.Control type="text"   name="grade"
                 onChange={(e)=>setDevalue({...devalue, grade:e.target.value})} />
          </Form.Group>
              </Col>
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start'>Subject</Form.Label>
            <Form.Control type="text"  name="subject"
             onChange={(e)=>setDevalue({...devalue, subject:e.target.value})} />
          </Form.Group>
              </Col>
              
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start'>Date</Form.Label>
            <Form.Control type="date"  name="date"
                   onChange={(e)=>setDevalue({...devalue, date:e.target.value})} />
          </Form.Group>
              </Col>
             
    
            </Row>
            <Row>
                
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start'>  Topic</Form.Label>
            <Form.Control as="textarea" value={devalue.topic} name="topic"
                   onChange={(e)=>setDevalue({...devalue, topic:e.target.value})} />
          </Form.Group>
              </Col>
               
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start'>Lesson</Form.Label>
            <Form.Control as="textarea"  name=" lesson"
                   onChange={(e)=>setDevalue({...devalue, lesson:e.target.value})} />
          </Form.Group>
              </Col>
            </Row>
            <Row>
               
            <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start'>Lesson Focus and Goal</Form.Label>
            <Form.Control as="textarea"  name="goal"
                   onChange={(e)=>setDevalue({...devalue, goal:e.target.value})} />
          </Form.Group>
              </Col>
            </Row>
            <Row>
               
            <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start'>Material</Form.Label>
            <Form.Control as="textarea"  name="material"
                   onChange={(e)=>setDevalue({...devalue, material:e.target.value})} />
          </Form.Group>
              </Col>
               
              <Col as={Col} > 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='float-start'>Learning Outcome</Form.Label>
            <Form.Control as="textarea"  name="outcome"
                   onChange={(e)=>setDevalue({...devalue,outcome:e.target.value})} />
          </Form.Group>
              </Col>
            </Row>
            <Row>
               
               <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label className='float-start'>Assigment</Form.Label>
               <Form.Control as="textarea" name="assigment"
                       onChange={(e)=>setDevalue({...devalue, assigment:e.target.value})} />
                     
             </Form.Group>
                 </Col>
                  
                 <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label className='float-start'>Reflection </Form.Label>
               <Form.Control as="textarea"  name="reflection"
                      onChange={(e)=>setDevalue({...devalue, reflection:e.target.value})} />
             </Form.Group>
                 </Col>
             </Row>
             <Row>
               <Form.Label className='float-start'>Group Assigment</Form.Label>
               
               <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Control as="textarea"  name="g_assigment"
                     onChange={(e)=>setDevalue({...devalue, g_assigment:e.target.value})}/>
             </Form.Group>
                 </Col>
                  
                 <Col as={Col} > 
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label className='float-start'>Group Presentation </Form.Label>
               <Form.Control as="textarea"  name="presentation"
                      onChange={(e)=>setDevalue({...devalue, presentation:e.target.value})}/>
             </Form.Group>
                 </Col>
             </Row>
            <Col md="4" className=' mx-auto' >
              <div className='d-grid'>
              <Button variant='primary' size='sm' onClick={handleUpdate}>Update</Button>
              </div>
              </Col>
          </Form>

      </Card.Body>
    </Card>
    </Col>
    </div>
  )
}

export default Edit;