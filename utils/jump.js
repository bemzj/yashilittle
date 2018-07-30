/**
 * URL跳转
 * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
 */
function navigateTo(url) {
    wx.navigateTo({
        url: url
    })
}
/**
 * 关闭当前页面，跳转到应用内的某个页面。
 */
function redirectTo(url) {
    wx.redirectTo({
        url: url
    })
}
/**
 * 关闭所有页面，打开到应用内的某个页面。
 */
function reLaunch(url) {
    wx.reLaunch({
        url: url
    })
}
/**
 * 跳转首页
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * {
	  	"tabBar": {
		    "list": [
		    {
			    "pagePath": "index",
			    "text": "首页"
		    },
		    {
			    "pagePath": "other",
			    "text": "其他"
		    }]
	  	}
	}
 */
function switchTab(url) {
    wx.switchTab({
        url: url
    })
}
/**
 * ​关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
 */
function navigateBack(num = 1) {
    wx.navigateBack({
        delta: num
    })
}
module.exports = {
    navigateTo: navigateTo,
    redirectTo: redirectTo,
    reLaunch: reLaunch,
    switchTab: switchTab,
    navigateBack: navigateBack,
}