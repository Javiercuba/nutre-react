import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export class FormNutrient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Quantidade: this.state.selecionarNutriente,
    };
    this.QuantityChange = this.QuantityChange.bind(this);
    // this.handleAgeChange = this.handleAgeChange.bind(this);
    // this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  QuantityChange(newQuantity) {
    this.setState({
      Quantidade: newQuantity,
    });
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { nutrientesSelecionados } = this.props;
    return (
      <Form className="form-test">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Quant X unidade"
            type="number"
            placeholder="Quantidade"
            onChange={nutrientesSelecionados}
          />
        </Form.Group>
      </Form>
    );
  }
}
