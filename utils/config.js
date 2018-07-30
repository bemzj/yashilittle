const config = {
    route: 'https://sbstc.hengdikeji.com/',
    routeImg: 'https://sbstc.hengdikeji.com/public',
    token: 'safdsf2342%^@#@#@#ss`1`ljkjlkl&&888**',
    share_msg: 'SBSTC小名片',
    share_image: '',
}
const api = {
    SmallLogin: 'small/wechat/index', // 登录
    SmallUserInfo: 'small/wechat/getuserinfo', // 昵称头像
    upload: 'small/UpFiles/upload', // 上传图片

    recognition: 'small/index/cardrecognition', // 图片识别
    getUserCard: 'small/index/getUserCard', // 获取用户的名片信息
    addUserCard: 'small/index/addUserCard', // 查看、修改用户的名片
    addMyCard: 'small/index/addMyCard', // 生成名片、保存用户的名片
    delMycard: 'small/index/delMycard', // 生成名片、保存用户的名片
}
module.exports = {
    api,
    config,
}