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

var Content = function (_React$Component5) {
    _inherits(Content, _React$Component5);

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
                            React.createElement(
                                "div",
                                { className: "GameLine" },
                                React.createElement(
                                    "a",
                                    { href: "https://www.baidu.com", className: "GameLineHead" },
                                    "\u70ED\u95E8\u5355\u673A"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    gameList.map(function (item) {
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
                                ),
                                React.createElement(
                                    "a",
                                    { href: "https://www.baidu.com", className: "GameLineHead" },
                                    "\u624B\u6E38\u5927\u4F5C"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    gameList2.map(function (item) {
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
                                ),
                                React.createElement(
                                    "a",
                                    { href: "https://www.baidu.com", className: "GameLineHead" },
                                    "\u5927\u578B\u7F51\u6E38"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    gameList3.map(function (item) {
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
                                ),
                                React.createElement(
                                    "a",
                                    { href: "https://www.baidu.com", className: "GameLineHead" },
                                    "\u624B\u6E38\u5927\u4F5C"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    gameList2.map(function (item) {
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
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Content;
}(React.Component);

ReactDOM.render(React.createElement(Root, null), document.getElementById("root"));