import React, { Component } from 'react';
import styles from './styles/background.js';
import bgpic from './imgs/background.jpg';
import Text from './Text.js';
class App extends Component {
  render() {
    return (  
      <div style={styles.container} className={styles.container_class}>
        <img src={bgpic} style={styles.image} className={styles.image_class}  alt=''/>
        <div style={styles.panel.container} className={styles.panel.container_class}>
          <div style={styles.panel_row} className={styles.panel_row_class}>
            <div style={styles.panel_col} className={styles.panel_col_class}>
              <div style={styles.panel.space} className={styles.panel.space_class}>
                
                <p style={styles.text_title}>BIG FISH</p>
                <Text placeholder="Email"/><br/>
                <Text placeholder="Password"/><br/>
                <Text placeholder="Name"/><br/>


              
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
