import "../App.css"
import {TextField,  Button} from '@mui/material'



function AddMovie(){
    return(
       
        <div className="abc">
             <div className="login-box">
        <div> 
        
              <TextField id="outlined-basic" label="Name" variant="outlined" /><br></br><br></br>
              <TextField id="outlined-basic" label="Description" variant="outlined" /><br></br><br></br>
              <TextField id="outlined-basic" label="Rating" variant="outlined" /><br></br><br></br>
             <Button variant="contained">Login</Button>
        </div>
        </div>
        </div>
    )
}

export default AddMovie