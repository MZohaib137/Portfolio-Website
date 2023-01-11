import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
const Card = (props) => {
   
  return (
    <>

      <div className="Card">
        <div className="imagecr">
              <img className='imag' src={props.src} alt="kjb" />
        </div>
        <div className="title">
           {props.tit}
        </div>
        <div className="discription">
            {props.disc}
        </div>
        <div className='bt'>
        <div className='btn'>
        <Button  variant="outlined" size="medium">
          Learn More
        </Button></div>
        <div className='btn'><Button  variant="contained" endIcon={<SendIcon />}>
          Share
         </Button></div></div>
        </div>
    
    </>
  )
}

export default Card
