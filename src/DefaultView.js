import React, {Component} from "react";
import SubView from "./SubView";
import BaseView from "./BaseView";

class DefaultView extends BaseView{
    constructor(){
        super();
    }

    render(){
        const subView2 = (
            <SubView name= "Second SubView"
                    content= "Second subview content"
                     />
        );
        return(
            <div className="borderBox">
                <div>Default View</div>
                <a href="#" onClick={()=> this.toggleShowSubView()}>Trigger SubView</a>
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