import React from 'react';
import './css/header.css';
import logoImg from './img/logoImg.jpg';
import Iphone from './img/iphone.jpg';
import Xiaomi from './img/xiaomi.png';
import Huawei from './img/huawei.png';
import Honor from './img/honor.png';
import Vivo from './img/vivo.png';
import Sanxing from './img/sanxing.jpg';
import Oppo from './img/oppo.png';
import Sony from './img/sony.png';

export default class Index extends React.Component{
    render(){
        return <React.Fragment>
            <div className="headerTop">
                <div className="headerList">
                    <ul className="leftList">
                        <li>天猫首页</li>
                        <li>喵,欢迎来天猫</li>
                        <li>请登录</li>
                        <li>免费注册</li>
                    </ul>
                    <ul className="rightList">
                        <li className="listLi">我的淘宝▽</li>
                        <li>购物车0件</li>
                        <li style={{borderRight:"1px solid #CCCCCC"}}>收藏夹▽</li>
                        <li>手机版</li>
                        <li>淘宝网</li>
                        <li>商家支持▽</li>
                        <li>网站导航▽</li>
                    </ul>
                </div>
                <div className="searchBox">
                    <div className="logoImg">
                        {/* 图片 */}
                        <div className="elfBox">
                            <img src={logoImg} alt=""/>
                        </div>
                    </div>
                    <div className="searchInput">
                        <input type="text"/>
                        <button type="submit">搜索</button>
                        <ul>
                            <li style={{border:"none"}}>华为</li>
                            <li>小米</li>
                            <li>魅族</li>
                            <li>荣耀</li>
                            <li>华为手机</li>
                            <li>vivo</li>
                            <li>oppo</li>
                            <li>三星</li>
                        </ul>
                    </div>
                    <div style={{clear:"both"}}></div>
                    <div className="navigation">
                        <ul>
                            <li>电器城首页</li>
                            <li>手机馆</li>
                            <li>苏宁易购</li>
                        </ul>
                        <p>电器城服务台</p>
                    </div>
                    <div className="littleSearch">
                        <p>全部 > </p>
                        <input type="text"/>
                        <p style={{float:"right"}}>共 1898742件相关商品</p>
                    </div>
                    <div className="brand">
                        <div className="brandLeft">品牌</div>
                        <div className="brandRight">
                            <ul>
                                <li><img className="brandImg" src={Iphone} alt=""/><p className="brandP">Apple/苹果</p></li>
                                <li><img className="brandImg" src={Xiaomi} alt=""/><p className="brandP">Xiaomi/小米</p></li>
                                <li><img className="brandImg" src={Huawei} alt=""/><p className="brandP">Huawei/华为</p></li>
                                <li><img className="brandImg" src={Honor} alt=""/><p className="brandP">honor/荣耀</p></li>
                                <li><img className="brandImg" src={Vivo} alt=""/><p className="brandP">vivo</p></li>
                                <li><img className="brandImg" src={Sanxing} alt=""/><p className="brandP">Samsung/三星</p></li>
                                <li><img className="brandImg" src={Oppo} alt=""/><p className="brandP">oppo</p></li>
                                <li><img className="brandImg" src={Sony} alt=""/><p className="brandP">Sony/索尼</p></li>
                            </ul>
                            <div className="multi">
                                <p style={{background:"#F2F0EF",marginRight:"5px"}}>+ 多选</p>
                                <p>更多 ▽</p>
                            </div>
                        </div>
                        <div style={{clear:"both"}}></div>
                        <div className="classification">
                            <div className="classificationLeft">分类</div>
                            <div className="classificationRight">
                                <p style={{float:"left"}}>手机</p>
                                <p style={{float:"right"}}>更多 ▽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}