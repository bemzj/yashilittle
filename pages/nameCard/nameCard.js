// pages/nameCard/nameCard.js
var app = getApp();
const {
    api,
    config
} = require('../../utils/config.js')
const network = require("../../utils/network.js")
const popup = require('../../utils/popup.js')
const jump = require('../../utils/jump.js')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cardList: [{
            name: '王志恒',
            company: '广州恒帝科技信息有限公司',
            phone: '137829837498',
            email: 'jieudngsg@163.com',
            address: '广东省广州市海珠区琶洲商业广场11栋',
            show: false
        }, {
            name: '王志恒',
            company: '广州恒帝科技信息有限公司',
            phone: '137829837498',
            email: 'jieudngsg@163.com',
            address: '广东省广州市海珠区琶洲商业广场11栋',
            show: false
        }, {
            name: '王志恒',
            company: '广州恒帝科技信息有限公司',
            phone: '137829837498',
            email: 'jieudngsg@163.com',
            address: '广东省广州市海珠区琶洲商业广场11栋',
            show: false
        }, {
            name: '王志恒',
            company: '广州恒帝科技信息有限公司',
            phone: '137829837498',
            email: 'jieudngsg@163.com',
            address: '广东省广州市海珠区琶洲商业广场11栋',
            show: false
        }, {
            name: '王志恒',
            company: '广州恒帝科技信息有限公司',
            phone: '137829837498',
            email: 'jieudngsg@163.com',
            address: '广东省广州市海珠区琶洲商业广场11栋',
            show: false
        }, {
            name: '王志恒',
            company: '广州恒帝科技信息有限公司',
            phone: '137829837498',
            email: 'jieudngsg@163.com',
            address: '广东省广州市海珠区琶洲商业广场11栋',
            show: false
        }, {
            name: '王志恒',
            company: '广州恒帝科技信息有限公司',
            phone: '137829837498',
            email: 'jieudngsg@163.com',
            address: '广东省广州市海珠区琶洲商业广场11栋',
            show: false
        }]
    },
    click: function(event) {
        var _this = this;
        let arr = _this.data.cardList,
            index = event.currentTarget.dataset.index;
        if (_this.data.cardList[index].show == false) {
            arr[index].show = true;
            _this.setData({
                cardList: arr
            })
        } else {
            arr[index].show = false;
            _this.setData({
                cardList: arr
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        // console.log(app.globalData);
        var _this = this;
        var url = config.route + api.getUserCard;
        var data = {
            uid: app.globalData.id,
        };
        network.GET(url, {
            params: data,
            success: function(res) {
                if (res.data.length > 0) {
                    _this.setData({
                        cardList: res.data
                    });
                } else {
                    _this.setData({
                        cardList: []
                    });
                }
                //拿到解密后的数据，进行代码逻辑
            },
            fail: function() {
                //失败后的逻辑  
            },
        })
    },
    delCard: function(e) {
        // 名片的id
        // console.log(e.target.dataset.id);
        var _this = this;
        var url = config.route + api.delMycard,
            data = {
                uid: app.globalData.id,
                id: e.target.dataset.id
            };
        network.GET(url, {
            params: data,
            success: function(res) {
                // 对象不能直接用length计算长度
                var arr = Object.keys(res.data);
                if (arr.length > 0) {
                    popup.showToast(res.data.msg, 'success');
                    var info = _this.data.cardList;
                    var newInfo = [];
                    for (var i = 0; i < info.length; i++) {
                        if (info[i].id != e.target.dataset.id) {
                            newInfo.push(info[i]);
                        }
                    }
                    // console.log(newInfo);
                    _this.setData({
                        cardList: newInfo
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
    uploadCard: function() {
        var _this = this;
        wx.chooseImage({
            count: 1, // 默认9
            // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res) {
                var tempFilePaths = res.tempFilePaths;
                var data = {
                    path: tempFilePaths[0]
                };
                network.uploadFile({
                    params: data,
                    success: function(res) {
                        // console.log(res.data);
                        res.data = JSON.parse(res.data);
                        // res.data.msg
                        if (res.data.status == 1) {
                            popup.showToast('图片上传成功', 'success');
                            wx.setStorage({
                                key: "phoneUrl",
                                data: res.data.url
                            })
                            // 返回首页
                            setTimeout(function() {
                                jump.navigateTo('/pages/upLoading/upLoading');
                            }, 1000);
                        } else {
                            popup.showToast('图片上传失败');
                        }
                    },
                    fail: function() {
                        //失败后的逻辑  
                    },
                });
            }
        })
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
    onShareAppMessage: function() {}
})