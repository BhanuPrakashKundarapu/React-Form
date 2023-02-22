import React from 'react'
import './Style.css'
class Form extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='frm'>
                <form>
                    <label>User Name</label> <input type='text' /> <br/>
                    <label>Email</label> <input type='email'/> <br/>
                    <label>Phon No:-</label> <input type='tel'/> <br/>
                    <label>Password</label> <input type='password'/> <br/>
                    <label>Confirm Password:-</label> <input type='password'/> <br/>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
}
 
export default Form;