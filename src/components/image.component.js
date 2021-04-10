import {Component} from 'react';

class ImageComponent extends Component {
	render() {
		return (
				<img style={{height: '95%', width: '95%'}}
				     src={`${this.props.image.name}.${this.props.image.type}`}
				     alt={`Image of ${this.props.image.name}`}
				/>
		)
	}
}

export default ImageComponent;
