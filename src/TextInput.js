import React, { Component } from 'react';
import styles from './styles/Text';
export default class TextInput extends Component{

    render(){
        return(
            <div>
                <input placeholder={this.props.placeholder} style={styles}/>

                <div style={styles.line}></div>
                <div style={styles.errorBlock}></div>

            </div>
            
            

            
                            
            
            
        )
    }
}

