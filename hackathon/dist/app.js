'use strict';

var headmap = {
    map: null,
    lines: []
};

var Paper = React.createClass({
    displayName: 'Paper',


    propTypes: {
        children: React.PropTypes.node,
        circle: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        //style: React.PropTypes.object,
        transitionEnabled: React.PropTypes.bool
    },

    getDefaultProps: function getDefaultProps() {
        return {
            circle: false,
            rounded: true,
            transitionEnabled: false
        };
    },

    render: function render() {
        var _props = this.props;
        var children = _props.children;
        var circle = _props.circle;
        var rounded = _props.rounded;
        var transitionEnabled = _props.transitionEnabled;
        var style = _props.style;


        return React.createElement(
            'div',
            { style: style },
            children
        );
    }
});

var FixMap = React.createClass({
    displayName: 'FixMap',


    scrollCallback: debounce(function (e) {
        if (document.body.scrollTop > 10) {
            this.refs['user'].style.display = "none";
        } else {
            this.refs['user'].style.display = "block";
        }
    }, 30),

    componentDidMount: function componentDidMount() {
        Events.on(window, "scroll", this.scrollCallback);
        headmap.map = new yuantu.Map({ container: 'amap' });
        headmap.map.active();
    },

    componentWillUnmount: function componentWillUnmount() {
        Events.off(window, "scroll", this.scrollCallback);
    },

    render: function render() {

        return React.createElement(
            'div',
            { style: { "height": "320px" } },
            React.createElement(
                'div',
                { className: 'cm-header opacity' },
                React.createElement(
                    'span',
                    { className: 'cm-header-icon fl' },
                    React.createElement('i', { className: 'icon-back' })
                ),
                React.createElement('span', { className: 'cm-header-icon icon_share i_bef' })
            ),
            React.createElement(
                'div',
                { className: 'map-box' },
                React.createElement('div', { className: 'map', id: 'amap' }),
                React.createElement(
                    'div',
                    { className: 'user_me', ref: 'user' },
                    React.createElement(
                        'span',
                        { className: 'avatar' },
                        React.createElement('img', { src: 'img/avatar_b_01.png', alt: '' })
                    ),
                    React.createElement(
                        'big',
                        null,
                        'patata'
                    )
                )
            )
        );
    }
});

var UserBox = React.createClass({
    displayName: 'UserBox',


    _handleAdd: function _handleAdd() {
        this.props.modal().open("添加好友", this.renderUseList());
    },

    _handleSelect: function _handleSelect(e) {
        var id = null;
        if (id = e.target.title) {
            CFG.users[id].isActive = !CFG.users[id].isActive;
            this.forceUpdate();
            this.props.modal().close();
        }
    },

    renderItems: function renderItems(data) {
        var items = [];

        data.forEach(function (o, i) {
            // if(!o.isActive){
            var _class = o.isActive ? "curr" : "";

            items.push(React.createElement(
                'dl',
                { key: i },
                React.createElement(
                    'dt',
                    null,
                    o.letter
                ),
                React.createElement(
                    'dd',
                    { title: i, className: _class },
                    React.createElement(
                        'span',
                        { title: i, className: 'avatar' },
                        React.createElement('img', { title: i, src: o.head, alt: '' })
                    ),
                    React.createElement(
                        'big',
                        { title: i },
                        o.name
                    )
                )
            ));
        });
        return items;
    },

    renderUseList: function renderUseList() {
        var data = CFG.users;
        return React.createElement(
            'div',
            { className: 'main-viewport' },
            React.createElement(
                'div',
                { className: 'user-list', onClick: this._handleSelect },
                this.renderItems(data)
            )
        );
    },

    render: function render() {
        var data = CFG.users;

        var activeUsers = [];
        data.forEach(function (o, i) {
            if (o.isActive) {
                activeUsers.push(React.createElement(
                    'p',
                    { key: 'avatar_' + i },
                    React.createElement(
                        'span',
                        { className: 'avatar' },
                        React.createElement('img', { src: o.head, alt: o.name })
                    )
                ));
            }
        });

        return React.createElement(
            'div',
            { className: 'user-box' },
            React.createElement(
                'div',
                { className: 'users' },
                activeUsers,
                React.createElement('p', { className: 'avatar addmore', onClick: this._handleAdd })
            )
        );
    }
});

var Vinfo = React.createClass({
    displayName: 'Vinfo',

    getInitialState: function getInitialState() {
        return {
            title: "",
            startDate: null,
            endDate: null,
            price: 0,
            startCity: null,
            endCity: null
        };
    },
    render: function render() {
        var data = this.state;
        var formatDate = function formatDate(d) {
            return d ? d.getMonth() + 1 + '.' + d.getDate() : '?';
        };
        return React.createElement(
            'div',
            { className: 'v-info' },
            React.createElement(
                'h2',
                null,
                '5日4晚 泰国游'
            ),
            React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'small',
                        null,
                        '起点'
                    ),
                    React.createElement(
                        'big',
                        null,
                        data.startCity ? data.startCity : '?'
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'small',
                        null,
                        '终点'
                    ),
                    React.createElement(
                        'big',
                        null,
                        data.endCity ? data.endCity : '?'
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'small',
                        null,
                        '时间'
                    ),
                    React.createElement(
                        'big',
                        null,
                        formatDate(data.startDate),
                        ' - ',
                        formatDate(data.end)
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'small',
                        null,
                        '经费'
                    ),
                    React.createElement(
                        'big',
                        null,
                        '￥',
                        data.price
                    )
                )
            )
        );
    }
});

var TimeAct = React.createClass({
    displayName: 'TimeAct',


    renderTimeBar: function renderTimeBar() {
        return React.createElement(
            'div',
            { className: 'time-bar' },
            React.createElement('span', { className: 'time-tag clock' }),
            React.createElement(
                'p',
                null,
                '下午20：16，3月31日'
            )
        );
    },

    flight: function flight(data) {
        return React.createElement(
            'div',
            { className: 'time-act' },
            this.renderTimeBar(),
            React.createElement(
                'div',
                { className: 'flight-box' },
                React.createElement(
                    'h3',
                    null,
                    data.company + data.flight
                ),
                React.createElement(
                    'div',
                    { className: 'flight-from' },
                    React.createElement(
                        'big',
                        null,
                        '上海'
                    ),
                    React.createElement(
                        'small',
                        null,
                        data.departAirport
                    ),
                    React.createElement(
                        'strong',
                        null,
                        data.departTime
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'flight-to' },
                    React.createElement(
                        'big',
                        null,
                        '成都'
                    ),
                    React.createElement(
                        'small',
                        null,
                        data.arriveAirport
                    ),
                    React.createElement(
                        'strong',
                        null,
                        data.arriveTime
                    )
                ),
                React.createElement('abbr', null)
            )
        );
    },

    hotel: function hotel(data) {
        return React.createElement(
            'div',
            { className: 'time-act' },
            this.renderTimeBar(),
            React.createElement(
                'div',
                { className: 'hotel-box' },
                React.createElement(
                    'div',
                    { className: 'checkinfo' },
                    React.createElement(
                        'b',
                        null,
                        '入住日期'
                    ),
                    ' 04月21日 周四 / ',
                    React.createElement(
                        'b',
                        null,
                        '退房日期'
                    ),
                    ' 04月24日 周日'
                ),
                React.createElement(
                    'div',
                    { className: 'maskshow' },
                    React.createElement(
                        'div',
                        { title: '0', className: 'hotels' },
                        React.createElement(
                            'i',
                            { className: 'tag-fav' },
                            '10'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            data.name
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement('img', { src: 'img/img03.jpg', alt: '' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { title: '2', className: 'hotels' },
                        '添加'
                    )
                )
            )
        );
    },

    scenic: function scenic(data) {
        return React.createElement(
            'div',
            { className: 'time-act' },
            this.renderTimeBar(),
            React.createElement(
                'div',
                { className: 'scenic-box' },
                React.createElement(
                    'div',
                    { className: 'scenicinfo' },
                    data.name
                ),
                React.createElement(
                    'div',
                    { className: 'scenicspot' },
                    React.createElement('img', { src: 'img/pic01.jpg', alt: '' })
                )
            )
        );
    },

    render: function render() {
        var data = this.props.data;
        return this[data.type](data);
    }
});

var TimeTool = React.createClass({
    displayName: 'TimeTool',


    getInitialState: function getInitialState() {
        return {
            action: true
        };
    },

    renderItem: function renderItem() {
        if (this.state.action) {
            return React.createElement(
                'div',
                { className: 'action', onClick: this._handleAdd },
                React.createElement('div', { className: 'time-tag flight', title: 'flight' }),
                React.createElement('div', { className: 'time-tag hotel', title: 'hotel' }),
                React.createElement('div', { className: 'time-tag scenic', title: 'scenic' })
            );
        } else {
            return;
        }
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'time-tool' },
            React.createElement('div', { className: 'time-tag addact', onClick: this.handleAction }),
            this.renderItem()
        );
    },

    handleAction: function handleAction(e) {
        this.setState({
            action: !this.state.action
        });
    },

    _handleAdd: function _handleAdd(e) {
        var _key = e.target.title || "";

        switch (_key) {
            case "flight":
                this.props.modal().open("选择机票", React.createElement(SearchPage, { type: _key, onSelected: this._handleDone }));
                break;
            case "hotel":
                this.props.modal().open("选择酒店", React.createElement(SearchPage, { type: _key, onSelected: this._handleDone }));
                break;
            case "scenic":
                this.props.modal().open("选择门票", React.createElement(SearchPage, { type: _key, onSelected: this._handleDone }));
                break;
            default:
            //do nothin
        }
    },

    _handleDone: function _handleDone(data) {
        this.props.modal().close();
        this.props.onSelected(data);
    }
});

var TimeLine = React.createClass({
    displayName: 'TimeLine',


    getInitialState: function getInitialState() {
        return {
            data: [] // 形成数据
        };
    },

    _handleAdd: function _handleAdd(o) {
        var that = this,
            vinfo = this.props.vinfo();

        // 航班信息
        /*
        if (o.flight) {
                var mFrom = new yuantu.Marker({ address: o.departAirport });
            var mTo   = new yuantu.Marker({ address: o.arriveAirport });
            var line  = new yuantu.Line(mFrom, mTo);
                line.focus();
            headmap.lines.push(line);
              // 出发城市
            if (!vinfo.state.startCity) {
                mFrom.queryCity(function(name) {
                    vinfo.setState({ startCity: name });
                });
            }
              // 终点城市
            mTo.queryCity(function(name) {
                vinfo.setState({ endCity: name });
            });
              // 价格计算
            var price = vinfo.state.price;
            var ret = o.price.match(/\d+/);
            if (ret) {
                price += parseInt(ret[0]);
            }
            vinfo.setState({ price: price });
              // 时间计算
            // 没有日期数据。
        }*/

        this.state.data.push(o);
        this.forceUpdate(function () {
            document.body.scrollTop = 100000;
        });
    },

    render: function render() {

        var data = this.state.data;

        return React.createElement(
            'div',
            { className: 'timeline' },
            React.createElement('div', { className: 'time-tag geol' }),
            data.map(function (o, i) {
                return React.createElement(TimeAct, { data: o, key: "act_" + i });
            }),
            React.createElement(TimeTool, { modal: this.props.modal, onSelected: this._handleAdd })
        );
    }
});

//<div className="time-tag takephoto"></div>

var Comments = React.createClass({
    displayName: 'Comments',


    render: function render() {
        var data = this.props.data || [];

        return React.createElement(
            'div',
            { className: 'comments' },
            data.map(function (o, i) {
                return React.createElement(
                    'div',
                    { className: 'comment-text' },
                    React.createElement(
                        'span',
                        { className: 'avatar' },
                        React.createElement('img', { src: 'img/avatar01.png', alt: '' })
                    ),
                    'body'
                );
            })
        );
    }
});

var SearchPage = React.createClass({
    displayName: 'SearchPage',


    getInitialState: function getInitialState() {

        return {
            city: "",
            dstCity: "",
            search_data: [],
            data: []
        };
    },

    _handleSelect: function _handleSelect(e) {
        var $t = $(e.target).parents("li");

        if ($t.length) {
            var idx = $t.attr('title');
            if (idx) {
                var data = this.state.data[idx];
                data.type = this.state.type;

                switch (data.type) {
                    case 'flight':
                        break;
                    case 'hotel':
                        break;
                    case 'scenic':
                        CFG.current = CFG.current == 2 ? 0 : CFG.current + 1;
                        break;
                }

                this.props.onSelected(data);
            }
        }
    },

    componentWillMount: function componentWillMount() {
        this.updateData();
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (this.props.type != nextProps.type) {
            this.updateData(nextProps.type);
        }
    },

    updateData: function updateData(type) {
        type = type || this.props.type;

        var stepcity = CFG['circuit'][CFG.current];

        var data = CFG[type + '_data'][stepcity];

        this.setState({
            type: type,
            search_data: CFG[type + "_search"][stepcity],
            data: data
        });
    },

    render: function render() {
        var type = this.props.type;
        var search_data = this.state.search_data;
        var data = this.state.data || [];

        var renderfunc = this[type];

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'search-tool' },
                search_data.map(function (o, i) {
                    return React.createElement(
                        'div',
                        { key: "s" + i, className: "flight-cell " + o.class },
                        React.createElement(
                            'span',
                            null,
                            o.label
                        ),
                        React.createElement('input', { ref: 'txt' + i, placeholder: o.value })
                    );
                }),
                React.createElement(
                    'div',
                    { className: 'flight-cell search-btn' },
                    React.createElement(
                        'span',
                        null,
                        '  '
                    ),
                    React.createElement('input', { type: 'button', className: 'g-btn', defaultValue: '搜索' })
                )
            ),
            renderfunc(data)
        );
    },

    flight: function flight(data) {
        return React.createElement(
            'ul',
            { className: 'mf-list-ul', onClick: this._handleSelect },
            data.map(function (o, i) {
                return React.createElement(
                    'li',
                    { key: i, title: i, className: 'js-open-cabin mf-main-cabin mf-arrow-bottom' },
                    React.createElement(
                        'div',
                        { className: 'mf-flight-info1' },
                        React.createElement(
                            'div',
                            { className: 'mf-date-wrap' },
                            React.createElement(
                                'div',
                                { className: 'mf-dtime' },
                                React.createElement(
                                    'span',
                                    { className: 'mf-list-time' },
                                    o.departTime
                                ),
                                React.createElement(
                                    'span',
                                    { className: 'mf-airPort' },
                                    o.departAirport
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'mf-middle' },
                                React.createElement('i', { className: 'mf-flight-line-list' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'mf-atime' },
                                React.createElement(
                                    'span',
                                    { className: 'mf-list-time' },
                                    o.arriveTime
                                ),
                                React.createElement(
                                    'span',
                                    { className: 'mf-airPort' },
                                    o.arriveAirport
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mf-price-wrap' },
                            React.createElement(
                                'div',
                                { className: 'mf-overh clearfix' },
                                React.createElement(
                                    'div',
                                    { className: 'mf-flight-price' },
                                    React.createElement(
                                        'span',
                                        { className: 'mf-flight-price-num' },
                                        o.price
                                    )
                                )
                            )
                        )
                    )
                );
            })
        );
    },

    hotel: function hotel(data) {

        return React.createElement(
            'div',
            { className: 'hotel-g-bd hotel-hot js_hotel_list' },
            React.createElement(
                'ul',
                { className: 'hotel-g-list', onClick: this._handleSelect },
                data.map(function (o, i) {
                    return React.createElement(
                        'li',
                        { className: 'js_hotel_detail', title: i, key: "hotel_" + i },
                        React.createElement(
                            'div',
                            { className: 'hotel-g-proimg' },
                            React.createElement('img', { className: 'js_hotelimg', alt: o.name, width: '96', height: '96', src: o.pic })
                        ),
                        React.createElement(
                            'div',
                            { className: 'hotel-g-cbd' },
                            React.createElement(
                                'h4',
                                { className: 'ellips js_hotelname' },
                                o.name
                            ),
                            React.createElement(
                                'div',
                                { className: 'list-c' },
                                React.createElement(
                                    'span',
                                    { className: 'price-num fr' },
                                    React.createElement(
                                        'b',
                                        { className: 'num js_translog_price', 'data-price': '848' },
                                        o.price
                                    )
                                ),
                                React.createElement(
                                    'span',
                                    { className: 'rate-num js_hotelpoint' },
                                    o.value,
                                    '分'
                                ),
                                React.createElement(
                                    'span',
                                    { className: 'cgray' },
                                    o.judgementScore
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'list-c hotel-cell' },
                                React.createElement(
                                    'span',
                                    { className: 'cgray js_hotelstar' },
                                    '高档型'
                                ),
                                React.createElement(
                                    'span',
                                    { className: 'ico-txt ico-tags-ellips' },
                                    React.createElement('span', null),
                                    ' ',
                                    React.createElement('span', { className: 't-r' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'list-c' },
                                React.createElement(
                                    'span',
                                    { className: 'c808080 fn12' },
                                    '最新预订:4小时前'
                                )
                            )
                        )
                    );
                })
            )
        );
    },

    scenic: function scenic(data) {
        return React.createElement(
            'div',
            { className: 'ticket_list list-bottom-fix' },
            React.createElement(
                'ul',
                { className: 'border-list g-pro-list ttd-pro-list no-border-top', onClick: this._handleSelect },
                data.map(function (o, i) {
                    return React.createElement(
                        'li',
                        { className: 'js_go_to_detail', title: i, key: "hotel_" + i },
                        React.createElement(
                            'div',
                            { className: 'js_visited border-item g-pro-list_pl5 ttd-pro-list-item' },
                            React.createElement(
                                'div',
                                { className: 'g-pro-list-img' },
                                React.createElement('span', { className: 'f-logo' }),
                                React.createElement('img', { className: 'fl fade-in', src: o.pic })
                            ),
                            React.createElement(
                                'div',
                                { className: 'g-pro-list-info g-pro-list-info-1' },
                                React.createElement(
                                    'h3',
                                    { className: 'g-title ellips_line2' },
                                    o.name
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'spot-info' },
                                    o.rate
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'g-pro-info-item price-row' },
                                    React.createElement(
                                        'div',
                                        { className: 'ib_container' },
                                        React.createElement(
                                            'span',
                                            { className: 'u-pro-tag ib' },
                                            React.createElement(
                                                'i',
                                                { className: 'blue' },
                                                '今日可用'
                                            )
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'u-pro-tag ib' },
                                            React.createElement(
                                                'i',
                                                { className: 'green' },
                                                '亲子'
                                            )
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'u-pro-tag ib' },
                                            React.createElement(
                                                'i',
                                                { className: 'green' },
                                                '自然风光'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'ttd-list-price' },
                                            React.createElement(
                                                'span',
                                                { className: 'u-pro-price' },
                                                o.tickets[0].price
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'g-pro-info-item' },
                                    React.createElement(
                                        'span',
                                        { className: 'ttd-sale' },
                                        '月销：332份'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'g-score list-info-abs' },
                                        o.grade,
                                        '分'
                                    )
                                )
                            )
                        )
                    );
                })
            )
        );
    }
});

var Modal = React.createClass({
    displayName: 'Modal',


    getInitialState: function getInitialState() {
        return {
            display: "",
            content: "",
            title: ""
        };
    },

    open: function open(title, content) {
        this.setState({
            display: "fadein",
            title: title,
            content: content
        });
    },

    close: function close() {
        this.setState({
            display: "fadeout"
        });
    },

    render: function render() {

        return React.createElement(
            'div',
            { className: "fly-layer " + this.state.display, id: 'fly-layer' },
            React.createElement(
                'div',
                { className: 'main-frame' },
                React.createElement(
                    'div',
                    { className: 'main-viewport' },
                    React.createElement(
                        'div',
                        { style: { "height": "40px" } },
                        React.createElement(
                            'div',
                            { className: 'cm-header' },
                            React.createElement(
                                'h1',
                                { className: 'cm-page-title js_title' },
                                this.state.title
                            ),
                            React.createElement('span', { className: 'cm-header-icon icon_share i_close', onClick: this.close })
                        )
                    ),
                    this.state.content
                )
            )
        );
    }
});

var App = React.createClass({
    displayName: 'App',


    modal: function modal() {
        return this.refs['modal'];
    },

    vinfo: function vinfo() {
        return this.refs['vinfo'];
    },

    render: function render() {
        return React.createElement(
            Paper,
            null,
            React.createElement(Modal, { ref: 'modal' }),
            React.createElement(FixMap, null),
            React.createElement(
                'div',
                { id: 'main' },
                React.createElement(
                    'div',
                    { className: 'main-frame' },
                    React.createElement(
                        'div',
                        { className: 'main-viewport' },
                        React.createElement(UserBox, { modal: this.modal }),
                        React.createElement(Vinfo, { ref: 'vinfo' }),
                        React.createElement(TimeLine, { modal: this.modal, vinfo: this.vinfo })
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
