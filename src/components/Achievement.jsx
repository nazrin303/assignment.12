import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

function Achievement() {
  return (
    <div className='container'>
        <h1 className='text-center my-3'>Achievements</h1>
        <div className='row'>

<div className='col-md-4'>

<Card className='p-4 ' >

      
      <Card.Body className='text-center'>
        
        <Card.Title className='text-center text-warning'><FaTrophy className='achivementicons'/></Card.Title>
        <Card.Title>5 Ballon d'Or</Card.Title>
        <Card.Text>
        Awarded for his outstanding football career.
        </Card.Text>
       
      </Card.Body> 
    </Card>
    
    </div>
       
       
    <div className='col-md-4'>

<Card className='p-4'>
      
      <Card.Body className='text-center'>
      <Card.Title className='text-primary text-center'><FaStar className='achivementicons' /></Card.Title>
        <Card.Title>UEFA Champions League</Card.Title>
        <Card.Text>
        Won 5 UEFA Champions League titles.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-4'>

<Card  className='p-4'>
      
      <Card.Body className='text-center '>
        <Card.Title className='text-center text-success'><FaCrown className='achivementicons'/></Card.Title>
        <Card.Title>European Champion</Card.Title>
        <Card.Text>
        Led Portugal to victory in Euro 2016.
        </Card.Text>
        
      </Card.Body>
    </Card>

    
    </div>
   
       

    </div>

    </div>
        
        
  )
}

export default Achievement