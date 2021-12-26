import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./List.css";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const items = this.props.item;
    // console.log("List");
    // console.log(items);
    return (
      <>
       <input type="checkbox"  onClick={()=>this.props.onCheckHandler(this.props.index)}/>
        <Card className="displayitems">
          {items.txt}
          <div className="displayIcons">
            <i
              className="fas fa-trash"
              onClick={() => this.props.onDeleteHandler(this.props.index)}
            ></i>
            <i
              class="fas fa-user-edit"
              onClick={() => this.props.onEditHandler(this.props.index)}
            ></i>
          </div>
        </Card>
      </>
    );
  }
}
export default List;
