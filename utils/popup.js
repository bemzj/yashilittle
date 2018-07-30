/**
 * 显示消息提示框
 * success	显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值	
 * loading	显示加载图标，此时 title 文本最多显示 7 个汉字长度。	
 * none	不显示图标，此时 title 文本最多可显示两行  
 */
function showToast(content, type = 'none', time = 2000) {
    wx.showToast({
        title: content,
        icon: type,
        duration: time
    })
}
/**
 * 隐藏消息提示框
 */
function hideToast() {
    wx.hideToast()
}
/**
 * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
 */
function showLoading(content) {
    wx.showLoading({
        title: content,
    })
}
/**
 * 隐藏 loading 提示框
 */
function hideLoading() {
    wx.hideLoading()
    // setTimeout(function(){
    //   	wx.hideLoading()
    // },2000)
}
/**
 * ​显示模态弹窗
 */
function showModel(title, content, func) {
    wx.showModal({
        title: title,
        content: content,
        success: function(res) {
            func(res);
            // if (res.confirm) {
            // 	console.log('用户点击确定')
            // } else if (res.cancel) {
            // 	console.log('用户点击取消')
            // }
        }
    })
}
module.exports = {
    showToast: showToast,
    hideToast: hideToast,
    showLoading: showLoading,
    hideToast: hideToast,
    showLoading: showLoading,
    hideLoading: hideLoading,
    showModel: showModel,
}