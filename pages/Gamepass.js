import React from 'react'
import Box from '@mui/material/Box';
import Link from 'next/link';

const Gamepass = () => {
  return (
    <div id="gamepass" style={
        {
            backgroundImage:`url('PROTOBACILLUS (1).gif')`, 
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            margin:'0 auto',
            width:'100%',
            minHeight:'1300px',
            color:'white'
         
        }
    } ><br/>
       <br/>
      <Link  href="/Banner">
      <p className='links' style={{margin:'auto 0 0 4%'}}>Gamepass</p>
      </Link>
    <Box style={{display:'flex'}} className="container">
    <Link  href="/Banner">
    <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('images.png')`,backgroundSize:'cover',height:'100px',width:'10%',margin:'22% 0 0 3.9%'}}>
        </Box></Link>
        <Box className="blockg" sx={{borderRadius:'10px',backgroundImage:`url('speed.jpg')`,backgroundSize:'cover',height:' 450px',width:'700px',margin:'8.8% 0 0 5%'}}>
         
        </Box>
        <Box   style={{display:'flex',flexDirection:'column'}}>
           <Box className="blockgta"  sx={{borderRadius:'10px',backgroundImage:`url('gta.png')`,backgroundSize:'cover',height:'215px',width:'294px',margin:'40% 0 0 8%'}}>
           <p style={{color:'white',borderRadius:'5px',margin:'65% 0 0 0',}}></p>GTA
        </Box>
       
        <Box  className="blockresident" sx={{borderRadius:'10px',backgroundImage:`url('resident.webp')`,backgroundSize:'cover',height:'215px',width:'294px',margin:'5% 0 0 8%'}}>
        <p style={{color:'white',borderRadius:'5px',margin:'65% 0 0 0',}}>Resident Evil</p>
        </Box> 
        </Box>
        

    </Box>
    <Box style={{display:'flex'}} className="container">
       <Box className="block" sx={{border:'white 1px solid',borderRadius:'10px',backgroundSize:'cover',height:'100px',width:'28.5%',margin:'2% 0 0 19%'}}>
        <p style={{textAlign:'center',margin:'35px 0 0 0'}}><strong>Recently Added</strong></p></Box>
        <Box  className="blockspeed" sx={{borderRadius:'10px',backgroundImage:`url('gamepass.jpg')`,backgroundSize:'cover',height:'215px',width:'294px',margin:'2% 0 0 1.9%'}}>
         <p style={{color:'white',borderRadius:'5px',margin:'65% 0 0 0',}}>Fifa 22</p>
        </Box>
        <Box  className="blockdbz" sx={{borderRadius:'10px',backgroundImage:`url('dbz.jpg')`,backgroundSize:'cover',height:'215px',width:'294px',margin:'2% 0 0 1.8%'}}>
        <p style={{color:'white',borderRadius:'5px',margin:'65% 0 0 0',}}>Dragon Ball Z</p>
        </Box>
    </Box>
    <Box style={{display:'flex'}} className="container">
       <Box className="block" sx={{border:'white 1px solid',borderRadius:'10px',backgroundSize:'cover',height:'100px',width:'28.5%',margin:'-100px 0 0 19%'}}>
       <p style={{textAlign:'center',margin:'35px 0 0 0',color:'white'}}><strong>All Console Games</strong></p>
        </Box>
       
    </Box>
        
    
    
    </div>
  )
}

export default Gamepass