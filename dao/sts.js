const Core = require('@alicloud/pop-core');

var client = new Core({
  accessKeyId: 'LTAI5tLQeBCGAPUyNhNjW49D',
  accessKeySecret: '2iGgLfVO1Exr7k9oFstUYBW6xEhJ9k',
  endpoint: 'https://sts.aliyuncs.com',
  apiVersion: '2015-04-01'
});
var params = {
  "RegionId": "cn-beijing",
  "RoleArn": "acs:ram::1940327359447550:role/ramosstest",
  "RoleSessionName": "RamOssTest"
}

var requestOption = {
  method: 'POST'
};

//发起请求，并得到响应。
exports.getSts = (res)=>{
    client.request('AssumeRole', params, requestOption).then((result) => {
        res.send({
            code:20000,
            data:result.Credentials
        })
      }, (ex) => {
        console.log(ex);
        res.send({
            code:50000
        })
    })           
}
