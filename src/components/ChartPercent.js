import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Progress, Segment } from "semantic-ui-react";

export default class ProgressChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energy: 20,
      protein: 23,
      carbohydrate: 60,
      sugar: 20,
      totalFat:10,
      water: 30,
    };
  }

  render() {
    return (
      <div className="ui container" style={{
        width: "70%", height:"10%"}}>
        <Segment inverted placeholder>
          <Progress percent={this.state.energy} inverted color="red" progress>
            Proteina{" "}
          </Progress>
          <Progress percent={this.state.water} inverted color="red" progress>
            Agua{" "}
          </Progress>
          <Progress percent={this.state.carbohydrate} inverted color="orange" progress>
            Carboidrato{" "}
          </Progress>
          <Progress percent={this.state.sugar} inverted color="teal" progress>
            Açucares{" "}
          </Progress>
          <Progress percent={this.state.totalFat} inverted color="blue" progress>
            Gord Total{" "}
          </Progress>
          <Progress percent={10} inverted color="oroliveange" progress>
            Gord saturada{" "}
          </Progress>
          <Progress percent={54} inverted color="orange" progress>
            Fibras{" "}
          </Progress>
          <Progress percent={80} inverted color="yellow" progress>
            Sódio{" "}
          </Progress>
          <Progress percent={79} inverted color="orange" progress>
            Vitamina C{" "}
          </Progress>
          <Progress percent={59} inverted color="green" progress>
            Cálcio{" "}
          </Progress>

          <Progress percent={13} inverted color="yellow" progress>
            Ferro
          </Progress>
          <Progress percent={37} inverted color="olive" progress>
            Potássio
          </Progress>
          <Progress percent={83} inverted color="green" progress>
            Niacina
          </Progress>
        </Segment>
      </div>
    );
  }
}
