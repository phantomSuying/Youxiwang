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

var Content = function (_React$Component6) {
    _inherits(Content, _React$Component6);

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
                            React.createElement("div", { className: "InnerL" }),
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

ReactDOM.render(React.createElement(Root, null), document.getElementById("root"));