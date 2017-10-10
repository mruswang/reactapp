/**
 * Created by wangsir on 2017/7/18.
 */
import React from 'react';

class Home extends React.Component {
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
        const username= '王老师';
        setTimeout(()=>{
            this.setState({username:'nihao'});
        },4000)
        return (
            <div>
                <div>这里是home</div>
                <span>{this.state.username}{this.state.age}{this.props.userid}</span>
                <p>{username===''?'用户请登录':'用户名：'+username}</p>
            </div>
        );

    }
}

export default Home;