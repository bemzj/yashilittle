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
        cardList: [],
        tips:false
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

        wx.showLoading({
          title: '加载中',
        });

        // console.log(app.globalData);
        var _this = this;
        setTimeout(function(){
          _this.setData({
            tips: true
          });
          setTimeout(function () {
            _this.setData({
              tips: false
            });

          }, 3000);
        },500);
        
        var url = config.route + api.getUserCard;
        var data = {
            uid: app.globalData.id,
        };
        network.GET(url, {
            params: data,
            success: function(res) {
                wx.hideLoading();
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
    show:function(e){
      var _this = this;
      wx.showActionSheet({
        itemList: ['删除'],
        success: function (res) {
          var url = config.route + api.delMycard,
            data = {
              uid: app.globalData.id,
              id: e.currentTarget.dataset.vid
            };
            
          network.GET(url, {
            params: data,
            success: function (res) {
              var myres = res.data;
              console.log(res);
              if (myres.status==1)
              {
                network.GET(url, {
                  params: data,
                  success: function (res) {
                    wx.showToast({
                      title: myres.msg
                    });
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
                  fail: function () {
                    //失败后的逻辑  
                    wx.showToast({
                      title: "网络错误"
                    });
                  },
                })
              }else{
                wx.showToast({
                  title: myres.msg
                });
              }
              
            },
            fail: function () {
              //失败后的逻辑  
            },
          })
        },
        fail: function (res) {

        }
      });
    },
    uploadCard: function() {
        wx.showLoading({
          title: '加载中'
        })
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
    onShareAppMessage: function() {},
    //保存到联系人
    download:function(e){
      var _this = this;
      var data = _this.data.cardList[e.currentTarget.dataset.index];
      wx.addPhoneContact({
        nickName: data.name,
        firstName: data.name,
        mobilePhoneNumber: data.phone,
        organization: data.company,
        title:data.position,
        workAddressPostalCode: data.mail,
        workAddressStreet: data.address,
        success:function(){
          wx.showToast({
            title: '保存成功！',
          })
        },
        fail:function(){
          wx.showToast({
            title: '保存失败！',
          })
        }
      })
      console.log(e);
      console.log();
    }
})