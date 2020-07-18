import React, { Component } from 'react'
import {Link,BrowserRouter as Router, withRouter} from 'react-router-dom'

 class routerPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    componentDidMount(){
        console.log(55555555555)
        console.log(this.props)
    }
    
    render() {
        return (
            <div>
            <div>

                跳转路由
            </div>
                <Router>

                <Link to="/man">跳转路由</Link>
                </Router>
            </div>
        )
    }
}

export default withRouter (routerPage)