import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
// import PropTypes from 'prop-types'
class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
         
      };
    };
    componentDidMount(){
    }
    render(){
        return(
            <div>
                <Typography variant="display2">
                    Login Module
                </Typography>
            </div>
        )
    }
}

export default Login;