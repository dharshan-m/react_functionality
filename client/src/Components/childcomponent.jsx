import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const childcomponent = () => {
    
  return (
    <div sx={{display:'flex',flexDirection:'column',marginTop:'20px'}}> 
        <TextField id="outlined-basic" label="Email" variant="outlined" /> 
        <TextField id="outlined-basic" label="Password" variant="outlined" /> 
        <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default childcomponent