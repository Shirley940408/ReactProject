import React, { Component } from 'react';
import styles from './styles/button';
export default class Button extends Component{
    constructor(){
        super();
        this.state={
            hovered:false
        };
    }
        

    render(){
        return(

        <button style={{...styles.style, opacity:this.state.hovered? 0.5:1}}
        onMouseEnter={()=>{
            this.setState({hovered:true});
        }}
        onMouseLeave={()=>{
            this.setState({hovered:false});
        }}
        className={styles.className} type="submit">
        
        
        {this.props.label}
        </button>            
        );
    }
}