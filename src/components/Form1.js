import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Form1 extends Component {
  render() {
    const { input } = this.props;
    //console.log(this.props.todos);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Row>
          <Col sm={12}>
            <Form.Control
              className="w-20"
              style={{  margin: "0.2rem 0.8rem 0 0.4rem" }}
              type="text"
              placeholder="Add an item"
              value={input}
              onChange={(e) => this.props.onChangeHandler(e)}
              onKeyPress={(e) => this.props.onkeyHandler(e)}
            />
          </Col>
        </Row>

        <Row className="buttoncont">
          <Col>
            <Button
              sm={2}
              variant="dark"
              onClick={this.props.onAddHandler}
              style={{ margin: " 0.3rem  0.6rem" }}
            >
              Add
            </Button>
          </Col>
          <Col>
            <Button
              sm={2}
              variant="light"
              onClick={this.props.onChkDelHandler}
              style={{ margin: "0.2rem" }}
            >
              Delete
            </Button>
          </Col>
          <Col>
            <Button
              sm={2}
              variant="danger"
              onClick={this.props.onDelAll}
              style={{ margin: "0.2rem" }}
            >
              Reset
            </Button>
          </Col>
        </Row>

        <p
          style={{
            color: "red",
            fontWeight: "500",
            marginLeft: "1rem",
            marginTop: "0.2rem",
          }}
        >
          Press Enter to add todo's or click Add{" "}
        </p>
      </div>
    );
  }
}

export default Form1;
