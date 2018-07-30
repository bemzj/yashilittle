//app.js
const {
    api,
    config
} = require('./utils/config.js');
App({
    // 小程序执行时触发函数
    onLaunch: function(options) {
        var _this = this;
        // console.log(options);
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                this.globalData.code = res.code;
                //获取本地缓存id值
                wx.getStorage({
                    key: 'id',
                    success: function(res) {
                        _this.getUserId();
                    },
                    fail: function(res) {
                        _this.getUserId();
                    }
                })
            }
        })
        //获取本地缓存id值
        wx.getStorage({
            key: 'userInfo',
            success: function(res) {
                _this.globalData.userInfo = res.data;
            },
            fail: function(res) {}
        })
        // 获取用户信息 该功能已被微信修改
        // wx.getSetting({
        //     success: res => {
        //         if (res.authSetting['scope.userInfo']) {
        //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //             wx.getUserInfo({
        //                 success: res => {
        //                     // 可以将 res 发送给后台解码出 unionId
        //                     _this.globalData.userInfo = res.userInfo;
        //                     // 定时器，解决同步执行函数的bug 登录与传送用户信息同步执行
        //                     setTimeout(function() {
        //                         //把用户的昵称头像传到后台保存
        //                         wx.request({
        //                             url: config.route + api.SmallUserInfo,
        //                             data: {
        //                                 nickname: _this.globalData.userInfo.nickName,
        //                                 avatarurl: _this.globalData.userInfo.avatarUrl,
        //                                 id: _this.globalData.id,
        //                                 token: config.token,
        //                             },
        //                             success: function(res) {
        //                                 // console.log('login:' + res.data.id);
        //                             }
        //                         })
        //                     }, 500)
        //                     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //                     // 所以此处加入 callback 以防止这种情况
        //                     if (this.userInfoReadyCallback) {
        //                         this.userInfoReadyCallback(res)
        //                     }
        //                 },
        //                 fail: function(res) {}
        //             })
        //         }
        //     }
        // })
    },
    globalData: {
        userInfo: null
    },
    // onShow:function(){
    // },
    getUserId: function() {
        var _this = this;
        wx.request({
            url: config.route + api.SmallLogin,
            data: {
                code: _this.globalData.code,
                token: config.token
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                //把后台传过来的id存入缓存
                wx.setStorage({
                    key: "id",
                    data: res.data.id
                })
                _this.globalData.id = res.data.id;
                // console.log('userId:' + _this.globalData.id);
            }
        })
    },
})