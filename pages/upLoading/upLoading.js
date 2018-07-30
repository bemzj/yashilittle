// pages/upLoading/upLoading.js
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
        detailData: {
            name: '',
            company: '',
            phone: '',
            mail: '',
            address: '',
            area: '地址：',
            position:''
        },
        imgPop: false,
        phoneUrl: '',
        routeImg: config.routeImg,
        uploadBtn: false,
        recognitionPhone: [],
        alltext: [],
        wy: {},
        x: [],
        y: []
    },
    copy: function(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.collect,
            success: function(res) {}
        })
    },
    //设置名字
    setName: function(e) {
        var _this = this;
        var details = _this.data.detailData;
        wx.getClipboardData({
            success: function(res) {
                details.name = res.data;
                _this.setData({
                    detailData: details
                })
            }
        })
    },
    //设置公司名字
    setCompany: function(e) {
        var _this = this;
        var details = _this.data.detailData;
        wx.getClipboardData({
            success: function(res) {
                details.company = res.data;
                _this.setData({
                    detailData: details
                })
            }
        })
    },
    //设置职位
    setPosition: function (e) {
      var _this = this;
      var details = _this.data.detailData;
      wx.getClipboardData({
        success: function (res) {
          details.position = res.data;
          _this.setData({
            detailData: details
          })
        }
      })
    },
    //设置手机号码
    setPhone: function(e) {
        var _this = this;
        var details = _this.data.detailData;
        wx.getClipboardData({
            success: function(res) {
                details.phone = res.data;
                _this.setData({
                    detailData: details
                })
            }
        })
    },
    //设置邮箱
    setEmail: function(e) {
        var _this = this;
        var details = _this.data.detailData;
        wx.getClipboardData({
            success: function(res) {
                details.mail = res.data;
                _this.setData({
                    detailData: details
                })
            }
        })
    },
    //设置地址
    setAddress: function(e) {
        var _this = this;
        var details = _this.data.detailData;
        console.log(e);
        wx.getClipboardData({
            success: function(res) {
                details.address = res.data;
                _this.setData({
                    detailData: details
                })
            }
        })
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
    clearPhone: function() {
        var _this = this;
        wx.removeStorageSync('phoneUrl')
        _this.setData({
            phoneUrl: '',
            uploadBtn: true,
            alltext: [],
            imgPop: false
        });
    },
    inputName: function(e) {
        var _this = this;
        var val = e.detail.value;
        var detail = _this.data.detailData;
        detail.name = val;
        _this.setData({
            detailData: detail
        });
    },
    inputPosition: function (e) {
      var _this = this;
      var val = e.detail.value;
      var detail = _this.data.detailData;
      detail.position = val;
      _this.setData({
        detailData: detail
      });
    },
    inputCompany: function(e) {
        var _this = this;
        var val = e.detail.value;
        var detail = _this.data.detailData;
        detail.company = val;
        _this.setData({
            detailData: detail
        });
    },
    inputPhone: function(e) {
        var _this = this;
        var val = e.detail.value;
        var detail = _this.data.detailData;
        detail.phone = val;
        _this.setData({
            detailData: detail
        });
    },
    inputEmail: function(e) {
        var _this = this;
        var val = e.detail.value;
        var detail = _this.data.detailData;
        detail.mail = val;
        _this.setData({
            detailData: detail
        });
    },
    inputAddress: function(e) {
        var _this = this;
        var val = e.detail.value;
        var detail = _this.data.detailData;
        detail.address = val;
        _this.setData({
            detailData: detail
        });
    },
    onShow: function() {
        var _this = this;
        //获取本地缓存id值
        wx.getStorage({
            key: 'phoneUrl',
            success: function(res) {
                console.log(res);
                _this.setData({
                    phoneUrl: res.data
                });
            },
            fail: function(res) {
                _this.setData({
                    phoneUrl: ''
                });
            }
        });
        wx.getStorage({
            key: 'phoneWy',
            success: function(res) {
                _this.setData({
                    wy: res.data
                });
            },
            fail: function(res) {
                var _this = this;
                _this.setData({
                    wy: res.data
                });
            }
        });
        // return;
        setTimeout(function() {
            if (_this.data.phoneUrl != '') {
                // 调用图片识别接口
                wx.showLoading({
                    title: '图片分析中'
                });
                console.log(_this.data.phoneUrl);
                var url = config.route + api.recognition,
                    datas = {};
                datas.url = config.routeImg + _this.data.phoneUrl;
                console.log(datas.url);
                wx.request({
                    url: datas.url,
                    method: 'GET',
                    responseType: 'arraybuffer',
                    success: function(res) {
                        let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
                        base64 = 'data:image/jpeg;base64,' + base64　 //不加上这串字符，在页面无法显示的哦  
                        datas.url = base64;
                        network.POST(url, {
                            params: datas,
                            success: function(res) {
                                console.log(JSON.parse(res.data.outputs["0"].outputValue.dataValue));
                                var allDate = JSON.parse(res.data.outputs["0"].outputValue.dataValue);
                                var mydata = {
                                    name: allDate.name,
                                    company: allDate.company["0"],
                                    phone: allDate.tel_cell["0"],
                                    mail: allDate.email["0"],
                                    address: allDate.addr["0"],
                                    position: allDate.department[0],
                                    area: '地址：'
                                }
                                _this.setData({
                                    alltext: allDate,
                                    imgPop: true,
                                    detailData: mydata,
                                    uploadBtn: false
                                });
                                wx.hideLoading();
                                wx.showToast({
                                    title: '图片解析成功',
                                    icon: 'success',
                                    duration: 2000
                                });
                            },
                            fail: function() {
                                //失败后的逻辑  
                            },
                        })
                    }
                });
            } else {
                _this.setData({
                    uploadBtn: true
                });
            }
        }, 1000);
    },
    // 提交按钮，保存名片信息
    addMyCard: function() {
        var _this = this,
            url = config.route + api.addMyCard,
            datas = _this.data.detailData;
        datas.type = 'addCrad';
        datas.uid = app.globalData.id;
        network.POST(url, {
            params: datas,
            success: function(res) {
                if (res.data.status == 1) {
                    popup.showToast(res.data.msg, 'success');
                    // 返回首页
                    setTimeout(function() {
                        jump.redirectTo('/pages/nameCard/nameCard');
                    }, 3000);
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
    // 上传图片
    pnoneUpload: function() {
        var _this = this;
        wx.chooseImage({
            count: 1, // 默认9
            // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            sizeType: ['compressed'],
            // sourceType: ['album'],
            success: function(res) {
                var tempFilePaths = res.tempFilePaths;
                console.log(111);
                var data = {
                    path: tempFilePaths[0]
                };
                wx.getImageInfo({
                    src: tempFilePaths[0],
                    success: function(res) {}
                })
                network.uploadFile({
                    params: data,
                    success: function(res) {
                        res.data = JSON.parse(res.data);
                        // res.data.msg
                        if (res.data.status == 1) {
                            popup.showToast('图片上传成功', 'success');
                            wx.setStorage({
                                key: "phoneUrl",
                                data: res.data.url
                            })
                            _this.setData({
                                phoneUrl: res.data.url,
                                uploadBtn: true
                            });
                            // 请求图片识别接口
                        } else {
                            popup.showToast('图片上传失败');
                            _this.setData({
                                uploadBtn: true
                            });
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