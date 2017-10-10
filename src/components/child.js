
/**
 * Created by wangsir on 2017/10/9.
 */
import React from 'react';

class Child extends React.Component {
    constructor(){
        super();//调用基类的所有的初始化方法
        this.state={username: 'wang',age:20}
    }
    componentWillMount(){//页面将要加载的时候
        console.log('jiazhogle ')
    }
    componentDidMount(){//页面加载完成的时候
        console.log('wanchengle')
    }
    render() {
        setTimeout(()=>{
            this.setState({username:'nihao'});
        },4000)
        return (
            <div>
                <div>child</div>
                <p>子页面输入<input type='text' onChange={this.props.handlechang}/></p>
                <p>{this.props.id} {this.props.userid}</p>
            </div>
        );

    }
}

export default Child;