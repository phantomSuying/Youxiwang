var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
    _inherits(Root, _React$Component);

    function Root() {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
    }

    _createClass(Root, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener("resize", function (e) {
                if (window.innerWidth < 1200) {
                    document.body.style.width = "1200px";
                } else {
                    document.body.style.width = "auto";
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Search, null),
                React.createElement(Navi, null),
                React.createElement(Content, null)
            );
        }
    }]);

    return Root;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "nav" },
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    React.createElement("img", {
                        className: "ico1",
                        src: "static/3dm_top_li.png"
                    }),
                    "\u4E3B\u7AD9"
                ),
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    React.createElement("img", {
                        className: "ico2",
                        src: "static/3dm_top_li.png"
                    }),
                    "\u5546\u573A"
                ),
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    React.createElement("img", {
                        className: "ico3",
                        src: "static/3dm_top_li.png"
                    }),
                    "\u8BBA\u575B"
                ),
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    React.createElement("img", {
                        className: "ico4",
                        src: "static/3dm_top_li.png"
                    }),
                    "\u624B\u673AAPP"
                ),
                React.createElement(
                    "div",
                    { className: "login" },
                    React.createElement("img", { src: "static/ioc-ren.png" }),
                    React.createElement(
                        "a",
                        { href: "https://www.baidu.com" },
                        "\u767B\u5F55"
                    ),
                    "|",
                    React.createElement(
                        "a",
                        { href: "https://www.baidu.com" },
                        "\u6CE8\u518C"
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Search = function (_React$Component3) {
    _inherits(Search, _React$Component3);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Search" },
                React.createElement(
                    "div",
                    { className: "center" },
                    React.createElement("img", { src: "static/logo.png", className: "logo" }),
                    React.createElement(
                        "form",
                        null,
                        React.createElement("input", { type: "text" }),
                        React.createElement(
                            "button",
                            { type: "submit" },
                            "\u641C\u7D22"
                        )
                    )
                )
            );
        }
    }]);

    return Search;
}(React.Component);

var Navi = function (_React$Component4) {
    _inherits(Navi, _React$Component4);

    function Navi() {
        _classCallCheck(this, Navi);

        return _possibleConstructorReturn(this, (Navi.__proto__ || Object.getPrototypeOf(Navi)).apply(this, arguments));
    }

    _createClass(Navi, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Navi" },
                React.createElement(
                    "div",
                    { className: "center" },
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u65B0\u95FB"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u4E13\u680F"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u5A31\u4E50"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u786C\u4EF6"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u5546\u57CE"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u53D1\u552E\u8868"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u4E0B\u8F7D"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u4E13\u9898"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u8BBA\u575B"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "MOD\u7AD9"
                            )
                        )
                    ),
                    React.createElement(
                        "ol",
                        null,
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u9996\u9875"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u5355\u673A"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u624B\u6E38"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u7F51\u6E38"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "\u9875\u6E38"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                "H5"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navi;
}(React.Component);

var GameLine = function (_React$Component5) {
    _inherits(GameLine, _React$Component5);

    function GameLine() {
        _classCallCheck(this, GameLine);

        return _possibleConstructorReturn(this, (GameLine.__proto__ || Object.getPrototypeOf(GameLine)).apply(this, arguments));
    }

    _createClass(GameLine, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "GameLine" },
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com", className: "GameLineHead" },
                    this.props.name
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.gameList.map(function (item) {
                        return React.createElement(
                            "li",
                            { key: item.toString() },
                            React.createElement(
                                "a",
                                { href: "https://www.baidu.com" },
                                item
                            )
                        );
                    })
                )
            );
        }
    }]);

    return GameLine;
}(React.Component);

var Ban = function (_React$Component6) {
    _inherits(Ban, _React$Component6);

    function Ban(props) {
        _classCallCheck(this, Ban);

        var _this6 = _possibleConstructorReturn(this, (Ban.__proto__ || Object.getPrototypeOf(Ban)).call(this, props));

        _this6.state = {
            focusItem: 1,
            images: ["static/car.jpg", "static/cyber.jpg", "static/eldenRing.jpg", "static/mario.jpg", "static/noMaster.jpg"],
            texts: ["car", "cyber", "eldenRing", "mario", "noMaster"]
        };
        return _this6;
    }

    _createClass(Ban, [{
        key: "tick",
        value: function tick() {
            this.setState(function (state) {
                return {
                    focusItem: state.focusItem % 5 + 1
                };
            });
            document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem].style.border = "solid red 1px";
            document.getElementsByClassName("ban")[0].style.backgroundImage = "url(" + this.state.images[this.state.focusItem - 1] + ")";
            document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem == 1 ? 5 : this.state.focusItem - 1].style.border = "solid transparent 1px";
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this7 = this;

            document.getElementsByClassName("ban")[0].childNodes[1].style.border = "solid red 1px";
            document.getElementsByClassName("ban")[0].style.backgroundImage = "url(static/car.jpg)";
            this.timerId = setInterval(function () {
                return _this7.tick();
            }, 3000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timerId);
        }
    }, {
        key: "handleMouseOver",
        value: function handleMouseOver(id, e) {
            document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem].style.border = "solid transparent 1px";
            this.setState({
                focusItem: id
            });
            e.target.style.border = "solid red 1px";
            document.getElementsByClassName("ban")[0].style.backgroundImage = "url(" + this.state.images[id - 1] + ")";
        }
    }, {
        key: "handleMouseOut",
        value: function handleMouseOut(id, e) {
            e.target.style.border = "solid transparent 1px";
            document.getElementsByClassName("ban")[0].childNodes[this.state.focusItem].style.border = "solid red 1px";
            document.getElementsByClassName("ban")[0].style.backgroundImage = "url(" + this.state.images[this.state.focusItem - 1] + ")";
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            return React.createElement(
                "div",
                { className: "twhi" },
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com/s?wd=" + this.state.focusItem },
                    React.createElement(
                        "div",
                        { className: "ban" },
                        React.createElement(
                            "div",
                            { className: "transBack" },
                            React.createElement(
                                "p",
                                null,
                                this.state.texts[this.state.focusItem - 1]
                            )
                        ),
                        React.createElement("img", { src: "static\\car.jpg", onMouseOver: function onMouseOver(e) {
                                return _this8.handleMouseOver(1, e);
                            }, onMouseOut: function onMouseOut(e) {
                                return _this8.handleMouseOut(1, e);
                            }, alt: "car" }),
                        React.createElement("img", { src: "static\\cyber.jpg", onMouseOver: function onMouseOver(e) {
                                return _this8.handleMouseOver(2, e);
                            }, onMouseOut: function onMouseOut(e) {
                                return _this8.handleMouseOut(2, e);
                            }, alt: "cyber" }),
                        React.createElement("img", { src: "static\\eldenRing.jpg", onMouseOver: function onMouseOver(e) {
                                return _this8.handleMouseOver(3, e);
                            }, onMouseOut: function onMouseOut(e) {
                                return _this8.handleMouseOut(3, e);
                            }, alt: "eldenRing" }),
                        React.createElement("img", { src: "static\\mario.jpg", onMouseOver: function onMouseOver(e) {
                                return _this8.handleMouseOver(4, e);
                            }, onMouseOut: function onMouseOut(e) {
                                return _this8.handleMouseOut(4, e);
                            }, alt: "mario" }),
                        React.createElement("img", { src: "static\\noMaster.jpg", onMouseOver: function onMouseOver(e) {
                                return _this8.handleMouseOver(5, e);
                            }, onMouseOut: function onMouseOut(e) {
                                return _this8.handleMouseOut(5, e);
                            }, alt: "noMaster" })
                    )
                )
            );
        }
    }]);

    return Ban;
}(React.Component);

var Content = function (_React$Component7) {
    _inherits(Content, _React$Component7);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            var gameList = ["歧路旅人", "浮岛物语", "怪物猎人：世界", "刺客信条：奥德赛", "只狼：影逝二度", "雷霆一击", "狂怒2", "鬼泣5", "纪元1800", "瘟疫传说：无罪", "全面战争：三国"];
            var gameList2 = ["王者荣耀", "阴阳师", "一起来捉妖", "地下城与勇士", "FGO", "英雄爱三国", "和平精英", "龙族幻想", "云梦四时歌", "明日方舟", "崩坏3", "碧蓝航线", "恋与制作人"];
            var gameList3 = ["失落的方舟", "无畏", "武侠乂", "英雄联盟", "地下城与勇士", "堡垒之夜", "无限法则", "权御天下", "剑网3", "古剑奇谭OL", "魔兽世界", "逆战", "天涯明月刀", "绝地求生"];
            var gameList4 = ["暴走萌姬", "三十六计", "绯雨骑士团", "三国杀", "武林三", "唐门六道", "荒野求生", "文字修真", "斗罗大陆", "妖怪宝可萌", "王的崛起", "我和我的影子"];
            var gameList5 = ["仙剑奇侠传七", "沉没之城", "骑马与砍杀2", "幽灵行动：断点", "赛博朋克2077", "轩辕剑7", "无主之地3", "暗黑血统：创世纪", "血污：夜之仪式", "丝绸之歌", "魔兽争霸3"];
            var gameList6 = ["怪猎", "圣女战旗", "堡垒之夜", "武魂2", "地下城与勇士", "腾讯电竞", "FIFA ONLINE 4", "完美世界手游", "只狼", "生化危机2重制版", "全面战争三国", "使命召唤16"];

            return React.createElement(
                "div",
                { className: "Content" },
                React.createElement(
                    "div",
                    { className: "center" },
                    React.createElement(
                        "div",
                        { className: "Main" },
                        React.createElement(
                            "div",
                            { className: "FastLink" },
                            React.createElement(GameLine, { name: "\u70ED\u95E8\u5355\u673A", gameList: gameList }),
                            React.createElement(GameLine, { name: "\u624B\u6E38\u5927\u4F5C", gameList: gameList2 }),
                            React.createElement(GameLine, { name: "\u5927\u578B\u7F51\u6E38", gameList: gameList3 }),
                            React.createElement(GameLine, { name: "\u63A8\u8350\u9875\u6E38", gameList: gameList4 }),
                            React.createElement(GameLine, { name: "\u5373\u5C06\u4E0A\u5E02", gameList: gameList5 }),
                            React.createElement(GameLine, { name: "\u6E38\u620F\u6D3B\u52A8", gameList: gameList6 })
                        ),
                        React.createElement(
                            "div",
                            { className: "top" },
                            React.createElement(
                                "a",
                                null,
                                "\u6B63\u7248\u4FC3\u9500"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u70ED\u95E8\u4E13\u533A"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u6E38\u620F\u6392\u884C\u699C"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u8865\u4E01\u5DE5\u5177"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u6E38\u620F\u7F51\u6C49\u5316"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u6807\u7B7E\u5408\u96C6"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u4E00\u5468\u8BDD\u9898"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u6C49\u5316\u624B\u6E38"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u624B\u6E38\u5468\u63A8"
                            ),
                            React.createElement(
                                "a",
                                null,
                                "\u7F51\u53CB\u5F00\u6D4B"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "InnerContent" },
                            React.createElement(
                                "div",
                                { className: "InnerL" },
                                React.createElement(Ban, null),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(Title, { name: "\u6E38\u620F\u8BC4\u6D4B" }),
                                    React.createElement(
                                        "div",
                                        { className: "dota" },
                                        React.createElement(
                                            "a",
                                            { href: "https://www.baidu.com" },
                                            "\u300A\u5200\u5854\u9738\u4E1A\u300B\u8BC4\u6D4B"
                                        ),
                                        React.createElement(
                                            "div",
                                            null,
                                            "7.5\u5206"
                                        )
                                    ),
                                    React.createElement(Evaluation, {
                                        src: "static\\car.jpg",
                                        content: "\u300A\u5C38\u7075\u300B\u8BC4\u6D4B\uFF1A\u4E00\u6BB5\u65C5\u884C\uFF0C\u4E00\u573A\u6551\u8D4E\u300A\u5C38\u7075\u300B\u8BC4\u6D4B\uFF1A\u4E00\u6BB5\u65C5\u884C\uFF0C\u4E00\u573A\u6551\u8D4E",
                                        grade: "7.5"
                                    }),
                                    React.createElement(Evaluation, {
                                        src: "static\\car.jpg",
                                        content: "\u300A\u795E\u529B\u79D1\u838E\uFF1A\u7ADE\u901F\u300B\u8BC4\u6D4B\uFF1A\u5B9E\u81F3\u540D\u5F52\u7684\u5E74\u5EA6\u6700\u771F\u5B9E\u8D5B\u8F66\u6E38\u620F\u300A\u795E\u529B\u79D1\u838E\uFF1A\u7ADE\u901F\u300B\u8BC4\u6D4B\uFF1A\u5B9E\u81F3\u540D\u5F52\u7684\u5E74\u5EA6\u6700\u771F\u5B9E\u8D5B\u8F66\u6E38\u620F",
                                        grade: "7.5"
                                    }),
                                    React.createElement(Evaluation, {
                                        src: "static\\car.jpg",
                                        content: "\u300A\u5F69\u4EAC\u7CBE\u9009Vol.3\u300B\u8BC4\u6D4B\uFF1A\u65F6\u5149\u98DE\u901D\uFF0C\u56DE\u5FC6\u5E38\u5B58\u300A\u5F69\u4EAC\u7CBE\u9009Vol.3\u300B\u8BC4\u6D4B\uFF1A\u65F6\u5149\u98DE\u901D\uFF0C\u56DE\u5FC6\u5E38\u5B58",
                                        grade: "7.5"
                                    })
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(Title, { name: "\u4E89\u8BAE\u6295\u7968" }),
                                    React.createElement(
                                        "div",
                                        { className: "vote" },
                                        React.createElement(
                                            "a",
                                            { href: "https://www.baidu.com" },
                                            React.createElement("img", { src: "static\\car.jpg" }),
                                            React.createElement(
                                                "div",
                                                null,
                                                "\u4F60\u600E\u4E48\u770B\u5728\u6E38\u620F\u4E2D\u6253MOD\u7684\u884C\u4E3A\uFF1F\u4F60\u600E\u4E48\u770B\u5728\u6E38\u620F\u4E2D\u6253MOD\u7684\u884C\u4E3A\uFF1F"
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "brief" },
                                            "\u7B2C\u4E09\u65B9MOD\u548C\u6E38\u620F\u672C\u4F53\u603B\u6709\u90A3\u4E48\u4E9B\u8BF4\u4E0D\u6E05\u9053\u4E0D\u660E\u7684\u5173\u7CFB\uFF0C\u800C\u70ED\u95E8\u6E38\u620F\u53C8\u603B\u4F1A\u884D\u751F\u51FA\u8BB8\u591A\u7531\u7B2C\u4E09\u65B9\u7231\u597D\u8005\u521B\u9020"
                                        )
                                    ),
                                    React.createElement(VoteLi, { color: "blue", number: "18", all: "187", content: "\u6211\u77E5\u9053\u4F46\u6211\u4E0D\u7528MOD\uFF0C\u6E38\u620F\u4E0D\u5E94\u8BE5\u90A3\u4E48\u82B1\u91CC\u80E1\u54E8\u3002" }),
                                    React.createElement(VoteLi, { color: "red", number: "159", all: "187", content: "\u6211\u4E00\u76F4\u4F7F\u7528\u6E38\u620FMOD\uFF0C\u8FD9\u4F7F\u6211\u73A9\u6E38\u620F\u7684\u8DA3\u5473\u6027\u5927\u5927\u589E\u52A0\u3002" }),
                                    React.createElement(VoteLi, { color: "green", number: "10", all: "187", content: "\u6211\u4E0D\u77E5\u9053\u4E5F\u4E0D\u5173\u5FC3\u6E38\u620FMOD\uFF0C\u548C\u6211\u6CA1\u5173\u7CFB\u3002" })
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(Title, { name: "\u786C\u4EF6\u8BBE\u5907" }),
                                    React.createElement(
                                        "div",
                                        { className: "hard" },
                                        React.createElement(
                                            "div",
                                            { className: "titleimg" },
                                            React.createElement(
                                                "a",
                                                { href: "https://www.baidu.com", className: "leftimg" },
                                                React.createElement("img", { src: "static\\car.jpg" }),
                                                React.createElement(
                                                    "div",
                                                    { className: "titlefont" },
                                                    "iGame G-ONE 3A\u5927\u4F5C\u5168\u4F53\u9A8C:\u9AD8"
                                                )
                                            ),
                                            React.createElement(
                                                "a",
                                                { href: "https://www.baidu.com", className: "rightimg" },
                                                React.createElement("img", { src: "static\\car.jpg" }),
                                                React.createElement(
                                                    "div",
                                                    { className: "titlefont" },
                                                    "AORUS KD25F\u8BC4\u6D4B\uFF1A240Hz\u4E3B\u52A8"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "https://www.baidu.com" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "titlecon" },
                                                        "iGame G-ONE 3A\u5927\u4F5C\u5168\u4F53\u9A8C:\u9AD8\u96C6\u6210\u5EA6\u7684\u6E38\u620F\u591A\u9762\u624B"
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "titleti" },
                                                        "06-25"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "https://www.baidu.com" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "titlecon" },
                                                        "\u795E\u4ED9\u989C\u503C \u7A92\u606F\u901F\u5EA6 \u4E00\u5F20\u56FE\u8BFB\u61C2\u5F71\u9A70HOF PRO M.2"
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "titleti" },
                                                        "06-25"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "https://www.baidu.com" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "titlecon" },
                                                        "\u6218\u9524\u7CFB\u5217\u9996\u6B3E\u6697\u9ED1\u7834\u574F\u795E\u98CE\u683C\u7684ABPG\u6E38\u620F\uFF1F"
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "titleti" },
                                                        "06-25"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement("div", { className: "InnerM" }),
                            React.createElement("div", { className: "InnerR" })
                        )
                    )
                )
            );
        }
    }]);

    return Content;
}(React.Component);

var Title = function (_React$Component8) {
    _inherits(Title, _React$Component8);

    function Title() {
        _classCallCheck(this, Title);

        return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
    }

    _createClass(Title, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Title" },
                this.props.name,
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    "\u66F4\u591A"
                ),
                React.createElement("hr", null)
            );
        }
    }]);

    return Title;
}(React.Component);

var Evaluation = function (_React$Component9) {
    _inherits(Evaluation, _React$Component9);

    function Evaluation() {
        _classCallCheck(this, Evaluation);

        return _possibleConstructorReturn(this, (Evaluation.__proto__ || Object.getPrototypeOf(Evaluation)).apply(this, arguments));
    }

    _createClass(Evaluation, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Evaluation" },
                React.createElement("img", { src: this.props.src }),
                React.createElement(
                    "div",
                    { className: "ed1" },
                    this.props.content
                ),
                React.createElement(
                    "div",
                    { className: "ed2" },
                    this.props.grade
                )
            );
        }
    }]);

    return Evaluation;
}(React.Component);

var VoteLi = function (_React$Component10) {
    _inherits(VoteLi, _React$Component10);

    function VoteLi() {
        _classCallCheck(this, VoteLi);

        return _possibleConstructorReturn(this, (VoteLi.__proto__ || Object.getPrototypeOf(VoteLi)).apply(this, arguments));
    }

    _createClass(VoteLi, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "VoteLi" },
                React.createElement(
                    "div",
                    { className: "sliver" },
                    React.createElement("div", { style: {
                            backgroundColor: this.props.color,
                            width: 100 * this.props.number / this.props.all + '%',
                            height: 10
                        } })
                ),
                React.createElement(
                    "div",
                    { className: "voteNum" },
                    this.props.number
                ),
                React.createElement(
                    "button",
                    null,
                    "\u6295\u7968"
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.content
                )
            );
        }
    }]);

    return VoteLi;
}(React.Component);

ReactDOM.render(React.createElement(Root, null), document.getElementById("root"));