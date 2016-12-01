class FormattedDate extends React.Component {

    render() {
        return (
            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        );
    }

}


class Clock extends React.Component {

    constructor() {
        super();
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }

}


class App extends React.Component {

    render() {
        return (
          <div>
            <Clock />
            <Clock />
            <Clock />
          </div>
        );
    }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
