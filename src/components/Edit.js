import React, { useState, useEffect } from "react";
import { Button, Container,Row,Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Edit(){
    const [name, setName] = useState("");
    const [age, setAge ] = useState ("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);


    const handleSubmit = (e) =>{
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        
        history("/");

    }
        useEffect(()=>{
            setName(localStorage.getItem('Name'))
            setAge(localStorage.getItem('Age'))
            setId(localStorage.getItem('Id'))
        })

    return(
        <Container className="my-5">
         <Row>
            <Form className="col-lg-6 shadow-sm p-3 rounded-2 border border-3 border-dark d-flex flex-column mx-auto">
                <h3 className="text-center mb-5 text-decoration-underline">Update Form</h3>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-start">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=> setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e)=> setAge(e.target.value)} />
                </Form.Group>
                    <Button onClick={(e) => handleSubmit(e)} type="submit" className="mx-auto">Update</Button>
             </Form>
         </Row>
      </Container>
    );
}

export default Edit;