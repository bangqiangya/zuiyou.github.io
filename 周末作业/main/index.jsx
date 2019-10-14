import React from 'react';
//svg矢量图：它不是像素构成，它是线和颜色构成。优点：放大不会失真，不会模糊。 缺点：颜色单一，不会做丰富图片
import Son from './son';
//css样式
import './css/index.css';
export default class Index extends React.Component{
    render(){
        const imgs=[
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'4999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'3999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'5999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'4988.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'7999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'4999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'3999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'5999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'4988.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'7999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'4999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'3999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'5999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'4988.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
            {
                src:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg'),
                $:'7999.00',
                name:'Apple/苹果 iPhone 8 Plus',
                dianjia:'Apple Store 官方旗舰店',
                count:'该款月成交',
                tem:'26万笔',
                pht:require('./img/T11lggFoXcXXc1v.nr-93-93.png')
            },
        ];
        return (
         <div className='flex'>
            <div className='box'>
                {
                    imgs.map((item,index)=>{
                        return <Son src={item.src} $={item.$} name={item.name} dianjia={item.dianjia} count={item.count} tem={item.tem} pht={item.pht} key={index}/>
                    })
                }
            </div>
            
         </div>
        );
    }
}