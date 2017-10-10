/**
 * Created by wangsir on 2017/7/19.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './m-header.css';
import Home from '../Home';
import About from '../About';
import Test from '../test';

class MHeader extends Component {
    render() {
        return (
            <div className="App">
                <div className="m-header">
                    <div className="icon"></div>
                    <h1 className="text">Music</h1>
                </div>
                <Router>
                    <div>
                        <ul className="ul">
                            <li><Link to="/" >推荐</Link></li>
                            <li><Link to="/about">关于我们</Link></li>
                        </ul>
                        <hr />
                        <Route exact path="/" component={Home}  />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
                <player></player>
                <Test userid={12312}></Test>
            </div>
        );
    }
}

export default MHeader;
