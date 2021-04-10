import React from 'react';
import {backgrounds, backgroundTypes} from "../backgrounds";
import logo from "../logo.svg";

function Image(props) {
	const {background} = props;
	return (
			backgrounds.filter(f => backgroundTypes.image.includes(f.type)).map(each => (
					<img style={{display: background.name === each.name ? 'flex' : 'none'}}
					     height="100%" width="100%"
					     src={`${each.name}.${each.type}`}
					     alt={each.name}
					     key={each.name}
					/>
			))
	)
}

function Video(props) {
	const {background} = props;
	return (
			backgrounds.filter(f => backgroundTypes.video.includes(f.type)).map(each => (
					<video style={{display: background.name === each.name ? 'flex' : 'none'}}
					       key={each.name}
					       height="100%" width="100%"
					       autoPlay loop muted
					       src={`${each.name}.${each.type}`}/>
			))
	)
}


class BackgroundComponent extends React.PureComponent {

	render() {
		return (
				//render videos
				backgroundTypes.video.includes(this.props.background.type) ? <Video background={this.props.background}/>
						: (
								//render images
								backgroundTypes.image.includes(this.props.background.type) ? <Image background={this.props.background}/>
										:
										//render default
										<img height="100%" width="100%" src={logo} alt="Default Logo"/>
						)
		)
	}
}

export default BackgroundComponent;
