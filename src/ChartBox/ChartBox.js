import React, {Component} from 'react';
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class ChartBox extends Component {
    constructor(props) {
        super(props);
    }

    getRandomColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    render() {
        const data = this.props.data;
        console.log(data);
        return (
            <div className="chartix">
                <h3> График популярности платежных систем</h3>
                <LineChart
                    width={500}
                    height={600}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    {Object.keys(data[0]).filter(el => el !== 'name').map((el, index) => <Line key={index}
                                                                                               stroke={this.getRandomColor()}
                                                                                               type="monotone"
                                                                                               dataKey={el}/>)}


                </LineChart>
            </div>
        );
    }
}

export default ChartBox;
