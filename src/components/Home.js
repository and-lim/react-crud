import React, {Fragment} from 'react';
import { Button, Row, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import Container from 'react-bootstrap/Container';
import {Link, useNavigate } from 'react-router-dom';


function Home() {

    let history = useNavigate();

    const handleEdit = (id, name, age) =>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }

    const handleDelete =(id) =>{
        
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);
        history('/');
    }

  return (

    <Container className='my-5'>
        <h1 className="text-center mb-3">CRUD Table</h1>

    <div className="text-start my-3">
        <Link className='text-center' to="/create">
            <Button size='lg' className='btn btn-success'>Create</Button>
        </Link>
    </div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Age</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {
            Employees && Employees.length> 0 
            ?
            Employees.map((item)=>{
                return(
                    <tr>
                        <td>
                            {item.Name}
                        </td>
                        <td>
                            {item.Age}
                        </td>
                        <td>
                            <Link to={'/edit'}>
                            <Button className='btn btn-warning' onClick={()=> handleEdit(item.id,item.Name,item.Age)}>Edit</Button> 
                            </Link>
                            &nbsp;
                            <Button className='btn btn-danger' onClick={()=> handleDelete(item.id)}>Delete</Button>
                        </td>
                    </tr>
                )
            })
            :
            "No data available"
        }
      </tbody>
    </Table>


    </Container>
  );
}

export default Home;