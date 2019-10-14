import React from 'react';
//引入头部
import Header from './header/header'
//引入产品展示
import Goods from './周末作业/main/index';

import Reach from './周末作业/10-12/search/search';
// 引入底部组件
import Bottom from './周末作业/index'

export default class Index extends React.Component{
    render(){
        return <React.Fragment>
            <Header />
            <Goods />
            <Reach />
            <div style={{clear:"both"}}></div>
            <Bottom />
        </React.Fragment>
    }
}