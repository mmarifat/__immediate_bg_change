import './App.css';
import {backgrounds} from "./backgrounds";
import {Component} from 'react';
import SelectOptionComponent from "./components/select-option.component";
import BackgroundComponent from "./components/background.component";
import logo from './logo.svg';

class App extends Component {
	state = {
		bg: <img height="100%" width="100%" src={logo} alt="Default Logo"/>
	}

	selectionChange = selected => {
		this.setState({bg: <BackgroundComponent background={selected}/>});
	}

	render() {

		return (
				<div className="App-header">
					<SelectOptionComponent options={backgrounds} onSelectChange={this.selectionChange}/>
					{this.state.bg}
				</div>
		)
	}
}

export default App;
