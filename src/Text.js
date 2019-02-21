import React, { Component } from 'react';
import styles from './styles/Text';
export default class Text extends Component{

    render(){
        return(
            
            <input placeholder={this.props.placeholder} style={styles}/>                 
            
            
        )
    }
}