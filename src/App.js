import React, { Component } from 'react';
import styles from './styles/background';
import bgpic from './imgs/background.jpg';
import Button from'./Button';
import TextInput from './TextInput';
import WhiteBlank from './asset/WhiteBlank';
class App extends Component {
  state={
    errMsg:''
  }

  onSubmit=()=>{
    console.log('submitted');
    if(!this.input_value){
      this.setState({
        errMsg:'Required',
      });
    }
  }
  onChange=({target:{value}})=>{
    this.input_value=value
  }
  onBlur=({target:{value}})=>{
    console.log('on blur',value);
    if(!value){
        this.setState({
            errMsg:'Required'
        })
    }
}

  render() {
    return (  
      <div style={styles.container} className={styles.container_class}>
        <img src={bgpic} style={styles.image} className={styles.image_class}  alt=''/>
        <div style={styles.panel.container} className={styles.panel.container_class}>
          <div style={styles.panel_row} className={styles.panel_row_class}>
            <div style={styles.panel_col} className={styles.panel_col_class}>
              <div style={styles.panel.space} className={styles.panel.space_class}>
                
                <p style={styles.text_title}>BIG FISH</p>
                <TextInput onChange={this.onChange} onBlur={this.onBlur} errMsg={this.state.errMsg} placeholder="Email"/>
                <WhiteBlank w={'100%'} h='m'/>
                <TextInput onChange={this.onChange} onBlur={this.onBlur} errMsg={this.state.errMsg}  placeholder="Password"/>
                <WhiteBlank w={'100%'} h='m'/>
                <TextInput  onChange={this.onChange} onBlur={this.onBlur} errMsg={this.state.errMsg} placeholder="Name"/>
                <WhiteBlank/>
                <Button id="signup" onClick={this.onSubmit} label="SignUp"/>
              
              </div> 
              <div style={styles.panel.footer} className={styles.panel.footer_class}>
                <div className={styles.panel.footer_width}>
                  <span style={styles.text_bottom_left}>Already have an account? </span><span style={styles.text_bottom_right}>Login</span>
                </div>
              </div> 

            </div>
          </div>    
        </div>
      </div>
    );
  }
}

export default App;
