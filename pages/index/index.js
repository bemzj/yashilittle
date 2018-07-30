//index.js
//获取应用实例
const {
    api,
    config
} = require('../../utils/config.js')
const network = require("../../utils/network.js")
const popup = require('../../utils/popup.js')
const jump = require('../../utils/jump.js')
const app = getApp()
Page({
    data: {
        all: {
            company: '',
            name: '',
            phone: '',
            mail: '',
            area: {
                areaOne: ''
            },
            address: '',
        },
        userInfo: {},
        getStatus: true
    },
    //事件处理函数
    // 打开文件夹上传图片
    // bindFile: function() {
    //     var _this = this;
    //     wx.chooseImage({
    //         count: 1, // 默认9
    //         // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //         // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //         sizeType: ['compressed'],
    //         sourceType: ['album'],
    //         success: function(res) {
    //             var tempFilePaths = res.tempFilePaths;
    //             console.log(tempFilePaths);
    //             var data = {
    //                 path: tempFilePaths[0]
    //             };
    //             network.uploadFile({
    //                 params: data,
    //                 success: function(res) {
    //                     console.log(res.data);
    //                     res.data = JSON.parse(res.data);
    //                     // res.data.msg
    //                     if (res.data.status == 1) {
    //                         popup.showToast('图片上传成功', 'success');
    //                         wx.setStorage({
    //                             key: "phoneUrl",
    //                             data: res.data.url
    //                         })
    //                         // 返回首页
    //                         setTimeout(function() {
    //                             jump.redirectTo('/pages/upLoading/upLoading');
    //                         }, 1000);
    //                     } else {
    //                         popup.showToast('图片上传失败');
    //                     }
    //                 },
    //                 fail: function() {
    //                     //失败后的逻辑  
    //                 },
    //             });
    //         }
    //     })
    // },
    // 打开相机拍照上传图片
    bindCamera: function() {
        var _this = this;
        
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res) {
                var tempFilePaths = res.tempFilePaths;
                var data = {
                    path: tempFilePaths[0]
                };
                wx.showLoading({
                  title: '加载中',
                  mask:true
                })
                network.uploadFile({
                    params: data,
                    success: function(res) {
                        console.log(res.data);
                        res.data = JSON.parse(res.data);
                        var wy = {
                            w: res.data.width,
                            h: res.data.height
                        };
                        wx.setStorage({
                            key: "phoneWy",
                            data: wy,
                        });
                        // res.data.msg
                        if (res.data.status == 1) {
                            wx.hideLoading();
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
    bindMy: function() {
        wx.navigateTo({
            url: '../nameCard/nameCard'
        })
    },
    myCard: function() {
        wx.navigateTo({
            url: '../create/create'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                getStatus: false
            })
        }
    },
    onShareAppMessage: function(e) {

    },
    getUserInfo: function(e) {
        console.log(e.detail.errMsg);
        if (e.detail.errMsg == 'getUserInfo:ok') {
            app.globalData.userInfo = e.detail.userInfo;
            // 把用户信息存入缓存
            wx.setStorage({
                key: "userInfo",
                data: e.detail.userInfo
            })
            this.setData({
                userInfo: e.detail.userInfo,
                getStatus: false
            })
            setTimeout(function() {
                //把用户的昵称头像传到后台保存
                wx.request({
                    url: config.route + api.SmallUserInfo,
                    data: {
                        nickname: app.globalData.userInfo.nickName,
                        avatarurl: app.globalData.userInfo.avatarUrl,
                        id: app.globalData.id,
                        token: config.token,
                    },
                    success: function(res) {
                        // console.log('login:' + res.data.id);
                    }
                })
            }, 500)
        }
    },
    onShow: function() {
        var _this = this;
        wx.showLoading({
          title: '加载中',
          mask:true
        });
        setTimeout(function() {
            var url = config.route + api.addUserCard,
                data = {
                    uid: app.globalData.id,
                };
            network.GET(url, {
                params: data,
                success: function(res) {
                    // 对象不能直接用length计算长度
                    var arr = Object.keys(res.data);
                    
                    if (arr.length > 0) {
                        _this.setData({
                            all: res.data
                        });
                    } else {
                        _this.setData({
                            all: {}
                        });
                    }
                    wx.hideLoading();
                },
                fail: function() {
                    //失败后的逻辑  
                },
            })
        }, 1000);
    }
})