import React, {Component} from "react";


class SubView extends React.Component{
    render(){
        const name = this.props.name;
        const content = this.props.content;
        return(
            <div>
                <div>{name}</div>
                <div>{content}</div>
                {
                    this.props.nestedView
                }
            </div>
        )
    }
}

export default SubView;