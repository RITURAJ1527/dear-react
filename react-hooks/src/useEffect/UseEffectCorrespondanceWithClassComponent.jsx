import React from "react";

export default class UseEffectCorrespondanceClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = ()=>{
        this.setState(prev=>{return {count: prev.count+1}});
    }

    static getDerivedStateFromProps(prevProps, prevState) {
        console.log("getDerivedStateFromProps");
        console.log(prevProps);
        console.log(prevState);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    render(){
        return(
            <>
                <button onClick={()=>this.increment()}>Clicked: {this.state.count} times</button>
            </>
        )
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
        console.log("componentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        console.log(prevProps, this.props);
        console.log(prevState, this.state);
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`;
        console.log("componentDidUpdate");
        console.log(prevProps, this.props);
        console.log(prevState, this.state);
    }

    componentWillUnmount() {
        console.log("This is the last, after this UseEffectCorrespondanceClass will get destroyed from the DOM tree.");
    }

    
}