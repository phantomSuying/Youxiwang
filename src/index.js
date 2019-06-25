class Root extends React.Component {
    componentDidMount() {
        window.addEventListener("resize", (e) => {
            if (window.innerWidth < 1200) {
                document.body.style.width = "1200px";
            } else {
                document.body.style.width = "auto";
            }
        });
    }
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
class GameLine extends React.Component {
    render() {
        return (
            <div className="GameLine">
                <a href="https://www.baidu.com" className="GameLineHead">{this.props.name}</a>
                <ul>
                    {
                        this.props.gameList.map((item) => (
                            <li key={item.toString()}>
                                <a href="https://www.baidu.com">{item}</a>
                            </li>)
                        )
                    }
                </ul>
            </div>
        );
    }
}
class Ban extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusItem: 1,
            images: ["static/car.jpg", "static/cyber.jpg", "static/eldenRing.jpg", "static/mario.jpg", "static/noMaster.jpg"],
            texts: ["car", "cyber", "eldenRing", "mario", "noMaster"]
        }
    }
    tick() {
        this.setState((state) => ({
            focusItem: (state.focusItem) % 5 + 1
        }));
        document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem].style.border = "solid red 1px";
        document.getElementsByClassName("ban")[0].style.backgroundImage = "url(" + this.state.images[this.state.focusItem - 1] + ")";
        document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem == 1 ? 5 : this.state.focusItem - 1].style.border = "solid transparent 1px";
    }
    componentDidMount() {
        document.getElementsByClassName("ban")[0].childNodes[1].style.border = "solid red 1px";
        document.getElementsByClassName("ban")[0].style.backgroundImage = "url(static/car.jpg)";
        this.timerId = setInterval(
            () => this.tick(),
            3000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    handleMouseOver(id, e) {
        document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem].style.border = "solid transparent 1px";
        this.setState({
            focusItem: id
        });
        e.target.style.border = "solid red 1px";
        document.getElementsByClassName("ban")[0].style.backgroundImage = "url(" + this.state.images[id - 1] + ")";
    }
    handleMouseOut(id, e) {
        e.target.style.border = "solid transparent 1px";
        document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem].style.border = "solid red 1px";
        document.getElementsByClassName("ban")[0].style.backgroundImage = "url(" + this.state.images[this.state.focusItem - 1] + ")";
    }
    render() {
        return (
            <div className="twhi">
                <a href={"https://www.baidu.com/s?wd=" + this.state.focusItem}>
                    <div className="ban" >
                        <div className="transBack">
                            <p>{this.state.texts[this.state.focusItem - 1]}</p>
                        </div>
                        <img src="static\car.jpg" onMouseOver={(e) => this.handleMouseOver(1, e)} onMouseOut={(e) => this.handleMouseOut(1, e)} alt="car" />
                        <img src="static\cyber.jpg" onMouseOver={(e) => this.handleMouseOver(2, e)} onMouseOut={(e) => this.handleMouseOut(2, e)} alt="cyber" />
                        <img src="static\eldenRing.jpg" onMouseOver={(e) => this.handleMouseOver(3, e)} onMouseOut={(e) => this.handleMouseOut(3, e)} alt="eldenRing" />
                        <img src="static\mario.jpg" onMouseOver={(e) => this.handleMouseOver(4, e)} onMouseOut={(e) => this.handleMouseOut(4, e)} alt="mario" />
                        <img src="static\noMaster.jpg" onMouseOver={(e) => this.handleMouseOver(5, e)} onMouseOut={(e) => this.handleMouseOut(5, e)} alt="noMaster" />
                    </div>
                </a>
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
        const gameList4 = ["暴走萌姬", "三十六计", "绯雨骑士团", "三国杀", "武林三", "唐门六道", "荒野求生", "文字修真",
            "斗罗大陆", "妖怪宝可萌", "王的崛起", "我和我的影子"];
        const gameList5 = ["仙剑奇侠传七", "沉没之城", "骑马与砍杀2", "幽灵行动：断点", "赛博朋克2077", "轩辕剑7",
            "无主之地3", "暗黑血统：创世纪", "血污：夜之仪式", "丝绸之歌", "魔兽争霸3"];
        const gameList6 = ["怪猎", "圣女战旗", "堡垒之夜", "武魂2", "地下城与勇士", "腾讯电竞", "FIFA ONLINE 4",
            "完美世界手游", "只狼", "生化危机2重制版", "全面战争三国", "使命召唤16"];

        return (
            <div className="Content">
                <div className="center">
                    <div className="Main">
                        <div className="FastLink">
                            <GameLine name="热门单机" gameList={gameList} />
                            <GameLine name="手游大作" gameList={gameList2} />
                            <GameLine name="大型网游" gameList={gameList3} />
                            <GameLine name="推荐页游" gameList={gameList4} />
                            <GameLine name="即将上市" gameList={gameList5} />
                            <GameLine name="游戏活动" gameList={gameList6} />
                        </div>
                        <div className="top">
                            <a>正版促销</a>
                            <a>热门专区</a>
                            <a>游戏排行榜</a>
                            <a>补丁工具</a>
                            <a>游戏网汉化</a>
                            <a>标签合集</a>
                            <a>一周话题</a>
                            <a>汉化手游</a>
                            <a>手游周推</a>
                            <a>网友开测</a>
                        </div>
                        <div className="InnerContent">
                            <div className="InnerL">
                                <Ban />
                                <div>
                                    <Title name="游戏评测" />
                                    <div className="dota">
                                        <a href="https://www.baidu.com">
                                            《刀塔霸业》评测
                                        </a>
                                        <div>
                                            7.5分
                                        </div>
                                    </div>
                                    <Evaluation
                                        src="static\car.jpg"
                                        content="《尸灵》评测：一段旅行，一场救赎《尸灵》评测：一段旅行，一场救赎"
                                        grade="7.5"
                                    />
                                    <Evaluation
                                        src="static\car.jpg"
                                        content="《神力科莎：竞速》评测：实至名归的年度最真实赛车游戏《神力科莎：竞速》评测：实至名归的年度最真实赛车游戏"
                                        grade="7.5"
                                    />
                                    <Evaluation
                                        src="static\car.jpg"
                                        content="《彩京精选Vol.3》评测：时光飞逝，回忆常存《彩京精选Vol.3》评测：时光飞逝，回忆常存"
                                        grade="7.5"
                                    />
                                </div>
                                <div>
                                    <Title name="争议投票" />
                                    <div className="vote">
                                        <a href="https://www.baidu.com">
                                            <img src="static\car.jpg" />
                                            <div>
                                                你怎么看在游戏中打MOD的行为？你怎么看在游戏中打MOD的行为？
                                            </div>
                                        </a>
                                        <div className="brief">
                                            第三方MOD和游戏本体总有那么些说不清道不明的关系，而热门游戏又总会衍生出许多由第三方爱好者创造
                                        </div>
                                    </div>
                                    <VoteLi color="blue" number="18" all="187" content="我知道但我不用MOD，游戏不应该那么花里胡哨。" />
                                    <VoteLi color="red" number="159" all="187" content="我一直使用游戏MOD，这使我玩游戏的趣味性大大增加。" />
                                    <VoteLi color="green" number="10" all="187" content="我不知道也不关心游戏MOD，和我没关系。" />
                                </div>
                                <div>
                                    <Title name="硬件设备" />
                                    <div className="hard">
                                        <div className="titleimg">
                                            <a href="https://www.baidu.com" className="leftimg">
                                                <img src="static\car.jpg" />
                                                <div className="titlefont">
                                                    iGame G-ONE 3A大作全体验:高
                                            </div>
                                            </a>
                                            <a href="https://www.baidu.com" className="rightimg">
                                                <img src="static\car.jpg" />
                                                <div className="titlefont">
                                                    AORUS KD25F评测：240Hz主动
                                            </div>
                                            </a>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="https://www.baidu.com">
                                                    <div className="titlecon">iGame G-ONE 3A大作全体验:高集成度的游戏多面手</div>
                                                    <div className="titleti">06-25</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.baidu.com">
                                                    <div className="titlecon">神仙颜值 窒息速度 一张图读懂影驰HOF PRO M.2</div>
                                                    <div className="titleti">06-25</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.baidu.com">
                                                    <div className="titlecon">战锤系列首款暗黑破坏神风格的ABPG游戏？</div>
                                                    <div className="titleti">06-25</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="InnerM">

                            </div>
                            <div className="InnerR">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Title extends React.Component {
    render() {
        return (
            <div className="Title">
                {this.props.name}
                <a href="https://www.baidu.com">更多</a>
                <hr />
            </div>
        );
    }
}
class Evaluation extends React.Component {
    render() {
        return (
            <div className="Evaluation">
                <img src={this.props.src} />
                <div className="ed1">
                    {this.props.content}
                </div>
                <div className="ed2">
                    {this.props.grade}
                </div>
            </div>
        );
    }
}
class VoteLi extends React.Component {
    render() {
        return (
            <div className="VoteLi">
                <div className="sliver">
                    <div style={{
                        backgroundColor: this.props.color,
                        width: 100 * this.props.number / this.props.all + '%',
                        height: 10,
                    }}>
                    </div>
                </div>
                <div className="voteNum">
                    {this.props.number}
                </div>
                <button>投票</button>
                <p>{this.props.content}</p>

            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById("root"));