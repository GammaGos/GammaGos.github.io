var CFG = {
    users: [
        {
            letter: "A",
            name: "ataa.P",
            head: "img/avatar01.png",
        },
        {
            letter: "H",
            name: "hack.PI",
            head: "img/avatar02.png"
        },
        {
            letter: "N",
            name: "nunn.L",
            head: "img/avatar_b_01.png"
            // isActive: true
        }
    ],
    current: 0,
    circuit: ['chengdu', "lasa", "shanghai"],
    flight_search: {
        "chengdu": [
                {
                    class: "search-dapart",
                    label: "出发城市",
                    format: "",
                    value: "上海",
                },
                {
                    class: "search-dest",
                    label: "到达城市",
                    format: "",
                    value: "成都",
                },
                {
                    class: "search-date",
                    label: "出发日期",
                    format: "",
                    value: "yyyy-mm-dd",
                }
            ],
        "lasa": [
            {
                class: "search-dapart",
                label: "出发城市",
                format: "",
                value: "成都",
            },
            {
                class: "search-dest",
                label: "到达城市",
                format: "",
                value: "拉萨",
            },
            {
                class: "search-date",
                label: "出发日期",
                format: "",
                value: "yyyy-mm-dd",
            }
        ],
        "shanghai": [
            {
                class: "search-dapart",
                label: "出发城市",
                format: "",
                value: "拉萨",
            },
            {
                class: "search-dest",
                label: "到达城市",
                format: "",
                value: "上海",
            },
            {
                class: "search-date",
                label: "出发日期",
                format: "",
                value: "yyyy-mm-dd",
            }
        ],
    },
    hotel_search: {
        "chengdu":[
            {
                class: "search-dapart",
                label: "入住",
                format: "",
                value: "yyyy-mm-dd",
            },
            {
                class: "search-dest",
                label: "离店",
                format: "",
                value: "yyyy-mm-dd",
            },
            {
                class: "search-date",
                label: "目的地",
                format: "",
                value: "成都",
            }
        ],
        "lasa":[
            {
                class: "search-dapart",
                label: "入住",
                format: "",
                value: "yyyy-mm-dd",
            },
            {
                class: "search-dest",
                label: "离店",
                format: "",
                value: "yyyy-mm-dd",
            },
            {
                class: "search-date",
                label: "目的地",
                format: "",
                value: "拉萨",
            }
        ]
    },
    scenic_search: {
        "chengdu": [
            {
                class: "search-dapart",
                label: "游玩日期",
                format: "",
                value: "yyyy-mm-dd",
            },
            {
                class: "search-dest",
                label: "景点名称/目的地",
                format: "",
                value: "成都",
            }
        ],
        "lasa": [
            {
                class: "search-dapart",
                label: "游玩日期",
                format: "",
                value: "yyyy-mm-dd",
            },
            {
                class: "search-dest",
                label: "景点名称/目的地",
                format: "",
                value: "拉萨",
            }
        ]
    },

    flight_data: {
        //上海到成都
        "chengdu": [
            {
            	"company": "深圳航空",
            	"flight": "ZH4536",
            	"departTime": "21:00",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "00:25",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥726"
            }, {
            	"company": "中国国航",
            	"flight": "CA1947",
            	"departTime": "07:10",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "10:30",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥730"
            }, {
            	"company": "中国国航",
            	"flight": "CA1949",
            	"departTime": "16:40",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "20:05",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥730"
            }, {
            	"company": "中国国航",
            	"flight": "CA4536",
            	"departTime": "21:00",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "00:25",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥730"
            }, {
            	"company": "成都航空",
            	"flight": "EU6678",
            	"departTime": "21:40",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "01:05",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥740"
            }, {
            	"company": "深圳航空",
            	"flight": "ZH1947",
            	"departTime": "07:10",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "10:30",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥746"
            }, {
            	"company": "深圳航空",
            	"flight": "ZH1949",
            	"departTime": "16:40",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "20:05",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥746"
            }, {
            	"company": "山东航空",
            	"flight": "SC1947",
            	"departTime": "07:10",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "10:30",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥768"
            }, {
            	"company": "山东航空",
            	"flight": "SC1949",
            	"departTime": "16:40",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "20:05",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥768"
            }, {
            	"company": "山东航空",
            	"flight": "SC4536",
            	"departTime": "21:00",
            	"departAirport": "浦东国际机场T2",
            	"arriveTime": "00:25",
            	"arriveAirport": "双流国际机场T2",
            	"price": "¥768"
            }
        ],
        "lasa": [
                {
                "company": "深圳航空",
                "flight": "ZH4405",
                "departTime": "06:15",
                "departAirport": "双流国际机场T2",
                "arriveTime": "08:40",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥795"
            }, {
                "company": "深圳航空",
                "flight": "ZH4403",
                "departTime": "06:45",
                "departAirport": "双流国际机场T2",
                "arriveTime": "09:20",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥795"
            }, {
                "company": "深圳航空",
                "flight": "ZH4401",
                "departTime": "07:15",
                "departAirport": "双流国际机场T2",
                "arriveTime": "09:50",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥797"
            }, {
                "company": "中国国航",
                "flight": "CA4405",
                "departTime": "06:15",
                "departAirport": "双流国际机场T2",
                "arriveTime": "08:40",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥800"
            }, {
                "company": "中国国航",
                "flight": "CA4403",
                "departTime": "06:45",
                "departAirport": "双流国际机场T2",
                "arriveTime": "09:20",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥800"
            }, {
                "company": "中国国航",
                "flight": "CA4401",
                "departTime": "07:15",
                "departAirport": "双流国际机场T2",
                "arriveTime": "09:50",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥800"
            }, {
                "company": "山东航空",
                "flight": "SC4405",
                "departTime": "06:15",
                "departAirport": "双流国际机场T2",
                "arriveTime": "08:40",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥819"
            }, {
                "company": "山东航空",
                "flight": "SC4403",
                "departTime": "06:45",
                "departAirport": "双流国际机场T2",
                "arriveTime": "09:20",
                "arriveAirport": "拉萨贡嘎机场",
                "price": "¥819"
            }
        ],         //成都到拉萨
        "shanghai": [{
        	"company": "东方航空",
        	"flight": "MU9732",
        	"departTime": "18:50",
        	"departAirport": "拉萨贡嘎机场",
        	"arriveTime": "21:15",
        	"arriveAirport": "长水国际机场",
        	"price": "¥780"
        }, {
        	"company": "四川航空",
        	"flight": "3U8818",
        	"departTime": "12:00",
        	"departAirport": "拉萨贡嘎机场",
        	"arriveTime": "15:35",
        	"arriveAirport": "长水国际机场",
        	"price": "¥1020"
        }, {
        	"company": "东方航空",
        	"flight": "MU5940",
        	"departTime": "13:35",
        	"departAirport": "拉萨贡嘎机场",
        	"arriveTime": "17:05",
        	"arriveAirport": "长水国际机场",
        	"price": "¥1020"
        }, {
        	"company": "西藏航空",
        	"flight": "TV9847",
        	"departTime": "09:25",
        	"departAirport": "拉萨贡嘎机场",
        	"arriveTime": "11:45",
        	"arriveAirport": "长水国际机场",
        	"price": "¥1077"
        }, {
        	"company": "中国国航",
        	"flight": "CA3947",
        	"departTime": "09:25",
        	"departAirport": "拉萨贡嘎机场",
        	"arriveTime": "11:45",
        	"arriveAirport": "长水国际机场",
        	"price": "¥1130"
        }, {
        	"company": "南方航空",
        	"flight": "CZ9609",
        	"departTime": "13:35",
        	"departAirport": "拉萨贡嘎机场",
        	"arriveTime": "17:05",
        	"arriveAirport": "长水国际机场",
        	"price": "¥1130"
        }, {
        	"company": "东方航空",
        	"flight": "MU3384",
        	"departTime": "12:00",
        	"departAirport": "拉萨贡嘎机场",
        	"arriveTime": "15:35",
        	"arriveAirport": "长水国际机场",
        	"price": "¥1580"
        }]   //拉萨到上海
    },

    hotel_data: {
        "chengdu": [{
            "pic": "http://dimg11.c-ctrip.com/images/fd/hotel/g2/M00/20/9E/Cghzf1UIF06ACHShAA-TGi5UvTc670_R_130_130.jpg",
            "name": "成都九眼桥和颐酒店",
            "link": "/hotel/1816884.html",
            "address": "锦江区一环路东5段87号阳光新业中心2号楼，近远洋太古里，成都国际金融中心（成都IFS）兰桂坊。 【 合江亭/九眼桥附近地区 春熙路、大慈寺商业区】",
            "price": "¥288起\n",
            "value": "4.5",
            "judgementScore": "95%用户推荐",
            "judgement": "源自2614位住客点评"
        }, {
            "pic": "http://dimg13.c-ctrip.com/images/hotel/379000/378421/6d8c7421c41745e6b1fd3e28d02e58c6_R_130_130.jpg",
            "name": "成都康普雷斯国际酒店",
            "link": "/hotel/397156.html",
            "address": "武侯区高新区盛和一路98号，都会路交汇处，距地铁口400m，火车南站400m。环抱宜家欧尚，坐拥凯丹广场。 【 火车南站、凯丹广场 玉林生活广场、桐梓林商业区】",
            "price": "¥367起\n",
            "value": "4.4",
            "judgementScore": "97%用户推荐",
            "judgement": "源自3681位住客点评"
        }, {
            "pic": "http://dimg12.c-ctrip.com/images/fd/hotel/g3/M03/19/B2/CggYG1YCdU2AK9lFAAPRoVvJfWs188_R_130_130.jpg",
            "name": "成都海洋莱普敦酒店",
            "link": "/hotel/762637.html",
            "address": "武侯区天府大道中段天府三街91号，近海洋中心维港。 【 世纪城新会展、环球中心】",
            "price": "¥318起\n",
            "value": "4.6",
            "judgementScore": "98%用户推荐",
            "judgement": "源自3805位住客点评"
        }, {
            "pic": "http://dimg12.c-ctrip.com/images/fd/hotel/g5/M06/BB/91/CggYsVb8oMaAe-ATAAEcIr9pj3A155_R_130_130.jpg",
            "name": "成都新良大酒店",
            "link": "/hotel/481150.html",
            "address": "锦江区东大街段246号，步行至春熙路步行街、太古里、IFS、地铁二号线3分钟，近天府广场、兰桂坊，近春熙路步行街。 【 春熙路、大慈寺商业区 天府广场、盐市口商业区】",
            "price": "¥319起\n",
            "value": "4.4",
            "judgementScore": "97%用户推荐",
            "judgement": "源自2233位住客点评"
        }, {
            "pic": "http://dimg11.c-ctrip.com/images/fd/hotel/g4/M0B/5F/3D/CggYHFZvdUSAMzX2ABHSezmpdmI793_R_130_130.jpg",
            "name": "桔子酒店精选（成都顺城店）",
            "link": "/hotel/3734488.html",
            "address": "青羊区白丝街56号，近鼓楼北二街。 【 太升路、四川电视塔 春熙路、大慈寺商业区】",
            "price": "¥276起\n",
            "value": "4.7",
            "judgementScore": "99%用户推荐",
            "judgement": "源自587位住客点评"
        }],
        "lasa": [{
            "pic": "http://dimg10.c-ctrip.com/images/fd/hotel/g5/M05/E6/A4/CggYsFcFuqOAXrJ7AAQK2uMsWh8784_R_130_130.jpg",
            "name": "拉萨腔调藏式精品客栈",
            "link": "/hotel/2511580.html",
            "address": "城关区八廓街鲁固六巷鲁不苍6-5-3号（深夜食堂旁巷内），近江苏路。 【 八廓街(八角街)/大昭寺及附近地区】",
            "price": "¥60起\n",
            "value": "4.4",
            "judgementScore": "93%用户推荐",
            "judgement": "源自74位住客点评"
        }, {
            "pic": "http://dimg10.c-ctrip.com/images/fd/hotel/g6/M0B/84/7C/CggYtFbrumeAFRRQABSS11NUOvY591_R_130_130.jpg",
            "name": "拉萨牧马人精品花园客舍",
            "link": "/hotel/2172109.html",
            "address": "城关区团结新村雄嘎7组22号，近西藏藏医医院。 【 团结新村及附近地区】",
            "price": "¥98起\n",
            "value": "4.3",
            "judgementScore": "90%用户推荐",
            "judgement": "源自252位住客点评"
        }, {
            "pic": "http://dimg13.c-ctrip.com/images/hotel/809000/808839/435bda7507b84d3a9bb0aa0f8b2e3415_R_130_130.jpg",
            "name": "拉萨凌云客栈",
            "link": "/hotel/1305474.html",
            "address": "城关区团结新村雄嘎四组24号，近小昭寺。 【 团结新村及附近地区】",
            "price": "¥43起\n",
            "value": "4.6",
            "judgementScore": "98%用户推荐",
            "judgement": "源自434位住客点评"
        }, {
            "pic": "http://dimg10.c-ctrip.com/images/hotel/83000/82560/60D32C6C407243CE878EC7AC03E762EB_R_130_130.Jpg",
            "name": "拉萨瑞吉度假酒店",
            "link": "/hotel/430479.html",
            "address": "江苏路22号，近西藏大学。 【 八廓街(八角街)/大昭寺及附近地区 市政府及附近地区】",
            "price": "¥1228起\n",
            "value": "4.6",
            "judgementScore": "95%用户推荐",
            "judgement": "源自1376位住客点评"
        }, {
            "pic": "http://dimg12.c-ctrip.com/images/fd/hotel/g3/M04/7C/49/CggYGlX5v_mAOduaAAQ1bmDiCA8947_R_130_130.jpg",
            "name": "拉萨香格里拉大酒店",
            "link": "/hotel/792914.html",
            "address": "罗布林卡路19号，近布达拉宫。 【 罗布林卡及附近地区 布达拉宫及附近地区】",
            "price": "¥1098起\n",
            "value": "4.6",
            "judgementScore": "96%用户推荐",
            "judgement": "源自974位住客点评"
        }, {
            "pic": "http://dimg12.c-ctrip.com/images/fd/hotel/g3/M03/91/34/CggYGlXqm-yAHEWpAA8CrUPLKbA469_R_130_130.jpg",
            "name": "西藏岷山饭店",
            "link": "/hotel/467973.html",
            "address": "城关区雪新村路2A，近林廓北路。 【 布达拉宫及附近地区】",
            "price": "¥518起\n",
            "value": "4.5",
            "judgementScore": "98%用户推荐",
            "judgement": "源自1365位住客点评"
        }, {
            "pic": "http://dimg12.c-ctrip.com/images/fd/hotel/g4/M08/4D/FD/CggYHlXkCJSAdKk7AAMpa6vWrYk989_R_130_130.jpg",
            "name": "拉萨雪龙庄园酒店",
            "link": "/hotel/2386160.html",
            "address": "城关区中和国际城（太阳岛）环岛南路3号，近珠峰路。 【 金珠东路/太阳岛地区 八廓街(八角街)/大昭寺及附近地区】",
            "price": "¥319起\n",
            "value": "4.6",
            "judgementScore": "98%用户推荐",
            "judgement": "源自464位住客点评"
        }, {
            "pic": "http://dimg12.c-ctrip.com/images/fd/hotel/g4/M0B/87/63/CggYHVXpLrOAV7Q1AAS4wtyHZwA028_R_130_130.jpg",
            "name": "拉萨诺吉酒店",
            "link": "/hotel/1114321.html",
            "address": "城关区鲁固路10号，近明吉茶馆。 【 八廓街(八角街)/大昭寺及附近地区】",
            "price": "¥200起\n",
            "value": "4.7",
            "judgementScore": "99%用户推荐",
            "judgement": "源自674位住客点评"
        }, {
            "pic": "http://dimg13.c-ctrip.com/images/fd/hotel/g2/M08/C3/4E/CghzgFUt9H-AC6rZABshRHut-GQ800_R_130_130.jpg",
            "name": "拉萨圣地天堂洲际大饭店",
            "link": "/hotel/1179839.html",
            "address": "城关区江苏大道1号（城关区，近拉萨市政府、西藏大学）",
            "price": "¥878起\n",
            "value": "4.4",
            "judgementScore": "91%用户推荐",
            "judgement": "源自461位住客点评"
        }, {
            "pic": "http://dimg13.c-ctrip.com/images/hotel/48000/47062/57103426174e4c50951896a76ec4c3cc_R_130_130.jpg",
            "name": "拉萨雅汀舍丽花园酒店",
            "link": "/hotel/447652.html",
            "address": "城关区金珠西路60号，近八一路时代广场。 【 金珠西路及附近地区】",
            "price": "¥299起\n",
            "value": "4.4",
            "judgementScore": "97%用户推荐",
            "judgement": "源自1802位住客点评"
        }]
    },

    scenic_data: {
        "chengdu": [{
            "pic": "http://dimg07.c-ctrip.com/images/fd/tg/g5/M08/3B/C0/CggYsFb7OhSANjmUAAFYwjFQ_qs856_C_186_105.jpg",
            "name": "都江堰",
            "link": "/dest/t4597.html",
            "addressName": "【四川·成都】AAAAA",
            "rate": "AAAAA",
            "detailedAddress": "四川省都江堰景区",
            "exercise": "特色： 青城天下幽。",
            "grade": "4.6",
            "gradeDetail": "4.6分(1815人点评)",
            "commentLink": "/dest/t4597.html",
            "tickets": [{
                "num": "单票",
                "detail": "都江堰成人票",
                "price": "¥ 89"
            }, {
                "num": "单票",
                "detail": "玉垒阁门票",
                "price": "¥ 40"
            }]
        }, {
            "pic": "http://dimg06.c-ctrip.com/images/fd/tg/g3/M06/48/13/CggYGlbYEseAE5GrAANefXOldV4051_C_186_105.jpg",
            "name": "花舞人间",
            "link": "/dest/t120077.html",
            "addressName": "【四川·成都】AAAA",
            "rate": "AAAA",
            "detailedAddress": "成都市新津县永商镇梨花大道一段555号。",
            "exercise": "特色： 花舞人间景色美，人舞花间似桃源！",
            "grade": "4.3",
            "gradeDetail": "4.3分(188人点评)",
            "commentLink": "/dest/t120077.html",
            "tickets": [{
                "num": "单票",
                "detail": "花舞人间（赠送下午场大马戏15:30-17:00）成人票",
                "price": "¥ 72"
            }, {
                "num": "单票",
                "detail": "花舞人间（赠送上午场大马戏11:30-13:00）成人票",
                "price": "¥ 72"
            }]
        }, {
            "pic": "http://dimg03.c-ctrip.com/images/tg/181/561/285/42cd173bb9c247e8bd24c735258ab14e_C_186_105.jpg",
            "name": "石象湖",
            "link": "/dest/t18687.html",
            "addressName": "【四川·成都】",
            "rate": "",
            "detailedAddress": "四川省成都市蒲江县成雅高速公路86公里出口处。",
            "exercise": "特色：石象湖是一个独特的天然野生“植物王国”、“植物多样性保护”的天然课堂 。",
            "grade": "4.4",
            "gradeDetail": "4.4分(250人点评)",
            "commentLink": "/dest/t18687.html",
            "tickets": [{
                "num": "单票",
                "detail": "石象湖全票票年卡(自开卡之日起一年内有效)",
                "price": "¥ 180"
            }, {
                "num": "单票",
                "detail": "（提前预定享优惠）石象湖成人门票",
                "price": "¥ 70"
            }]
        }],
        "lasa": [{
            "pic": "http://dimg02.c-ctrip.com/images/tg/730/023/264/52f43b88b11a41a4ae33766f526c12dc_C_186_105.jpg",
            "name": "布达拉宫",
            "link": "/dest/t3117.html",
            "addressName": "【西藏·拉萨】AAAAA",
            "rate": "AAAAA",
            "detailedAddress": "拉萨市区西北的玛布日山。",
            "exercise": "特色：一句佛的偈言，流传到今天；朝着雪域高原，膜拜千百年。",
            "grade": "4.8",
            "gradeDetail": "4.8分(1209人点评)",
            "commentLink": "/dest/t3117.html",
            "tickets": [{
                "num": "单票",
                "detail": "布达拉宫+大昭寺专属导游讲解（不含门票）",
                "price": "¥ 400"
            }, {
                "num": "单票",
                "detail": "布达拉宫专属导游讲解（不含门票）",
                "price": "¥ 300"
            }]
        }, {
            "pic": "http://dimg02.c-ctrip.com/images/tg/673/704/979/d282c2a0d71f40dc8cc3a3f22d8f7a27_C_186_105.jpg",
            "name": "大昭寺",
            "link": "/dest/t3119.html",
            "addressName": "【西藏·拉萨】AAAAA",
            "rate": "AAAAA",
            "detailedAddress": "拉萨市城关区八廓街。",
            "exercise": "特色：那一世，转山转水转佛塔，不为来世只为途中与你相见。",
            "grade": "4.7",
            "gradeDetail": "4.7分(25人点评)",
            "commentLink": "/dest/t3119.html",
            "tickets": [{
                "num": "单票",
                "detail": "大昭寺专属导游讲解（不含门票）",
                "price": "¥ 200"
            }, {
                "num": "套票",
                "detail": "【金牌导游】布达拉宫门票+珍宝馆+大昭寺门票+布宫大昭寺团队导游讲解",
                "price": "¥ 288"
            }]
        }, {
            "pic": "http://dimg02.c-ctrip.com/images/tg/630/652/837/d46459ec715a40419642886f40ff52a4_C_186_105.jpg",
            "name": "尼木吞巴",
            "link": "/dest/t1409308.html",
            "addressName": "【西藏·拉萨】",
            "rate": "",
            "detailedAddress": "西藏拉萨市尼木县吞巴乡。",
            "exercise": "特色：因有不杀生之功德，尼木藏香是西藏的敬佛上品，并享誉海内外。",
            "grade": "0.0",
            "gradeDetail": "0.0分(0人点评)",
            "commentLink": "/dest/t1409308.html",
            "tickets": [{
                "num": "单票",
                "detail": "尼木吞巴景区成人票",
                "price": "¥ 150"
            }]
        }, {
            "pic": "http://dimg05.c-ctrip.com/images/tg/630/286/698/0b8e9fa873e54e249a37fc9cd031753c_C_186_105.jpg",
            "name": "西藏印象《幸福在路上》演出",
            "link": "/dest/t1409307.html",
            "addressName": "【西藏·拉萨】",
            "rate": "",
            "detailedAddress": "拉萨市太阳岛民族文化艺术宫。",
            "exercise": "特色： 唐卡式歌舞诗是国内也是世界首创。",
            "grade": "2.5",
            "gradeDetail": "2.5分(2人点评)",
            "commentLink": "/dest/t1409307.html",
            "tickets": [{
                "num": "单票",
                "detail": "拉萨幸福在路上演出B票",
                "price": "¥ 240"
            }, {
                "num": "单票",
                "detail": "拉萨幸福在路上演出A票",
                "price": "¥ 340"
            }]
        }, {
            "pic": "http://dimg02.c-ctrip.com/images/tg/013/574/783/7f2e777227864594a9b6fae82a63dd0c_C_186_105.jpg",
            "name": "纳木错",
            "link": "/dest/t11793.html",
            "addressName": "【西藏·当雄】",
            "rate": "",
            "detailedAddress": "西藏自治区拉萨市当雄县。",
            "exercise": "特色：心中的爱有多深，面对纳木错时，这里的湖水就有多深。",
            "grade": "4.6",
            "gradeDetail": "4.6分(94人点评)",
            "commentLink": "/dest/t11793.html",
            "tickets": [{
                "num": "单票",
                "detail": "纳木错景区成人票（淡季）",
                "price": "¥ 58"
            }, {
                "num": "单票",
                "detail": "纳木错直通车成人票（只含车费）",
                "price": "¥ 128"
            }]
        }]
    },
}
