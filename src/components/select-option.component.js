import {Component} from 'react';

class SelectOptionComponent extends Component {
	constructor(props) {
		super(props);
		this.handleSelectChange = this.handleSelectChange.bind(this)
	}

	handleSelectChange(event) {
		const selection = this.props.options.find(f => f.name === event.target.value) || {name: '', type: ''}
		this.props.onSelectChange(selection);
	}

	render() {
		return (
				<select name="select-bg" id="select-bg" onChange={this.handleSelectChange}>
					<option> ----- SELECT ONE -----</option>
					{
						this.props.options.map((each) =>
								<option key={each.name} value={each.name}> {each.name.toUpperCase()} </option>
						)
					}
				</select>
		)
	}
}

export default SelectOptionComponent;
