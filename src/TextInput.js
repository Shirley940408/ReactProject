import React, { Component } from 'react';
import styles from './styles/Text';
import TextCostume from './TextCostume';
import './component/Text.css';
export default class TextInput extends Component{

    render(){
        // const{
        //     style
        // }=this.props;
        return(
            <div>
                <input {...this.props.rest} onBlur={this.props.onBlur} placeholder={this.props.placeholder} style={styles}/>

                <div style={styles.line(this.props.errMsg)}></div>
                {/* <div style={{...styles.line, borderColor: this.props.errMsg? 'red':'#D8D8D8'}}></div> */}

                {/* <div ></div> */}
                <TextCostume style={styles.errorBlock} type='xs err'><span>{this.props.errMsg}</span></TextCostume>

            </div>
            
            

            
                            
            
            
        )
    }
}

