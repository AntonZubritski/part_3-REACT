import React, { Component } from "react";
import Spinner from "../spinner";
import Error from "../error";
import { SwapiServiceConsumer } from "../context"


const withDataList = (View, getData) => {
  return class extends Component {
      state = {
        data: null,
        error: false
      };
    componentDidMount() {
      getData().then((data) => {
        this.setState({
          data
        });
      });
    }
    render() {
      const { data, error } = this.state;
      if (!data && error === false) {
        return <Spinner />
      }
      if (error !== false) {
        return <Error error={error}  />
      }
      return <View { ...this.props } data={data} />
    }
  }
};

const withDataDetails = (View) => {
  return class extends Component {
      state = {
        data: null,
        error: false
      };
    componentDidMount() {
      const { getData, id } = this.props;
      getData(id)
        .then(data => {
          this.setState({
            data
          });
        })
        .catch(error => {
          this.setState({
            error: error.message
          });
        });
    }
    componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        this.componentDidMount();
      }
    }
    render() {
      const { data, error } = this.state;
      if (!data && error === false) {
        return <Spinner />
      }
      if (error !== false) {
        return <Error error={error}  />
      }
      return <View {...this.props} data={data} error={error}/>
    }
  };
};

const withDataRandom = (View, getData) => {
  return class extends Component{
      state = {
        data: null,
        error: false
      };
    componentDidMount() {
      setInterval(() => {
        let id = Math.floor(Math.random() * 60 + 1);
        getData(id)
          .then(data => {
            this.setState({
              data
            });
          });
      },4000)
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }
    render() {
      const { data, error } = this.state;
      if (!data && error === false) {
        return <Spinner />
      }
      if (error !== false) {
        return <Error error={error}  />
      }
      return <View {...this.props} data={data}/>
    }
  }
};

const withChildFunction = (Wrapped, fn) => {
  return (props) => <Wrapped {...props}>{fn}</Wrapped>
};

const withService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
            return <Wrapped {...props} swapiService={swapiService}/>
          }}
      </SwapiServiceConsumer>
    )
  }
};

export  {
  withDataList,
  withDataDetails,
  withDataRandom,
  withChildFunction,
  withService
};


