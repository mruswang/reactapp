/**
 * Created by wangsir on 2017/7/18.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

class ToDoApp extends React.Component {
    // componentWillMount(){ alert('开始之前')}
    componentDidMount(){alert('开始le')}

    constructor(props){
        super(props);
        this.state = {
            title: 'home',
            title1:'about',
            message: 'Hello React.js!'
        };
    }
    render() {
        return (
            <Router>
                <div>
                    <ul className="ul">
                        <li><Link to="/" >{this.state.title}</Link></li>
                        <li><Link to="/about">{this.state.title1}</Link></li>
                    </ul>
                    <hr />
                    <span onClick={()=>this.reverseMessage()}>点击</span>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
    reverseMessage() {
        this.setState({
            message: this.state.message.split('').reverse().join('')
        });
        console.log(this.state.message)
    }
}

export default ToDoApp;