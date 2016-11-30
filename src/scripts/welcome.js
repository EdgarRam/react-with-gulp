class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class AppWelcome extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Sara" />
                <Welcome name="Edgar" />
                <Welcome name="Pedro" />
            </div>
        );
    }
}


ReactDOM.render(
  <AppWelcome />,
  document.getElementById('welcome')
);
