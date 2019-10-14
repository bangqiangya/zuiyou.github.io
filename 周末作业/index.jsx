import React from 'react';

// 引入样式
import './index.css';
export default class Index extends React.Component{
    render(){
        return <React.Fragment>
            {/* 建立大盒子 */}
            <div className="box1">
            <div className="box2">
     <div className="box3">
     <img src={require('./src/小喵咪.jpg')}width="20" alt=""/>
        <span>喵~在此反馈您的意见和建议吧，</span>
        <a href="###">立刻反馈</a>
     </div>
     <div className="lianjie">
        <img src={require('./src/天猫.jpg')} alt=""/>
        <img src={require('./src/天猫.jpg')} alt=""/>
        <img src={require('./src/天猫.jpg')} alt=""/>
        <img src={require('./src/天猫.jpg')} alt=""/> 
        <hr/>
     </div>
    <div className="ziti">
        <div className="tubiao">
            <p></p>
        <img src={require('./src/天猫商城.jpg')} width="150px" alt=""/> 
        </div>
        <div className="neirong">
            <h3>购物指南</h3>
            <p>免费注册</p>
            <p>开通支付宝</p>
            <p>支付宝充值</p>
        </div>
        <div className="neirong2">
        <h3>电器城保障</h3>
            <p>花呗分期</p>
            <p>预约配送</p>
            <p>送货入户</p>
            <p>全国联保</p>
        </div>
        <div className="neirong3">
        <h3>支付方式</h3>
            <p>支付宝快捷支付</p>
            <p>支付宝余额付款</p>
            <p>支付宝钱包付款</p>
            <p>货到付款</p>
            <p>新人支付</p>
        </div>
        <div className="neirong4">
        <h3>商家服务</h3>
            <p>入驻天猫电器城</p>
            <p>加入电器城服务保障</p>
            <p>电器城喵言喵语圈子</p>
            <p>电器城商家管理规范</p>
        </div>
        <div className="neirong5">
            <h3>手机电器城</h3>
            <img src={require('./src/二维码.jpg')} width="120px" alt=""/> 
        </div>
        <div className="xiaomao">
        <img src={require('./src/小猫.jpg')} width="50px" alt=""/> 
        </div>
    </div>
     </div>
     </div>
     <div className="twobox">
        <div className="xiaohezi">
            {/* <div style=""></div> */}
        <p>关于天猫 帮助中心 开放平台 诚聘英才 联系我们  网站合作 法律声明 隐私权政策 知识产权 廉政举报 </p>
        <p>阿里巴巴集团|淘宝网|天猫|策划算|全球速卖通|阿里巴巴国际交易市场|1688|阿里妈妈|飞猪|阿里云计算|ALiOS|阿里通信|万网|高德|UC|友盟|虾米|钉钉|支付宝</p>
        <p>增值电信业务经营许可证： 浙B2-20110446      市场名称登记证：工商网市字3301004119号       出版物网络交易平台服务经营备案证： 新出发浙备字第001号 </p>
        <p>互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com 互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005  <img src={require('./src/徽章.jpg')} alt=""/>  浙公网安备 33010002000120号</p>
        <p>医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号 互联网药品交易服务资格证书：国A20150001</p>
        <p>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002 12318举报</p>
        <p>© 2003-2019 TMALL.COM 版权所有</p>
        </div>
     </div>
        </React.Fragment>
    }
}