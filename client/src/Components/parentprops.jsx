import React from 'react'
import {Box, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';




const childcomponent = () => {
    
  return (
    <Box>
      <Box>
        <Typography variant="h3" color='red'>Log In</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',marginTop:'20px',alignItems:'center',justifyContent:'space-between',gap:'10px',}}> 
          <TextField id="outlined-basic" label="Email" variant="outlined" /> 
          <TextField id="outlined-basic" label="Password" variant="outlined" /> 
          <Button variant="outlined">Login</Button>
      </Box>
    </Box>
  )
}

export default childcomponent



//#f71614   -red color