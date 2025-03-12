import {TextField,  Button} from '@mui/material'

function SignUp(){
    return(

        <div className="abc">
             <div className="login-box">
        <div>
              <TextField id="outlined-basic" label="Name" variant="outlined" /><br></br><br></br>
              <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br><br></br>
            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" /><br></br><br></br>
            <TextField id="outlined-basic" label="Phone" variant="outlined" /><br></br><br></br>
            <Button variant="contained">SignUp</Button>
        </div>
        </div>
        </div>
    )
}

export default SignUp