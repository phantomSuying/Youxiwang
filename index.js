class Root extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return (
            <div className="nav">
                <a href="https://www.baidu.com">
                    <img
                        className="ico1"
                        src="static/3dm_top_li.png"
                    />
                    <span>主站</span>
                </a>
                <a href="https://www.baidu.com">
                    <img
                        className="ico2"
                        src="static/3dm_top_li.png"
                    />
                    <span>商场</span>
                </a>
                <a href="https://www.baidu.com">
                    <img
                        className="ico3"
                        src="static/3dm_top_li.png"
                    />
                    <span>论坛</span>
                </a>
                <a href="https://www.baidu.com">
                    <img
                        className="ico4"
                        src="static/3dm_top_li.png"
                    />
                    <span>手机APP</span>
                </a>
                <div className="login">
                    <img src="static/ioc-ren.png"/>
                    <a href="https://www.baidu.com"><span>登录</span></a>
                    <span>|</span>
                    <a href="https://www.baidu.com"><span>注册</span></a>
                </div>
            </div>
        );
    }
}
class Search extends React.Component{
    render() {
        return (
            <div className="Search">
                <img src="static/logo.png" className="logo"/>
                <form>
                    <input type="text"/>
                    <button type="submit">搜索</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(<Root/>, document.getElementById("root"));