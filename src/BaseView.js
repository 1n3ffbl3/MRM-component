import React, {Component} from "react";

class BaseView extends Component{
    
    constructor() {
        super();
        this.state = {
            showSubView: false
        };
        this.toggleShowSubView = this.toggleShowSubView.bind(this)
    }

    toggleShowSubView(){
        this.setState({
            showSubView: !this.state.showSubView
        })
    }
    
}

export default BaseView;