import React, {Component} from "react";
import SubView from "./SubView";

class DefaultView extends Component{
    constructor(){
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

    render(){
        const subView2 = (
            <SubView name= "Second SubView"
                    content= "Second subview content"
                     />
        );
        return(
            <div className="border">
                <div>Default View</div>
                <button onClick={()=> this.toggleShowSubView()}>Trigger SubView</button>
                {
                    this.state.showSubView ?   <SubView name="First SubView" 
                        content="First subview content" 
                        nestedView={subView2}
                         /> : ""
                }
            
               
            </div>
        )
    }
}

export default DefaultView;