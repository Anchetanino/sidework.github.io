import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import star from '../images/TechLogo/Star.svg';
import profile from '../images/profilePic/Profile1.svg';
import '../styles/Profile.css'


function Confirmation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Hire.</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className='box2'>
          <p id="child-modal-description">
           Would you like to hire, Ravikant P.?
          </p>
          <Button onClick={handleClose}>Close</Button>
          <Hire/>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Hire(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Hire.</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className='box3'>
          <p id="child-modal-description">
           Thank you for hiring, Ravikant P. 
          </p>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{backgroundColor:'#2B7A78', color:'white', border:'none', borderRadius:'25px', }}>See more... </Button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='box'>
          <div className='head' >
            <div>
            <img src={profile} alt=""/>
          </div>
          <div>  <h2 id="parent-modal-title">Ravikant P.</h2>
         
              <p>Junior Engineer</p> 
             <p>Indore, India</p>  <p> <img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/> 4.0</p>
              
              <p>$15 USD / hour</p>
              <p>JAVA / C++ / VISUAL BASIC / PYTHON </p></div>
          </div>
          
        <div className='description'> 
           <p>Hey.....I'm Ravikant Pandey. We can make anything you want, if you can describe exactly what you want, will get the exact service until full satisfaction.</p>
              <p>My interest lies in designing new material & do believe we are creative & can handle complications, I am always eager to learn new things & by listening carefully & asking the right questions can get to the core of the conversation quickly.</p>
              <p>We are a Team of 11+ experienced professionals who work closely with the clients, understand their requirements, offer suggestions, and implement ideas into reality. We always think beyond the boundaries and provide user-friendly as well as high-quality IT services to our customers at a very reasonable price. Our team is always dedicative to innovating from high-end E-Commerce website development to the simplest logo design needs.</p>
     
        </div>
                  <Button onClick={handleClose}>Close</Button>
                  
          <Confirmation />
        </Box>
      </Modal>
    </div>
  );
}
