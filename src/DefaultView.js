import React, {Component} from "react";
import SubView from "./SubView";

class DefaultView extends Component{
    constructor(){
        super();
        this.state = {
            showSubView: false
        };
    }
    render(){
        const subView2 = (
            <SubView name= "Second SubView"
                    content= "Second subview content"
                     />
        );
        return(
            <div>
                <div>Default View</div>
                <button onClick={()=> this.setState({showSubView: !this.state.showSubView})}>Trigger SubView</button>
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