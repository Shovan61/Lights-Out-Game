import React, { PureComponent } from 'react'
import './Cell.css';

class Cell extends React.Component{
constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

 handleClick(){
 this.props.flipCell();
 }

 render() {
     let classes = (this.props.isLit ? "Cell-lit" : "Cell");
     return (
       <td className={classes} onClick={this.handleClick}></td>
     )
 }

};


export default Cell;