import React from 'react';
import style from './index.css';
import landscapeImage from './landscape.png';
import portraitImage from './portrait.png';

class Orientation extends React.Component {
  render() {
    console.log(landscapeImage, portraitImage);
    if(this.props.type === 'landscape') {
      return (
        <div id= "warning-wrapper-landscape" className={this.props.className}>
          <img src={landscapeImage} className={this.props.className} alt="Rotate to landscape" />
    			<div className="header-info"> Please rotate your device to landscape mode.</div>
      	</div>
      )
    }
    return (
      <div id= "warning-wrapper-portrait" className={this.props.className}>
        <img src={portraitImage} className="" alt="logo" />
  			<div className="header-info"> Please rotate your device to portrait mode.</div>
    	</div>
    );
  }
}
export default Orientation;
