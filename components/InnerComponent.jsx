import React from 'react';
import { connect } from 'react-redux';

//components


//actions

import style from './wrap.scss';

@connect((store)=>{
    return {
        main:  store.main,
    }
})
export default class InnerComponent extends React.Component {
    
    render() {
        return  (
            <div className={style.wrap}>
                <h1>{this.props.routeParams.id}</h1>
                { React.cloneElement(this.props.children, this.props) }
            </div>
        );
    }
}
