import React from 'react';
import './css/search.css';
import Iphone1 from './img/iphone1.jpg'
import Iphone2 from './img/iphone2.jpg'
import Iphone3 from './img/iphone3.jpg'
import Iphone4 from './img/iphone4.jpg'
import Iphone5 from './img/iphone5.jpg'

export default class Index extends React.Component{
        render(){
            return <React.Fragment>
                <div className ='a'>
        <div className='a1'>
          <ul>
          <li className='a2'>你是不是想找</li>
            <li className='a3'>华为 </li>
            <li className='a3'>小米 </li>
            <li className='a3'>魅族 </li>
            <li className='a3'>荣耀 </li>
            <li className='a3'>华为手机 </li>
            <li className='a3'>vivo </li>
            <li className='a3'>oppo </li>
            <li className='a3'>三星 </li>
          </ul>
        </div>
        <div className='d1'>
            <ul>
                <li className='d2'><h4>掌柜热卖</h4></li>
                <li className='d3'>更多热卖></li>
            </ul>
            </div>
            <div className='b1'>
            <div className='b2'>
                <img src={Iphone1} alt=""/>
                    <ul>
                        <li className='z1'>￥1298.00</li>
                        <li className='z2'>月成交量</li>
                        <li className='z3'>1515</li>
                    </ul>
                    <div className='y'></div>
                    <p>z5x手机vivo新手机vivo</p>
                    <ul>
                        <li className='duan'><u>vivo官方旗舰店</u></li>
                        <li className='bo'>免运费</li>
                    </ul>
                </div>
            <div className='b2'>
                <img src={Iphone2} alt=""/>
                <ul>
                        <li className='z1'>￥1298.00</li>
                        <li className='z2'>月成交量</li>
                        <li className='z3'>1515</li>
                    </ul>
                    <p>z5x手机vivo新手机vivo</p>
                    <ul>
                        <li className='duan'><u>vivo官方旗舰店</u></li>
                        <li className='bo'>免运费</li>
                    </ul>
                </div>
            <div className='b2'>
                <img src={Iphone3} alt=""/>
                <ul>
                        <li className='z1'>￥1298.00</li>
                        <li className='z2'>月成交量</li>
                        <li className='z3'>1515</li>
                    </ul>
                    <p>z5x手机vivo新手机vivo</p>
                    <ul>
                        <li className='duan'><u>vivo官方旗舰店</u></li>
                        <li className='bo'>免运费</li>
                    </ul>
                </div>
            <div className='b2'>
                <img src={Iphone4} alt=""/>
                <ul>
                        <li className='z1'>￥1298.00</li>
                        <li className='z2'>月成交量</li>
                        <li className='z3'>1515</li>
                    </ul>
                    <p>z5x手机vivo新手机vivo</p>
                    <ul>
                        <li className='duan'><u>vivo官方旗舰店</u></li>
                        <li className='bo'>免运费</li>
                    </ul>
                </div>
            <div className='b2'>
                <img src={Iphone5} alt=""/>
                <ul>
                        <li className='z1'>￥1298.00</li>
                        <li className='z2'>月成交量</li>
                        <li className='z3'>1515</li>
                    </ul>
                    <p>z5x手机vivo新手机vivo</p>
                    <ul>
                        <li className='duan'><u>vivo官方旗舰店</u></li>
                        <li className='bo'>免运费</li>
                    </ul>
                </div>
            </div>

 

        

        <div className='c1'>
        <input type="text" text='手机'/>
        <button>搜索</button>
        </div>
    </div>
            </React.Fragment>
        }
    }