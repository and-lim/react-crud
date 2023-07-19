import React, { useState } from "react";
import { Button, Container,Row,Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Add(){
    
    const [name, setName] = useState("");
    const [age, setAge ] = useState ("");
    
    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Employees.push({id : uniqueId, Name : a,  Age :b});
        history("/");
    }

    return(
           <Container className="my-5">
              <Row>
                <Form className="col-lg-6 shadow-sm p-3 rounded-2 border border-3 border-dark d-flex flex-column mx-auto">
                 <h3 className="text-center mb-5 text-decoration-underline">Fill Form</h3>
                 <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-start">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=> setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e)=> setAge(e.target.value)} />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} className="mx-auto" type="submit">Submit</Button>
                </Form>
            </Row>
          </Container>
    );
}

export default Add;