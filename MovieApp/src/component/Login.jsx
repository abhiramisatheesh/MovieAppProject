import "../App.css"
import {TextField,  Button} from '@mui/material'

function Login(){
    return(
       
        <div className="abc">
             <div className="login-box">
        <div> 
        
              <TextField id="outlined-basic" label="UserName" variant="outlined" /><br></br><br></br>
            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" /><br></br><br></br>
            <Button variant="contained">Login</Button>
        </div>
        </div>
        </div>
    )
}

export default Login