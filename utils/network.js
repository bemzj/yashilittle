const {
    api,
    config
} = require('./config.js');
var requestHandler = {
    params: {},
    success: function(res) {
        // success  
    },
    fail: function() {
        // fail  
    },
}
//GET请求  
function GET(url, requestHandler) {
    request(url, 'GET', requestHandler);
}
//POST请求  
function POST(url, requestHandler) {
    request(url, 'POST', requestHandler);
}

function request(url, method, requestHandler) {
    //注意：可以对params加密等处理  
    var params = requestHandler.params;
    params.token = config.token;
    wx.request({
        url: url,
        data: params,
        method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
        // header: {}, // 设置请求的 header  
        success: function(res) {
            //注意：可以对参数解密等处理  
            requestHandler.success(res)
        },
        fail: function() {
            requestHandler.fail()
        },
        complete: function() {
            // complete  
        }
    })
}
// 上传单个图片、文件
function uploadFile(requestHandler, name = 'file') {
    wx.uploadFile({
        url: config.route + api.upload,
        filePath: requestHandler.params.path, // 要上传文件资源的路径
        name: name,
        // HTTP 请求中其他额外的 form data
        formData: {
            'token': config.token
        },
        header: {
            'content-type': 'multipart/form-data'
        },
        success: function(res) {
            requestHandler.success(res)
        },
        fail: function() {
            requestHandler.fail()
        },
    })
}
module.exports = {
    GET: GET,
    POST: POST,
    uploadFile: uploadFile,
}