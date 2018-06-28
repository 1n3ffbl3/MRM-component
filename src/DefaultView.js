import React, {Component} from "react";
import SubView from "./SubView";

class DefaultView extends Component{
    render(){
        const subView2 = (
            <SubView name= "Second SubView"
                     content= "Second subview content"
                     />
        );
        return(
            <div>
                <div>Default View</div>
                    <SubView name="First SubView" 
                             content="First subview content" 
                             nestedView={subView2}
                        />
            </div>
        )
    }
}

export default DefaultView;