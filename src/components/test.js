/**
 * Created by wangsir on 2017/10/9.
 */
import React from 'react';
import Child from './child'
//import ReactMixin from 'react-mixin'
import log from './minx'
const defaultname={
    username:'默认值为空'
}
class Test extends React.Component {
    constructor(){
        super();//调用基类的所有的初始化方法
        this.state={username: 'wang',age:20}
    }
    componentWillMount(){//页面将要加载的时候
        console.log('jiazhogle ');
       // Mixlong.log();
        log();
    }
    componentDidMount(){//页面加载完成的时候
        console.log('wanchengle')
    }
    handlechang(e){
        this.setState({age :e.target.value})
    }
    render() {
        setTimeout(()=>{
            this.setState({username:'nihao'});
        },4000)
        return (
            <div>
                <div>test</div>
                <span>{this.state.username} {this.state.age} {this.props.userid} {this.props.username}</span>
                <Child {...this.props} id={5} handlechang={this.handlechang.bind(this)}></Child>
            </div>
        );

    }
}
Test.propTypes= {
    userid: React.PropTypes.number
}
Test.defaultProps= defaultname;
//ReactMixin(Test.prototype,Mixlong)
export default Test;