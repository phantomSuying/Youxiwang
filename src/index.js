class Root extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Navi />
                <Content />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="nav">
                <a href="https://www.baidu.com">
                    <img
                        className="ico1"
                        src="static/3dm_top_li.png"
                    />
                    主站
                </a>
                <a href="https://www.baidu.com">
                    <img
                        className="ico2"
                        src="static/3dm_top_li.png"
                    />
                    商场
                </a>
                <a href="https://www.baidu.com">
                    <img
                        className="ico3"
                        src="static/3dm_top_li.png"
                    />
                    论坛
                </a>
                <a href="https://www.baidu.com">
                    <img
                        className="ico4"
                        src="static/3dm_top_li.png"
                    />
                    手机APP
                </a>
                <div className="login">
                    <img src="static/ioc-ren.png" />
                    <a href="https://www.baidu.com">登录</a>
                    |
                    <a href="https://www.baidu.com">注册</a>
                </div>
            </div>
        );
    }
}

class Search extends React.Component {
    render() {
        return (
            <div className="Search">
                <div className="center">
                    <img src="static/logo.png" className="logo" />
                    <form>
                        <input type="text" />
                        <button type="submit">搜索</button>
                    </form>
                </div>
            </div>
        );
    }
}

class Navi extends React.Component {
    render() {
        return (
            <div className="Navi">
                <div className="center">
                    <ul>
                        <li><a href="https://www.baidu.com">新闻</a></li>
                        <li><a href="https://www.baidu.com">专栏</a></li>
                        <li><a href="https://www.baidu.com">娱乐</a></li>
                        <li><a href="https://www.baidu.com">硬件</a></li>
                        <li><a href="https://www.baidu.com">商城</a></li>
                        <li><a href="https://www.baidu.com">发售表</a></li>
                        <li><a href="https://www.baidu.com">下载</a></li>
                        <li><a href="https://www.baidu.com">专题</a></li>
                        <li><a href="https://www.baidu.com">论坛</a></li>
                        <li><a href="https://www.baidu.com">MOD站</a></li>
                    </ul>
                    <ol>
                        <li><a href="https://www.baidu.com">首页</a></li>
                        <li><a href="https://www.baidu.com">单机</a></li>
                        <li><a href="https://www.baidu.com">手游</a></li>
                        <li><a href="https://www.baidu.com">网游</a></li>
                        <li><a href="https://www.baidu.com">页游</a></li>
                        <li><a href="https://www.baidu.com">H5</a></li>
                    </ol>
                </div>

            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        const gameList = ["歧路旅人", "浮岛物语", "怪物猎人：世界", "刺客信条：奥德赛", "只狼：影逝二度",
            "雷霆一击", "狂怒2", "鬼泣5", "纪元1800", "瘟疫传说：无罪", "全面战争：三国"];
        const gameList2 = ["王者荣耀", "阴阳师", "一起来捉妖", "地下城与勇士", "FGO", "英雄爱三国", "和平精英",
            "龙族幻想", "云梦四时歌", "明日方舟", "崩坏3", "碧蓝航线", "恋与制作人"];
        const gameList3 = ["失落的方舟", "无畏", "武侠乂", "英雄联盟", "地下城与勇士", "堡垒之夜", "无限法则", "权御天下",
            "剑网3", "古剑奇谭OL", "魔兽世界", "逆战", "天涯明月刀", "绝地求生"];
        return (
            <div className="Content">
                <div className="center">
                    <div className="Main">
                        <div className="FastLink">
                            <div className="GameLine">
                                <a href="https://www.baidu.com" className="GameLineHead">热门单机</a>
                                <ul>
                                    {
                                        gameList.map((item) => (
                                            <li key={item.toString()}>
                                                <a href="https://www.baidu.com">{item}</a>
                                            </li>)
                                        )
                                    }
                                </ul>
                                <a href="https://www.baidu.com" className="GameLineHead">手游大作</a>
                                <ul>
                                    {
                                        gameList2.map((item) => (
                                            <li key={item.toString()}>
                                                <a href="https://www.baidu.com">{item}</a>
                                            </li>)
                                        )
                                    }
                                </ul>
                                <a href="https://www.baidu.com" className="GameLineHead">大型网游</a>
                                <ul>
                                    {
                                        gameList3.map((item) => (
                                            <li key={item.toString()}>
                                                <a href="https://www.baidu.com">{item}</a>
                                            </li>)
                                        )
                                    }
                                </ul>
                                <a href="https://www.baidu.com" className="GameLineHead">手游大作</a>
                                <ul>
                                    {
                                        gameList2.map((item) => (
                                            <li key={item.toString()}>
                                                <a href="https://www.baidu.com">{item}</a>
                                            </li>)
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById("root"));