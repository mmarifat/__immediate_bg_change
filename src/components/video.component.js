import {Component} from 'react';

class VideoComponent extends Component {

	render() {
		return (
				<video style={{height: '95%', width: '95%'}} autoPlay loop muted preload key={this.props.video.name}>
					<source type={`video/${this.props.video.type}`}
					        src={`${this.props.video.name}.${this.props.video.type}`}
					/>
					Your browser does not support HTML video.
				</video>
		)
	}
}

export default VideoComponent;
