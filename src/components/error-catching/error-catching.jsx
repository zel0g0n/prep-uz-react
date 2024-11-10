import { Component } from "react";

class ErrorBoundary extends Component {
  state = {hasError: false}

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch(error,errorInfo) {
    console.log(`Error: ${error}, ${errorInfo}`)
  }

  render() {
    if(this.state.hasError) {
      return <p>Something error</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary