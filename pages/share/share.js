// pages/create/create.js
const {
    api,
    config
} = require('../../utils/config.js')
const network = require("../../utils/network.js")
const popup = require('../../utils/popup.js')
const jump = require('../../utils/jump.js')
const app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        hasData: false,
        all: {
            company: '',
            name: '',
            phone: '',
            mail: '',
            area: {
                areaOne: '',
                areaTwo: ''
            },
            address: '',
            qrcode: ''
        },
        share: false,
        shareUser: 0,
        hostUrl: config.routeImg,
        region: [],
        addressDetail: ''
    },
    edtMyCard: function() {
        var _this = this;
        _this.setData({
            hasData: false
        });
    },
    // 添加、修改个人名片
    edtCard: function(e) {
        var _this = this,
            datas = e.detail.value;
        if (_this.data.all.id != null) {
            datas.id = _this.data.all.id;
        }
        datas.uid = app.globalData.id;
        datas.area = _this.data.region.join(' ');
        var url = config.route + api.addUserCard;
        network.POST(url, {
            params: datas,
            success: function(res) {
                if (res.data.status == 1) {
                    popup.showToast(res.data.msg, 'success');
                    var info = datas;
                    delete info.uid;
                    delete info.token;
                    info.area = {
                        'areaOne': info.area.split(' '),
                        'areaTwo': info.area
                    };
                    if (res.data.qrcode != null) {
                        info.qrcode = res.data.qrcode;
                    } else {
                        info.qrcode = _this.data.all.qrcode;
                    }
                    _this.setData({
                        hasData: true,
                        all: info
                    });
                } else {
                    popup.showToast(res.data.msg);
                }
            },
            fail: function() {
                //失败后的逻辑  
            },
        })
    },
    // 通过分享进来，保存好友的名片
    addMyCard: function() {
        var _this = this,
            url = config.route + api.addMyCard,
            datas = {
                type: 'share',
                fieldId: _this.data.shareUser,
                id: app.globalData.id
            };
        // console.log(datas);
        network.POST(url, {
            params: datas,
            success: function(res) {
                // res.data = JSON.parse(res.data);
                // console.log(res.data);
                if (res.data.status == 1) {
                    popup.showToast(res.data.msg, 'success');
                    // 返回首页
                    setTimeout(function() {
                        jump.redirectTo('/pages/index/index');
                    }, 8000);
                } else {
                    if (res.data.logion == 1) {
                        // 数据库还没存在用户信息
                    }
                    popup.showToast(res.data.msg);
                }
            },
            fail: function() {
                //失败后的逻辑  
            },
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var _this = this;
        // console.log(options);
        if (options.type == 'share') {
            _this.setData({
                share: true,
                shareUser: options.id
            });
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        // 获取地理位置
        var self = this,
            url = config.route + api.addUserCard,
            data = {
                uid: app.globalData.id,
                share: 0
            };
        //设置标题
        wx.setNavigationBarTitle({
            title: '我的名片'
        });
        if (self.data.share == true) {
            data.uid = self.data.shareUser;
            data.share = 1;
        }
        network.GET(url, {
            params: data,
            success: function(res) {
                // 对象不能直接用length计算长度
                var arr = Object.keys(res.data);
                if (arr.length > 0) {
                    var area = res.data.area.areaTwo.split(' ');
                    self.setData({
                        all: res.data,
                        hasData: true,
                        region: area
                    });
                } else {
                    self.setData({
                        all: {},
                        hasData: false
                    });
                }
            },
            fail: function() {
                //失败后的逻辑  
            },
        })
        setTimeout(function() {
            if (self.data.region.length == 0) {
                wx.getLocation({
                    type: 'wgs84',
                    success: function(res) {
                        // success    
                        var longitude = res.longitude
                        var latitude = res.latitude
                        wx.request({
                            url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=Z3BBZ-C563U-MDPVI-BSXTL-ZB2W5-ZRBHU&get_poi=0',
                            data: {},
                            header: {
                                'Content-Type': 'application/json'
                            },
                            success: function(res) {
                                // console.log(res);
                                var address = [];
                                address.push(res.data.result.ad_info.province);
                                address.push(res.data.result.ad_info.city);
                                address.push(res.data.result.ad_info.district);
                                var addressD = res.data.result.address_component.street_number;
                                self.setData({
                                    region: address,
                                    addressDetail: addressD
                                });
                            },
                            fail: function() {
                                page.setData({
                                    currentCity: "获取定位失败"
                                });
                            },
                        });
                    },
                    fail: function() {
                        wx.showModal({
                            title: '是否要打开设置页面重新授权',
                            content: '请到小程序设置中授权获取位置',
                            confirmText: '去设置',
                            confirmColor: '#ea3424',
                            success: function(res) {
                                if (res.confirm) {
                                    wx.openSetting({
                                        success: (res) => {
                                            res.authSetting = {
                                                "scope.userLocation": true
                                            }
                                        }
                                    })
                                } else if (res.cancel) {}
                            }
                        })
                    }
                });
            }
        }, 1000);
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function(res) {
        return {
            title: app.globalData.userInfo.nickName + '的小名片',
            path: 'pages/create/create?id=' + app.globalData.id + '&type=share',
        }
    },
    bindRegionChange: function(e) {
        this.setData({
            region: e.detail.value
        })
    }
})