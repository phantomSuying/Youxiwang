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
class Toutiao extends React.Component {
    render() {
        return (
            <div className="Toutiao">
                <a href="https://www.baidu.com">
                    <p>
                        {this.props.red1}
                    </p>
                </a>
                <div style={{ height: 20 }}>
                    <a href="https://www.baidu.com" className="blue1">
                        <div>
                            {this.props.blue1}
                        </div>
                    </a>
                    <a href="https://www.baidu.com" className="blue2">
                        <div>
                            {this.props.blue2}
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
class News extends React.Component {
    render() {
        return (
            <div className="News">
                <div className="newsleft">
                    <a href="https://www.baidu.com">
                        {this.props.children}
                    </a>
                </div>
                <div className="newsright">
                    {this.props.time}
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
        const gameList4 = ["暴走萌姬", "三十六计", "绯雨骑士团", "三国杀", "武林三", "唐门六道", "荒野求生", "文字修真",
            "斗罗大陆", "妖怪宝可萌", "王的崛起", "我和我的影子"];
        const gameList5 = ["仙剑奇侠传七", "沉没之城", "骑马与砍杀2", "幽灵行动：断点", "赛博朋克2077", "轩辕剑7",
            "无主之地3", "暗黑血统：创世纪", "血污：夜之仪式", "丝绸之歌", "魔兽争霸3"];
        const gameList6 = ["怪猎", "圣女战旗", "堡垒之夜", "武魂2", "地下城与勇士", "腾讯电竞", "FIFA ONLINE 4",
            "完美世界手游", "只狼", "生化危机2重制版", "全面战争三国", "使命召唤16"];
        const news = ["迅雷会员官网推出新活动 买328元玩客云送终身会员",
            "为让《使命召唤》上头条而宣传争议内容？ IW回应",
            "《宝可梦》公司5年收益上涨12倍 吸金能力令人瞠目",
            " 游戏界3巨头反对美国关税政策引关注 登微博热搜榜",
            "除了的Stadia，我们还能期待云端的《逆水寒》",
            " 人民网倡议玩家“分级” 18+禁止暴力血腥内容",
            "《控制》最新演示 讲解如何击败首要敌人“The Hiss”",
            " 换脸视频后AI又出偏门应用 用算法“脱掉”女性衣服",
            "凯蒂猫首部好莱坞大片编剧确定 上映日期未定",
            "《逆水寒》全新资料片今日上线 号召玩家混江湖",
            "套用《八方旅人》背景图？ 《一剑断念》被指抄袭",
            "《战地5》又出新彩蛋！玩家游戏中建造云端天梯",
            "在NS上感受大人的游戏 卡普空“大人的名作”宣传片",
            "优衣库将推出新海诚电影联动UT 8月中旬开卖！",
            " 押井守全新动画电影《VLADLOVE》公布 2020年上映",
            "如果这项技术让I社得到，那就完了",
            " 国内首部互动动画《石膏岛》——“凝固你的记忆”",
            "《魔兽世界》全新版本“艾萨拉的崛起”现已上线",
            "神崎堇变身女总裁！《新樱花大战》新角色详情公布",
            "小紫本特惠助力 《DOTA2》Ti9奖金突破2000万美元",
            "《全面战争：三国》最新长演示 展示血腥DLC细节",
            "经典复归 PC版《暴雨》前18分钟游戏画面展示",
            "小松鼠大冒险！《冰河世纪》改编3D平台冒险游戏公布",
            "《猛禽小队》哈莉奎茵新造型 穿粉红背心金色背带裤"
        ];
        const discussions = [
            "传奇巨星MJ去世10周年 世嘉放出超珍贵MJ玩MD照片",
            "人民网倡议玩家“分级” 18+禁止暴力血腥内容",
            "《暴雨》PC版正式发售 Epic商城独占疑似锁国区",
            "《原神》制作组致玩家的一封信 称向多方学习",
            "腾讯《无限法则》Steam正式版发售 登陆领限定皮肤",
            "腾讯首款国创暗黑手游上线 暗黑2设计师出任监制"
        ];
        const newGame = [
            "侍魂 晓",
            "我的朋友佩德罗",
            "赤痕：夜之仪式",
            "节奏海拉鲁",
            "歧路旅人"
        ]
        const chinese = [
            "《地狱猎人》",
            "《层层恐惧2》",
            "《食人女孩2+》",
            "《猪兔大战HD重制版》"
        ]
        const comming = [
            "超级马里奥制造2",
            " 火焰纹章：风花雪月",
            " 德军总部：新血液",
            " 控制",
            " 塞尔达传说：织梦岛",
        ]
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
                                <Toutiao
                                    red1="Steam2019年夏促来了 哪些游戏值得买"
                                    blue1="《魔法门之英雄无敌：王朝》评测"
                                    blue2="韩国法案打击游戏代练" />
                                <Toutiao
                                    red1="专访《拳皇》世界冠军"
                                    blue1="《暴雨》PC版正式发售"
                                    blue2="《速度与激情9》正式开拍"
                                />
                                <div style={{ borderBottom: 'dashed lightgray 1px' }} />
                                {news.map((item) => (<News key={item.toString()} time="11:00">{item}</News>))}
                                <Title name="热门回顾" />
                                {discussions.map(item => (<News key={item.toString()} time="88">{item}</News>))}
                            </div>
                            <div className="InnerR">
                                <div style={{ border: 'solid gray 1px', textAlign: 'center', height: 350 }}>
                                    <p>3DM媒体信息</p>
                                    <a href="https://www.baidu.com">
                                        <img src="static\car.jpg" style={{ width: 200, height: 40 }} />
                                    </a>
                                    <a href="https://www.baidu.com" >
                                        <img src="static\car.jpg" style={{ width: 200, height: 40 }} />
                                    </a>
                                    <div>
                                        <a style={
                                            {
                                                float: 'left'
                                            }
                                        }>
                                            <img src="static\car.jpg"
                                                style={
                                                    {
                                                        width: 74,
                                                        height: 60
                                                    }
                                                } />
                                            <p>新浪微博</p>
                                            <p>账号:3dmgame</p>
                                        </a>
                                        <a style={
                                            {
                                                float: 'right'
                                            }
                                        }>
                                            <img src="static\car.jpg"
                                                style={
                                                    {
                                                        width: 74,
                                                        height: 60
                                                    }
                                                } />
                                            <p>微信公众号</p>
                                            <p>账号:sdmgame</p>
                                        </a>
                                    </div>
                                </div>
                                <Title name="近期新作" />
                                {newGame.map(item => (<News key={item.toString()} time="简中">{item}</News>))}
                                <Title name="汉化发布" />
                                {chinese.map(item => (<News key={item.toString()} time="中文免安装版">{item}</News>))}
                                <Title name="即将发布" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById("root"));