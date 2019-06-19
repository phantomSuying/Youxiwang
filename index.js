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
                React.createElement(Search, null)
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
                    React.createElement(
                        "span",
                        null,
                        "\u4E3B\u7AD9"
                    )
                ),
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    React.createElement("img", {
                        className: "ico2",
                        src: "static/3dm_top_li.png"
                    }),
                    React.createElement(
                        "span",
                        null,
                        "\u5546\u573A"
                    )
                ),
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    React.createElement("img", {
                        className: "ico3",
                        src: "static/3dm_top_li.png"
                    }),
                    React.createElement(
                        "span",
                        null,
                        "\u8BBA\u575B"
                    )
                ),
                React.createElement(
                    "a",
                    { href: "https://www.baidu.com" },
                    React.createElement("img", {
                        className: "ico4",
                        src: "static/3dm_top_li.png"
                    }),
                    React.createElement(
                        "span",
                        null,
                        "\u624B\u673AAPP"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "login" },
                    React.createElement("img", { src: "static/ioc-ren.png" }),
                    React.createElement(
                        "a",
                        { href: "https://www.baidu.com" },
                        React.createElement(
                            "span",
                            null,
                            "\u767B\u5F55"
                        )
                    ),
                    React.createElement(
                        "span",
                        null,
                        "|"
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.baidu.com" },
                        React.createElement(
                            "span",
                            null,
                            "\u6CE8\u518C"
                        )
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
            );
        }
    }]);

    return Search;
}(React.Component);

ReactDOM.render(React.createElement(Root, null), document.getElementById("root"));