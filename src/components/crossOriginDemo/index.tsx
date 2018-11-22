import * as React from 'react';

export default class CrossOriginDemo extends React.PureComponent {
  render() {
    return(
      <article>
        <br />
        <h3>跨域Demo</h3>
        <hr />
        <p>此文件夹下包含了四个例子,分别是JSONP、CORS、postMessage、WebSocket，各为一个文件夹</p>
        <p>文件夹路径为 "./src/components/rossOriginDemo"</p>
        <p>所有的例子涉及后台前端，所以并未在此页面中展示，需要下载下来本地运行Demo</p>
        <p>webA为调用跨域的页面，webB为跨域请求的服务端</p>
        <p>后台用的是node.js的Koa，进入webA、webB，先 `npm i koa` ，然后 `node back.js` ，就能启动后台</p>
      </article>
      
    )
  }
}