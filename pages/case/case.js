// pages/case/case.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        topBj: 'http://www.hengdikeji.com/home/img/bj01.png',
        logo: 'http://www.hengdikeji.com/home/img/logo01.png',
        navIndex: 0,
        nav: [{
            navMame: '全部',
            classify: [{
                cName: '全部',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例1',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例1',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '邀请函',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '产品推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '投票',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '小游戏',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '品牌推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '促销活动',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }]
        }, {
            navMame: 'H5案例',
            classify: [{
                cName: '全部2',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '邀请函',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '产品推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '投票',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '小游戏',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '品牌推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '促销活动',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }]
        }, {
            navMame: '小程序',
            classify: [{
                cName: '全部2',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '邀请函',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '产品推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '投票',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '小游戏',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '品牌推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '促销活动',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }]
        }, {
            navMame: '微商城',
            classify: [{
                cName: '全部2',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '邀请函',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '产品推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '投票',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '小游戏',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '品牌推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '促销活动',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }]
        }, {
            navMame: '网页',
            classify: [{
                cName: '全部2',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '邀请函',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '产品推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '投票',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '小游戏',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '品牌推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '促销活动',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }]
        }, {
            navMame: '移动app',
            classify: [{
                cName: '全部2',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '邀请函',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '产品推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '投票',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '小游戏',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季1',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '品牌推广',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季7',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季8',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }, {
                cName: '促销活动',
                listData: [{
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季9',
                    look: 6785,
                    collect: 2345,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }, {
                    imgUrl: 'http://www.hengdikeji.com/home/img/img01.png',
                    url: '../../pages/caseDetails/caseDetails',
                    name: '好太太换购季10',
                    look: 6000,
                    collect: 2100,
                    firstName: 'H5案例',
                    secondName: '产品-产品推广'
                }]
            }]
        }],
        //小分类数据
        classifyIndex: 0,
        inputIndex: 0
    },
    inputOut: function(e) {
        this.setData({
            inputIndex: 1
        });
    },
    inputIn: function(e) {
        this.setData({
            inputIndex: 0
        });
    },
    //大分类
    navClass: function(e) {
        this.setData({
            navIndex: e.currentTarget.dataset.index,
            classifyIndex: 0
        });
    },
    //小分类
    classifyClass: function(e) {
        this.setData({
            classifyIndex: e.currentTarget.dataset.index
        });
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
    onShow: function() {},
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
/**
 * 生命周期函数--监听页面加载
 */