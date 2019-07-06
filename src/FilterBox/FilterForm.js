import React, {Component} from 'react';

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {userValue: ''};

    }

    changeValue(e) {
        this.setState({userValue: e.target.value});
        this.props.trigger(this.state.userValue);
        console.log(this.props);
    }

    render() {
        const value = this.state.userValue;
        return (
            <div className="filter-box">
                <div className="group">
                    <input type="text" value={value}
                           onChange={e => this.changeValue(e)}/>
                           <span className="highlight"/>
                           <span className="bar"/>
                    <label>Поиск по проектам</label>
                </div>
            </div>
        );
    }
}

export default FilterForm;
