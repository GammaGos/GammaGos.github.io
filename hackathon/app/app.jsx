var headmap = {
    map: null,
    overloads: []
};


var Paper = React.createClass({

    propTypes: {
        children: React.PropTypes.node,
        circle: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        //style: React.PropTypes.object,
        transitionEnabled: React.PropTypes.bool
    },

    getDefaultProps: function(){
        return {
            circle: false,
            rounded: true,
            transitionEnabled: false
        };
    },

    render: function(){
        const {
            children,
            circle,
            rounded,
            transitionEnabled,
            style,
            } = this.props;

        return <div style={style} >{children}</div>
    }
});




var FixMap = React.createClass({

    scrollCallback: debounce(function(e){
        if(document.body.scrollTop > 10){
            this.refs['user'].style.display = "none";
        }else{
            this.refs['user'].style.display = "block";
        }
    },30),

    componentDidMount: function(){
        Events.on(window, "scroll", this.scrollCallback);
        headmap.map = new yuantu.Map({ container: 'amap' });
        headmap.map.active();
    },

    componentWillUnmount: function(){
        Events.off(window, "scroll", this.scrollCallback);
    },

    render: function(){

        return (
            <div style={{"height" : "260px"}}>
                <div className="cm-header opacity" >
                    <span className="cm-header-icon fl">
                        <i className="icon-back"></i>
                    </span>
                    <span className="cm-header-icon icon_share i_bef"></span>
                </div>
                <div className="map-box">
                    <div className="map" id="amap">
                    </div>
                    <div className="user_me" ref="user">
                        <span className="avatar"><img src="img/avatar_b_01.png" alt="" /></span>
                        <big>ColdCat</big>
                    </div>
                </div>
            </div>
        )
    }
});

var UserBox = React.createClass({

    _handleAdd: function(){
        this.props.modal().open("添加好友", this.renderUseList());
    },

    _handleSelect: function(e){
        var id = null;
        if(id = e.target.title){
            CFG.users[id].isActive = !CFG.users[id].isActive;
            this.forceUpdate();
            this.props.modal().close();
        }
    },

    renderItems: function(data){
        var items = [];

        data.forEach(function(o, i){
            // if(!o.isActive){
            var _class = o.isActive ? "curr" : "";

            items.push(
                <dl key={i}>
                    <dt>{o.letter}</dt>
                    <dd title={i} className={_class}>
                        <span  title={i} className="avatar"><img title={i} src={o.head} alt="" /></span>
                        <big  title={i}>{o.name}</big>
                    </dd>
                </dl>
            )
        });
        return items;
    },

    renderUseList: function(){
        var data = CFG.users;
        return (
            <div className="main-viewport">
                <div className="user-list" onClick={this._handleSelect}>
                    {this.renderItems(data)}
                </div>
            </div>
        )
    },

    render: function(){
        var data = CFG.users;

        var activeUsers = [];
        data.forEach(function(o, i){
            if(o.isActive){
                activeUsers.push(<p key={'avatar_'+i}><span className="avatar"><img src={o.head} alt={o.name} /></span></p>);
            }
        });

        return (
            <div className="user-box">
                <div className="users">
                    {activeUsers}
                    <p className="avatar addmore" onClick={this._handleAdd}></p>
                </div>
            </div>
        )
    }
});


var Vinfo = React.createClass({
    getInitialState: function() {
        return {
            title: "",
            startDate: null,
            endDate: null,
            price: 0,
            startCity: null,
            endCity: null
        };
    },
    onBlur:function(){

        $(this.refs.vtitle).removeClass("vtitle-blank");

    },
    onFocus:function(){
        $(this.refs.vtitle).addClass("vtitle-blank");

    },
    render: function(){
        var data = this.state;
        var formatDate = function(d) {
            return d ? d.getMonth() + 1 + '.' + d.getDate() : '?';
        };
        return (
            <div className="v-info">
                <input type="text" ref="vtitle" className="vtitle-blank" onBlur={this.onBlur}  onFocus={this.onFocus} placeholder="加个标题呗"/>
                <ul>
                    <li>
                        <small>起点</small>
                        <big>{data.startCity ? data.startCity : '?' }</big>
                    </li>
                    <li>
                        <small>终点</small>
                        <big>{data.endCity ? data.endCity : '?' }</big>
                    </li>
                    <li>
                        <small>时间</small>
                        <big>
                            {formatDate(data.startDate)} - {formatDate(data.endDate)}
                        </big>
                    </li>
                    <li>
                        <small>经费</small>
                        <big>￥{data.price}</big>
                    </li>
                </ul>
            </div>
        )
    }
});

var TimeAct = React.createClass({
    onclick: function() {
        headmap.focusing.focus(false);
        headmap.focusing = this.props.data.mapOverload;
        headmap.focusing.focus();
    },

    checkinfo:function(){
        var div = $('<div class="comment-text"></div>')
        div.html('<span class="avatar"><img src="img/avatar01.png" alt=""/></span>都说法国签证已经不再难，但是每天还是能看见几个莫名其妙的拒签')
        $(this.refs.comments).append(div)
    },
    renderTimeBar: function(date){
        return (
            <div className="time-bar">
                <span className="time-tag clock"></span>
                <span className="status">未预订</span>
                <p>{date.getHours()}:{date.getMinutes()} {date.getMonth() + 1}月{date.getDate()}日</p>

            </div>
        )
    },

    flight: function(data){
        return (
            <div className="time-act" onClick={this.onclick}>
                {this.renderTimeBar(data.date)}
                <div className="flight-box">
                    <h3>{data.company + data.flight}</h3>
                    <div className="flight-from">
                        <big>上海</big>
                        <small>{data.departAirport}</small>
                        <strong>{data.departTime}</strong>
                    </div>
                    <div className="flight-to">
                        <big>成都</big>
                        <small>{data.arriveAirport}</small>
                        <strong>{data.arriveTime}</strong>
                    </div>
                    <abbr></abbr>
                </div>
            </div>
        )
    },

    hotel: function(data){

        return (

            <div>
                <div className="time-act" onClick={this.onclick}>
                    {this.renderTimeBar(data.date)}
                    <div className="hotel-box">
                        <div ref="maskshow" className="maskshow" onclick="this.className+=' on';" style={{height:"256px"}}>

                                <div title="2" className="hotels addhotel"><i>+</i>推荐酒店</div>
                                <div title="0" className="hotels">
                                    <i className="tag-fav">10</i>
                                    <h3>Goodwood Park Hotel Singapore (新加坡良木园大酒店) </h3>
                                    <p><img src="img/img03.jpg" alt=""/></p>
                                </div>



                        </div>
                        <div className="token" style={{height:"296px",display:"none"}}></div>
                        <div className="checkinfo" onClick={this.checkinfo}><span className="editicon"></span><b>入住日期</b> 04月21日 周四 / <b>退房日期</b> 04月24日 周日</div>

                    </div>
                </div>


                <div className="comments" ref="comments">

                </div>
            </div>

        )
    },
    _photohandleSelect:function(e){
        this.props.modal().close();
        if($(this.refs.photobox).css("display")=="none"){
            $(this.refs.photobox).show();

        }else{
            $(this.refs.photobox).find('.photo-imgs').append($('<img src="img/photo01.jpg" alt=""/>'));
        }
    },
    renderPhotoList: function(){
        return (
            <div className="main-viewport">
                <div className="photolib" onClick={this._photohandleSelect}>
                    <div className="photo"><img src="img/photo01.jpg" alt=""/></div>
                    <div className="photo"><img src="img/photo02.jpg" alt=""/></div>
                    <div className="photo"><img src="img/photo01.jpg" alt=""/></div>
                </div>
            </div>
        )
    },
    takephoto:function(){

        this.props.modal().open("选择照片", this.renderPhotoList());


    },
    scenic: function(data){
        return (
            <div>
            <div className="time-act" onClick={this.onclick}>
                {this.renderTimeBar(data.date)}

                <div className="scenic-box">
                    <div className="scenicinfo">{data.name}</div>
                    <div className="scenicspot"><img src="img/pic01.jpg" alt=""/></div>
                </div>

            </div>
            <div className="time-tag takephoto" onClick={this.takephoto}></div>
            <div className="time-act" style={{display:"none"}} ref="photobox">
                <div className="time-bar"><span className="time-tag clock"></span><p>下午20：16，3月31日</p></div>
                <div className="photo-box">
                    <p>三月的最后一天，这里景色如画,</p>
                    <div className="photo-imgs"><img src="img/photo01.jpg" alt=""/></div>
                </div>
            </div>
            </div>
        )
    },
    componentDidMount: function(data){
        console.log('---------------',this.props.data.type);
        if(this.props.data.type=="hotel"){


            new window.addmaskshow($(this.refs.maskshow));

        }
    },
    render: function(){

        var data = this.props.data;
        return this[data.type](data);
    }
});

var TimeTool = React.createClass({

    getInitialState: function(){
        return {
            action: false
        }
    },

    renderItem: function(){

        // if(this.state.action){
            return (
                <div className="action" onClick={this._handleAdd}>
                    <div className="time-tag flight" title="flight"></div>
                    <div className="time-tag hotel" title="hotel"></div>
                    <div className="time-tag scenic" title="scenic"></div>
                </div>
            )
        // }else{
        //     return
        // }
    },

    render: function(){
        return (
            <div className="time-tool" ref="addact">
                <div  className="time-tag addact" onClick={this.handleAction}></div>
                {this.renderItem()}
            </div>
        )
    },

    handleAction: function(e){
        this.setState({
            action: !this.state.action
        });
        if(this.state.action){
            $(this.refs.addact).removeClass('flyout');
        }else{
            $(this.refs.addact).addClass('flyout');
        }

    },

    _handleAdd: function(e){
        var _key = e.target.title || "";

        switch(_key){
            case "flight":
                this.props.modal().open("选择机票", <SearchPage type={_key} onSelected={this._handleDone} />)
                break;
            case "hotel":
                this.props.modal().open("选择酒店", <SearchPage type={_key} onSelected={this._handleDone} />)
                break;
            case "scenic":
                this.props.modal().open("选择门票", <SearchPage type={_key} onSelected={this._handleDone} />)
                break;
            default:
                //do nothin
        }
    },

    _handleDone: function(data){
        this.props.modal().close();
        this.props.onSelected(data);
    }
});

var TimeLine = React.createClass({

    getInitialState: function(){
        return {
            data: []        // 形成数据
        }
    },

    _handleAdd: function(o){
        var that = this, vinfo = this.props.vinfo();

        var overload;
        // @TEMP
        // 模拟变更时间信息
        var d = new Date();
        d.setYear(2016);
        d.setHours(parseInt(Math.random() * 100) % 24);
        d.setMinutes(parseInt(Math.random() * 100) % 60);

        // 航班信息
        if (o.flight) {
            var mFrom = new yuantu.Marker({ address: o.departAirport, icon: './img/dot02.png' });
            var mTo   = new yuantu.Marker({ address: o.arriveAirport, icon: './img/dot02.png' });
            var line  = new yuantu.Line(mFrom, mTo);

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

            headmap.preMarker = mTo;
            overload = line;
        }

        // 景点信息
        else if (o.detailedAddress) {
            d.setHours(parseInt(Math.random() * 100) % 12 + 8);

            var marker = new yuantu.Marker({ address: o.detailedAddress, zoom: 13 });
            var path = new yuantu.Path(headmap.preMarker, marker);

            // 价格计算
            var price = vinfo.state.price;
            var ret = o.tickets[0].price.match(/\d+/);
            if (ret) {
                price += parseInt(ret[0]);
            }
            vinfo.setState({ price: price });

            headmap.preMarker = marker;
            overload = marker;
        }

        // 酒店信息
        else {
            var marker = new yuantu.Marker({ address: o.name, zoom: 15 });
            var path = new yuantu.Path(headmap.preMarker, marker);

            // 价格计算
            var price = vinfo.state.price;
            var ret = o.price.match(/\d+/);
            if (ret) {
                price += parseInt(ret[0]);
            }
            vinfo.setState({ price: price });

            headmap.preMarker = marker;
            overload = marker;
        }

        if (headmap.overloads.length == 0) {
            d.setMonth(6); d.setDate(21);
            vinfo.setState({ startDate: d });
            vinfo.setState({ endDate: d });
        }
        else {
            d.setMonth(6); d.setDate(21 + headmap.overloads.length);
            vinfo.setState({ endDate: d });
        }
        o.date = d;

        if (headmap.focusing) {
            headmap.focusing.focus(false);
        }
        headmap.focusing = overload;
        headmap.focusing.focus();
        headmap.overloads.push(overload);
        o.mapOverload = overload;

        this.state.data.push(o);
        this.forceUpdate(function(){
            document.body.scrollTop = 100000;
        });
    },

    render: function(){

        var data = this.state.data;
        var that = this;
        return (
            <div className="timeline">
                <div className="time-tag geol"><span className="geoltext">上海临空SOHO携程网络技术大楼</span></div>

                {data.map(function(o, i){
                    return <TimeAct data={o} key={"act_"+i} modal={that.props.modal}/>
                })}
                <TimeTool modal={this.props.modal} onSelected={this._handleAdd} />
            </div>
        )
    }
});

//<div className="time-tag takephoto"></div>

var Comments = React.createClass({

    render: function(){
        var data = this.props.data || []

        return (
            <div className="comments">
                {
                    data.map(function(o, i){
                        return (
                            <div className="comment-text">
                                <span className="avatar"><img src="img/avatar01.png" alt="" /></span>
                                body
                            </div>
                        )
                    })
                }
            </div>
        )

    }
});


var SearchPage = React.createClass({


    getInitialState: function(){

        return {
            city: "",
            dstCity: "",
            search_data: [],
            data: [],
            scenicspot:""
        }
    },

    _handleSelect: function(e){
        var $t = $(e.target).parents("li");

        if($t.length){
            var idx = $t.attr('title');
            if(idx){
                var data = this.state.data[idx];
                data.type = this.state.type;

                switch (data.type){
                    case 'flight':

                        break;
                    case 'hotel':

                        break;
                    case 'scenic':

                        CFG.current = (CFG.current == 2) ? 0 : CFG.current + 1;
                        break;
                }

                this.props.onSelected(data)
            }
        }
    },

    componentWillMount: function(){
        this.updateData();
    },

    componentWillReceiveProps: function(nextProps){
        if(this.props.type !=  nextProps.type) {
            this.updateData(nextProps.type);
        }
    },

    updateData: function(type){
        type = type || this.props.type;

        var stepcity = CFG['circuit'][CFG.current];

        var data = CFG[type+'_data'][stepcity];

        this.setState({
            type: type,
            search_data: CFG[type + "_search"][stepcity],
            data: data
        });
    },

    render: function(){
        var type = this.props.type;
        var search_data = this.state.search_data;
        var data = this.state.data || [];

        var renderfunc = this[type];

        console.log(type);
        var isscenicspot = "";
        function isscenicspot1(o){
            if(type=='scenic'){

                return null;
            }else{
                return <span>{o.label}</span>
            }

        }
        var isscenicspot2 = <span>&nbsp; </span>
        if(type=='scenic'){
            isscenicspot = "scenic-tool";

            isscenicspot2="";
        }
        console.log(isscenicspot);
        return (
            <div>
                <div className={"search-tool "+isscenicspot}>
                    {search_data.map(function(o, i){
                        return <div key={"s"+i} className={"flight-cell "+o.class}>
                            {isscenicspot1(o)}


                            <input ref={'txt'+i} placeholder={o.value}/>
                        </div>
                    })}
                    <div className="flight-cell search-btn ">{isscenicspot2} <input type="button" className="g-btn" defaultValue="搜索" /></div>
                </div>
                {renderfunc(data)}
            </div>
        )
    },

    flight: function(data){
        return (<ul className="mf-list-ul" onClick={this._handleSelect}>
            {data.map(function(o, i){
                return (
                <li key={i} title={i} className="js-open-cabin mf-main-cabin mf-arrow-bottom">
                    <div className="mf-flight-info1">
                        <div className="mf-date-wrap">
                            <div className="mf-dtime">
                                <span className="mf-list-time">{o.departTime}</span>
                                <span className="mf-airPort">{o.departAirport}</span>
                            </div>
                            <div className="mf-middle">
                                <i className="mf-flight-line-list"></i>
                            </div>
                            <div className="mf-atime">
                                <span className="mf-list-time">{o.arriveTime}</span>
                                <span className="mf-airPort">{o.arriveAirport}</span>
                            </div>
                        </div>
                        <div className="mf-price-wrap">
                            <div className="mf-overh clearfix">
                                <div className="mf-flight-price">
                                                <span className="mf-flight-price-num">
                                                   {o.price}
                                                   </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                    )
                })}
        </ul>);
    },

    hotel: function(data){

        return (
            <div className="hotel-g-bd hotel-hot js_hotel_list">
                <ul className="hotel-g-list"  onClick={this._handleSelect}>

                    {data.map(function(o, i){
                        return (<li className="js_hotel_detail" title={i} key={"hotel_"+i}>
                            <div className="hotel-g-proimg">
                                <img className="js_hotelimg" alt={o.name} width="96" height="96" src={o.pic} />
                            </div>
                            <div className="hotel-g-cbd">
                                <h4 className="ellips js_hotelname">{o.name}</h4>
                                <div className="list-c">
                                    <span className="price-num fr"><b className="num js_translog_price" data-price="848">{o.price}</b></span>
                                    <span className="rate-num js_hotelpoint">{o.value}分</span>
                                    <span className="cgray">{o.judgementScore}</span>
                                </div>
                                <div className="list-c hotel-cell">
                                    <span className="cgray js_hotelstar">高档型</span>
                                    <span className="ico-txt ico-tags-ellips"><span></span> <span className="t-r"></span></span>
                                </div>
                                <div className="list-c">
                                    <span className="c808080 fn12">最新预订:4小时前</span>
                                </div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    },

    scenic: function(data){
        this.state.scenicspot = "scenicspot";
        return (
            <div className="ticket_list list-bottom-fix">
                <ul className="border-list g-pro-list ttd-pro-list no-border-top"  onClick={this._handleSelect}>

                    {data.map(function(o, i){
                        return (<li className="js_go_to_detail" title={i} key={"hotel_"+i}>
                            <div className="js_visited border-item g-pro-list_pl5 ttd-pro-list-item">
                                <div className="g-pro-list-img">
                                    <span className="f-logo"></span>
                                    <img className="fl fade-in" src={o.pic} />
                                </div>
                                <div className="g-pro-list-info g-pro-list-info-1">
                                    <h3 className="g-title ellips_line2">{o.name}</h3>
                                    <div className="spot-info">{o.rate}</div>
                                    <div className="g-pro-info-item price-row">
                                        <div className="ib_container">
                                            <span className="u-pro-tag ib"><i className="blue">今日可用</i></span>
                                            <span className="u-pro-tag ib"><i className="green">亲子</i></span>
                                            <span className="u-pro-tag ib"><i className="green">自然风光</i></span>
                                            <div className="ttd-list-price">
                                                <span className="u-pro-price">{o.tickets[0].price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="g-pro-info-item">
                                        <span className="ttd-sale">月销：332份</span>
                                        <span className="g-score list-info-abs">{o.grade}分</span>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
})


var Modal = React.createClass({

    getInitialState: function(){
        return {
            display: "",
            content: "",
            title: ""
        }
    },

    open: function(title, content){
        this.setState({
            display: "fadein",
            title: title,
            content: content
        })
    },

    close: function(){
        this.setState({
            display: "fadeout"
        })
    },

    render: function() {

        return (
            <div className={"fly-layer " + this.state.display} id="fly-layer">
                <div className="main-frame">
                    <div className="main-viewport">
                        <div style={{"height":"40px"}}>
                            <div className="cm-header">
                                <h1 className="cm-page-title js_title">{this.state.title}</h1>
                                <span className="cm-header-icon icon_share i_close" onClick={this.close}></span>
                            </div>
                        </div>

                        {this.state.content}
                    </div>
                </div>
            </div>
        );
    }
})

var App = React.createClass({

    modal: function(){
        return this.refs['modal'];
    },

    vinfo: function() {
        return this.refs['vinfo'];
    },

    render: function(){
        return (
            <Paper>
                <Modal ref="modal" />

                <FixMap />
                <div id="main">
                    <div className="main-frame">
                        <div className="main-viewport">
                            <UserBox modal={this.modal} />
                            <Vinfo ref="vinfo" />
                            <TimeLine modal={this.modal} vinfo={this.vinfo} />
                        </div>
                    </div>

                </div>
            </Paper>
        )
    }
});

ReactDOM.render(<App />, document.getElementById("app"));
