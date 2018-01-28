import React from 'react';
import style from './index.css';

class Orientation extends React.Component {
  render() {
    console.log(this.props);
    if(this.props.type === 'landscape') {
      return (
        <div id= "warning-wrapper-landscape" className={this.props.className}>
    			{this.props.children || <div className="message">Please rotate your device to landscape mode.</div>}
      	</div>
      )
    }
    return (
      <div id= "warning-wrapper-portrait" className={this.props.className}>
        {this.props.children || <div className="orientation-message">Please rotate your device to portrait mode.</div>}
    	</div>
    );
  }
}
export default Orientation;
