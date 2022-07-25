import React from 'react'
import Link from 'next/link';
import Box from '@mui/material/Box';
 const login = () => {
  return (
    <div style={
        {
            backgroundImage:`url('u.jpg')`, 
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            margin:'0 auto',
            width:'100%',
            minHeight:'695px',
            color:'white'
         
        }
    }><Link href="/Banner">
        <img style={{margin:'15% 0 0 40%'}} src='button.png'  alt='button' />
     </Link>
     <p style={{color:'white',fontStyle:"italic",margin:'-10% 0 0 35%'}}>P L A Y</p>
     <p style={{color:'white',fontStyle:"italic",margin:'10% 0 0 5%'}}>R E S U M E</p>
    <Box  className="blockresident" sx={{borderRadius:'10px',backgroundImage:`url('resident.webp')`,backgroundSize:'cover',height:'215px',width:'294px',margin:'-24% 0 0 8%'}}>
         <Link href='/Gamepass'><p style={{color:'white',borderRadius:'5px',margin:'75% 0 0 0',}}>Resident Evil</p></Link>
        </Box> 
    </div>
  )
}

export default login