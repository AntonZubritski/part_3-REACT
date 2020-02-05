import React from 'react';
//completedTab - Активная вкладка
class AppTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {done: false};
    }

    toggleTab = () => {
        this.setState((prevState) => {
            return {
                done: !prevState.done
            }
        });
    };

    render(){
        const { done } = this.state;
        const { bool, name } = this.props;
        let className = 'col-lg-4 tab';

        if (done){
            className += ' completedTab';
        }

        return (<input type="button" value = {name} className={className} data-id = {bool}
                       onClick={this.toggleTab}/>)
    }

}

export default AppTab;
