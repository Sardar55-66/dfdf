import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logo from '../../img/exclamation-circle.png';

import './Delete-article-modal.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
         <img style={{display: 'inline-block', marginRight: '10px'}} src={logo} alt='logo'/> <div style={{display: 'inline-block', width: '85%'}}>Are you sure yo want to delete this article?</div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button 
            className='yes-btn'
            onClick={() => {

                props.onClose()
             }}
            >Yes?</button>
            <button 
            className='no-btn'
            onClick={() => {

               props.onClose()
            }}
            >No?</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}