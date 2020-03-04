import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

class ErrorBoundry extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error){
      return <ErrorIndicator />
    }
    return this.props.children
  }
}

export default ErrorBoundry