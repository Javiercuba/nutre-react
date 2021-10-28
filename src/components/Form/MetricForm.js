import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export class MetricForm extends Component {
  constructor(props) {
    super(props);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  handleWeightChange(e) {
    const weight = e.target.value;
    this.props.weightChange(weight);
  }

  handleAgeChange(e) {
    const age = e.target.value;
    this.props.ageChange(age);
  }

  handleHeightChange(e) {
    const height = e.target.value;
    this.props.heightChange(height);
  }
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Peso"
            type="number"
            placeholder="Peso"
            onChange={this.handleWeightChange}
          />
          <Form.Input
            fluid
            label="Idade"
            placeholder="idade"
            type="age"
            onChange={this.handleAgeChange}
          />
          <Form.Input
            fluid
            label="Altura"
            placeholder="cm"
            type="number"
            onChange={this.handleHeightChange}
          />
        </Form.Group>
      </Form>
    );
  }
}
