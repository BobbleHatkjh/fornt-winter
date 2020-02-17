import Vue from 'vue'
import Vuex from 'vuex'


import test_img from "../assets/login_registor_bac.jpg";
import sss from "../assets/dibai.jpg";

Vue.use(Vuex);



const store = new Vuex.Store({

    // 定义状态
    state: {
        Login: 'true',  // 登录状态
        home_turn: 'book',    // home active的值  #book orders my#
        page_change_status: '',   // 页面切换模式  #next back#

        date_origin: {
            date_num: 1,
            in: {
                month: 0,
                date: 0,
                week: "四"
            },
            out: {
                month: 0,
                date: 0,
                week: "日"
            }
        },  // 初始日期

        data_hotel_list: [  // 酒店列表
            {
                id: 12322,  // x
                hotel_img: [test_img, sss],
                hotel_name: '汉庭天津大港店',
                rate: 5.0,  // 评分
                tag: ['干净整洁', '经济型', '2015年9月开业'],  // tag
                distance: 8.7,  // 距离
                detail_position: '学院路99号',  // 具体位置
                like: 1287,  // 喜欢数
                comment: 890,   // 评论数
                low_price: 227  // 最低价格
            },
            {
                id: 12323,
                hotel_img: [test_img,sss, 'https://www.baidu.com/img/bd_logo1.png?where=super'],
                hotel_name: '汉庭廊坊高铁站店',
                rate: 4.8,
                tag: ['干净整洁', '经济型', '2015年9月开业'],
                distance: 13.2,
                detail_position: '行宫大街52号',
                like: 687,
                comment: 1490,
                low_price: 169
            },
            {
                id: 12324,
                hotel_img: [sss, 'https://www.baidu.com/img/bd_logo1.png?where=super'],
                hotel_name: '汉庭我也不知道在哪店',
                rate: 4.5,
                tag: ['性价比高', '经济型', '2015年9月开业'],
                distance: 0.78,
                detail_position: '解放南路',
                like: 87,
                comment: 56,
                low_price: 105
            },
            {
                id: 12325,
                hotel_img: [sss, 'https://www.baidu.com/img/bd_logo1.png?where=super'],
                hotel_name: '测试测试测试店',
                rate: 2.4,
                tag: ['性价比高', '经济型', '2015年9月开业'],
                distance: 14.2,
                detail_position: '红旗南路',
                like: 8,
                comment: 356,
                low_price: 135
            }
        ],


        data_hotel_info: {  // 酒店详细信息
            id: 12322,  // id
            hotel_img: [test_img, sss],
            hotel_name: '汉庭天津大港店',
            rate: 4.8,  // 评分
            tag: ['干净整洁', '经济型', '2015年9月开业'],  // tag
            distance: 8.7,  // 距离
            detail_position: '学院路99号',  // 具体位置
            like: 1287,  // 喜欢数
            comment: 890,   // 评论数
            low_price: 227,   // 最低价格
            type_list: [   // 类型表
                {
                    type_img: [test_img, sss],
                    type_name: '大床房',
                    type_note: '19㎡ 无窗 大床',
                    low_price: '204',
                    room_list:[
                        {
                            id: 1334,
                            name: '不含早餐',
                            price: 204
                        },
                        {
                            id: 1335,
                            name: '含两份早餐',
                            price: 227
                        }
                    ]
                },
                {
                    type_img: [sss, 'https://www.baidu.com/img/bd_logo1.png?where=super', sss],
                    type_name: '精品大床房',
                    type_note: '21㎡ 有窗 大床',
                    low_price: '275',
                    room_list:[
                        {
                            id: 1336,
                            name: '不含早餐',
                            price: 275
                        },
                        {
                            id: 1337,
                            name: '含两份早餐',
                            price: 297
                        },
                        {
                            id: 1338,
                            name: '四套精品卫浴',
                            price: 315
                        }
                    ]
                },
                {
                    type_img: [test_img, sss],
                    type_name: '精品双床房',
                    type_note: '23㎡ 有窗 双床',
                    low_price: '266',
                    room_list:[
                        {
                            id: 1339,
                            name: '不含早餐',
                            price: 275
                        },
                        {
                            id: 1340,
                            name: '含两份早餐',
                            price: 297
                        },
                        {
                            id: 1341,
                            name: '四套精品卫浴',
                            price: 315
                        }
                    ]
                },
                {
                    type_img: [test_img, sss],
                    type_name: '榻榻米大床房',
                    type_note: '27㎡ 有窗 大床',
                    low_price: '362',
                    room_list:[
                        {
                            id: 1342,
                            name: '不含早餐',
                            price: 275
                        },
                        {
                            id: 1343,
                            name: '含两份早餐',
                            price: 297
                        },
                        {
                            id: 1344,
                            name: '四套精品卫浴',
                            price: 315
                        }
                    ]
                },
                {
                    type_img: [test_img, sss],
                    type_name: '森林狂欢',
                    type_note: '25㎡ 有窗 大床',
                    low_price: '396',
                    room_list:[
                        {
                            id: 1345,
                            name: '不含早餐',
                            price: 275
                        },
                        {
                            id: 1346,
                            name: '含两份早餐',
                            price: 297
                        },
                        {
                            id: 1347,
                            name: '四套精品卫浴',
                            price: 315
                        }
                    ]
                }
            ],
        },





    },

});


export default store
