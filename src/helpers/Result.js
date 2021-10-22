import React from "react";
import { BarChart } from "../components/BarChart";

export class Result extends React.Component {
  constructor(props) {
    super(props);
      this.state = { weightType: "", weightValue: "" };
  }


  render() {
    return (
      <div class="entry-form">
        <div class="calorie-result">
          <p>Valor energetico: {this.props.calories} kcal</p>
          <br></br>
          <p>IMC: {this.props.imc} </p>
        </div>
        <BarChart energy={this.props.calories} weight={this.props.weight} />
      </div>
    );
  }
}