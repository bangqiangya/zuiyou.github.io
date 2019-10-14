import React from 'react';
//无状态
export default props => {
    return (
        <div className='tupianzhanshi'>
            <img src={require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')} width={props.width || '200'} height={props.height || '210'} alt="产品-手机" />
            <p className='zitiyanse'>￥{props.$ || '0.00'}</p>
            <p className='zitidaxiao'>{props.name || '--'}</p>
            <p><a href='#' className='zitidaxiao' style={{ color: 'gray' }}>{props.dianjia || '--'}</a></p>
            <p className='chengjiaoziti'>{ props.count || ''}
                <span style={{ color: '#B57C5B',fontWeight:'700' }}>{props.tem}</span>
                <span className='photo'>
                    <img src={props.pht||require('./img/T11lggFoXcXXc1v.nr-93-93.png')} width={props.width||'16'} height={props.height||'16'} alt=""/>
                </span>
            </p>
        </div>
    );
};