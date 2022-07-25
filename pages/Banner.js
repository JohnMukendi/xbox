import React from 'react'
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Banner=()=> {
  return(
  
    
    <div style={
        {
            backgroundImage:`url('PROTOBACILLUS (1).gif')`, 
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            margin:'0 auto',
            width:'100%',
            minHeight:'1500px',
         
        }
    }>
        
       <Box style={
        {
          display:'flex'
        }
       }>
        <Box style={
            {
                
                color:'white',
                width:'10%',
                margin:'20px 0 0 1%'
            }
        }>
         <Link href='/login'><img style={
          {
            height:'50px',
            width:'50px'
          }
        } src='Xbox-icon.png' alt=''/></Link>   
        
        </Box>
          <Box style={
              {
                  
                  color:'white',
                  width:'5%',
                  margin:'20px 0 0 68%',
                  textAlign:'center'
              }
          }>
              
         
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
</svg>
          </Box>
               <Box style={
            {
                
                color:'white',
                width:'5%',
                margin:'20px 0 0 -1.5%',
                textAlign:'center'
            }
        }>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-mute" viewBox="0 0 16 16">
  <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z"/>
  <path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/>
</svg>   
    
        </Box>
        <Box style={
            {
                
                color:'white',
                width:'5%',
                margin:'-5px 0 0 -3.5%'
            }
        }>
            
        <img style={
          {
            height:'30px',
            width:'30px',
            margin:'20px 0 0 50px'
            
          }
        } src='85299_battery_full_icon.png' alt=''/>
        </Box>
        <Box style={
            {
                
                color:'white',
                width:'10%',
                margin:'17px 0 0 0',
                textAlign:'center'
                
            }
        }>
            
        <Box>5:46 PM</Box>
        
        </Box>
        </Box>
        <Box style={{display:'flex'}} className="container">
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'250px',width:'20%',margin:'8.8% 0 0 4%'}}>
          <p className="card" style={{color:'white',borderRadius:'5px',margin:'85% 0 0 0',}}> Settings</p>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('assist.png')`,backgroundSize:'cover',height:'100px',width:'10%',margin:'19.9% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'57% 0 0 0'}}> Xbox Assist</p>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('fortnite.jpg')`,backgroundSize:'cover',height:'100px',width:'10%',margin:'19.9% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'57% 0 0 0'}}> Fortnite</p>
        </Box>

       
    
        <Link href="/Gamepass">
          <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('images.png')`,backgroundSize:'cover',height:'100px',width:'10%',margin:'19.9% 0 0 2%'}}>
              <p  className="card" style={{color:'white',borderRadius:'5px',margin:'57% 0 0 0'}}> Game Pass</p>
            </Box>
        </Link> 
 

        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('store.png')`,backgroundSize:'cover',height:'100px',width:'10%',margin:'19.9% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'57% 0 0 0'}}> Store</p>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('game.png')`,backgroundSize:'cover',height:'100px',width:'10%',margin:'19.9% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'57% 0 0 0'}}> Xbox Accessories</p>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('xboxxymbol.jpg')`,backgroundSize:'cover',height:'100px',width:'10%',margin:'19.9% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'57% 0 0 0'}}> Community</p>
        </Box>
        </Box>
        <Box  style={{display:'flex'}} class="container">
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('apps.jpg')`,backgroundSize:'cover',height:'170px',width:'20%',margin:'2% 0 0 4%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'55% 0 0 0'}}> My Games and Apps</p>
        </Box>
        <Box className="fortnite" sx={{borderRadius:'10px',backgroundImage:`url('fortnite1.jpg')`,backgroundSize:'cover',height:'170px',width:'22%',margin:'2% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'50% 0 0 0'}}> Fortnite</p>
        </Box>
        <Box className="fifa" sx={{borderRadius:'10px',backgroundImage:`url('gamepass.jpg')`,backgroundSize:'cover',height:'170px',width:'22%',margin:'2% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'50% 0 0 0',}}> Join Ultimate for 1$. get EA Play</p>
        
        </Box>
        <Box className="duty" sx={{borderRadius:'10px',backgroundImage:`url('duty.jpg')`,backgroundSize:'cover',height:'170px',width:'22%',margin:'2% 0 0 2%'}}>
        <p  className="card" style={{color:'white',borderRadius:'5px',margin:'50% 0 0 0',}}>Code of Wars </p> 
        </Box>
        </Box>

        {/* STORE SECTION */}

        {/* <p style={{margin:'5% 0 0 4%',color:'white'}}>Store</p>
    <Box style={{display:'flex',margin:'-50px 0 0 0'}} class="container">
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'450px',width:'60.5%',margin:'8.8% 0 0 4%'}}>
        </Box>
        <Box style={{display:'flex',flexDirection:'column'}}>
           <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'215px',width:'394px',margin:'29% 0 0 8%'}}>
        </Box>
       
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'215px',width:'394px',margin:'5% 0 0 8%'}}>
        </Box> 
        </Box>
        

    </Box>
    <Box style={{display:'flex'}} class="container">
       <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'50px',width:'29.4%',margin:'2% 0 0 4%'}}>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'50px',width:'29.4%',margin:'2% 0 0 2%'}}>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'50px',width:'29.4%',margin:'2% 0 0 2%'}}>
        </Box>
    </Box>
    <Box style={{display:'flex'}} class="container">
       <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'50px',width:'29.4%',margin:'2% 0 0 4%'}}>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'50px',width:'29.4%',margin:'2% 0 0 2%'}}>
        </Box>
        <Box className="block" sx={{borderRadius:'10px',backgroundImage:`url('settings.jpg')`,backgroundSize:'cover',height:'50px',width:'29.4%',margin:'2% 0 0 2%'}}>
        </Box>
    </Box> */}
    
           
    
    
    </div>
  )
}

export default Banner