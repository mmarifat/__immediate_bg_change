import './App.css';
import backgrounds from "./backgrounds";
import {Component} from 'react';
import VideoComponent from "./components/video.component";
import SelectOptionComponent from "./components/select-option.component";
import ImageComponent from "./components/image.component";
import logo from './logo.svg'

class App extends Component {
	state = {
		background: <img src={logo} alt="default logo"/>
	}

	selectionChange = selected => {
		switch (selected.type) {
			case 'mp4':
				this.setState({background: <VideoComponent video={selected} key={Math.random()}/>});
				break;
			case 'jpg':
				this.setState({background: <ImageComponent image={selected} key={Math.random()}/>});
				break;
			default:
				this.setState({background: <img src={logo} alt="default logo" key={Math.random()}/>});
				break;
		}
	}

	render() {
		return (
				<div className="App-header">
					{this.state.background}
					<SelectOptionComponent options={backgrounds} onSelectChange={this.selectionChange}/>
				</div>
		)
	}
}

export default App;
