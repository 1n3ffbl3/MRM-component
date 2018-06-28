import React, {Component} from "react";
import BaseView from "./BaseView";

class SubView extends BaseView {
    constructor(){
        super();
    }

    render(){
        const name = this.props.name;
        const content = this.props.content;
        return(
            <div className="borderBox">
                <div>{name}</div>
                <div>{content}</div>
                {
                    this.props.nestedView ? 
                        <a href="#" onClick={()=> this.toggleShowSubView()}>Trigger SubView</a> : ''
                }
                {
                    this.state.showSubView ? this.props.nestedView : ''
                }
            </div>
        )
    }
}

export default SubView;