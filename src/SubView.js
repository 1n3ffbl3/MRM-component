import React, {Component} from "react";


class SubView extends React.Component{
    constructor(){
        super();
        this.state = {
            showSubView: false
        };
        this.toggleShowSubView = this.toggleShowSubView.bind(this);
    }

    toggleShowSubView(){
        this.setState({
            showSubView: !this.state.showSubView
        })
    }
    render(){
        const name = this.props.name;
        const content = this.props.content;
        return(
            <div className="border">
                <div>{name}</div>
                <div>{content}</div>
                {
                    this.props.nestedView ? 
                        <button onClick={()=> this.toggleShowSubView()}>Trigger SubView</button> : ''
                }
                {
                    this.state.showSubView ? this.props.nestedView : ''
                }
            </div>
        )
    }
}

export default SubView;