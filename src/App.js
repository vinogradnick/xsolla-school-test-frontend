import React, {Component} from 'react';
import Table from "./Table/Table";
import Axios from 'axios';
import convertate from "./convertate";
import List from "./List/List";
import groupBy from "./group";
import FlexItems from "./static/FlexItems";
import FilterForm from "./FilterBox/FilterForm";
import ChartBox from "./ChartBox/ChartBox";
import generateDataChart from "./dataChartProject";

class App extends Component {
    constructor() {
        super();
        this.state = {source: null};
        this.tableTrigger = this.tableTrigger.bind(this);

    }

    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/NikitaBonachev/870f68699f9a7bbf8d5c1434f6c7c3d1/raw/8d45e0f5b60b9dd6a5da1f0c957f3a22031fe102/data.json')
            .then(response => {
                    this.setState({
                        source: response.data.map(el => convertate(el.transaction)),
                        defaultList: response.data.map(el => el.transaction)
                    });
                    console.log(response.data);
                }
            ).catch(err => console.log(err));

    }

    tableTrigger(data) {
        console.log("data + " + data);
        if (data && data.length >= 2) {
            console.log(this.state.source);
            let source = this.state.source.filter(el => (el.project.substr(0, data.length).toLowerCase() === data.toLowerCase()));

            console.log(source);
            this.setState({source: source});

        } else {
            this.setState({source: this.state.defaultList});
            console.log(this.state);

        }
    }

    render() {
        let items, projects,pays,graphData;
        const headers = ['id', 'project', 'transfer_date', 'dry_run', 'payment_method', 'status'];
        const source = this.state.source;
        if (this.state.source) {

            items = [...groupBy(this.state.source.map(obj =>  obj.payment_method), e => e).entries()];
            graphData=[...groupBy(this.state.source.map((obj =>({date:new Date(obj.transfer_date).getDay()+'-'+new Date(obj.transfer_date).getHours(),method:obj.payment_method}))),e=>e.date)];
            console.log("graphData");

            items = items.map(el => ({name: el[0], count: el[1].length}));

            graphData=generateDataChart(items,graphData);
            graphData=graphData.reverse();

            items = items.sort((a,b) => b.count-a.count);
            console.log(items);
            items = items.map(el => el.name + ' ' + el.count);
            projects = [...groupBy(this.state.source.map(el => el.project), e => e).keys()];


        }


        return (

            <div>
                <nav></nav>
                <FilterForm trigger={this.tableTrigger}/>
                {source && headers ? (

                        <main>

                            <Table source={source} headers={headers}/>
                            <FlexItems>
                                <List title="Список проектов" items={projects}/>
                                <List title="Список платежных систем по популярности" items={items}/>
                                <ChartBox data={graphData}/>
                            </FlexItems>


                        </main>) :
                    <p>Clear list</p>}

            </div>
        );
    }
}

export default App;
