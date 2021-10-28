import React from "react";
import { MetricForm } from "./MetricForm";
import { ActivityLevel } from "../../helpers/ActivityLevel";
import { Result } from "../../helpers/Result";
import { BarChart } from "../BarChart";
import { Form, Button, Divider } from "semantic-ui-react";
import Search from "../Search";

export class EntryForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      gender: "",
      weight: "",
      activity: "",
      height: "",
      measurement: "",
      measurementSelected: false,
      result: "",
      showResult: false,
      resultForm: "",
    };
    this.handleMeasurementChange = this.handleMeasurementChange.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeWeight = this.changeWeight.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
    this.changeActivity = this.changeActivity.bind(this);
    this.getCalories = this.getCalories.bind(this);
    this.validEntry = this.validEntry.bind(this);
  }

  handleMeasurementChange(event) {
    this.setState({
      measurement: event.target.value,
      measurementSelected: true,
    });
  }

  changeGender(event) {
    this.setState({
      gender: event.target.value,
    });
  }

  changeWeight(newWeight) {
    this.setState({
      weight: newWeight,
    });
  }

  changeAge(newAge) {
    this.setState({
      age: newAge,
    });
  }

  changeHeight(newHeight) {
    this.setState({
      height: newHeight,
    });
  }

  changeActivity(newActivity) {
    this.setState({
      activity: newActivity,
    });
  }

  validEntry() {
    // Check that all input fields are valid before getting result
    let fields = [
      this.state.gender,
      this.state.age,
      this.state.weight,
      this.state.height,
      this.state.activity,
    ];
    var i;

    // check that any of the fields arent empty
    for (i in fields) {
      console.log(fields[i]);
      if (fields[i].length === 0) {
        return false;
      }
    }

    // check each field is in a valid range
    if (this.state.age < 0 || this.state.age > 120) {
      return false;
    }
    if (this.state.weight < 0) {
      return false;
    }
    if (this.state.height < 0) {
      return false;
    }

    return true;
  }

  setValuesCharts(event) {
    if (this.validEntry()) {
      this.setState({
        showResult: true,
        resultForm: (
          <BarChart
            //TODO mudar esse grafico
            energy={this.calculateCalories}
            weight={this.state.weight}
          />
        ),
      });
    }
  }

  getCalories(event) {
    if (this.validEntry()) {
      this.setState({
        showResult: true,
        resultForm: (
          <Result
            calories={this.calculateCalories()}
            measurementType={this.state.measurement}
            imc={this.calculateImc()}
            weight={this.state.weight}
          />
        ),
      });
    } else {
      alert("Preencha os campos corretamente");
    }
  }

  calculateImc() {
    let imc =
      (this.state.weight / (this.state.height * this.state.height)) * 10000;
    return imc.toFixed(2);
  }

  // Calculate BMR from form data using Harris-Benedict Equation
  calculateCalories() {
    let bmr = 0;
    // use equation to get bmr (calroies burned at rest)
    if (this.state.gender === "male") {
      bmr =
        66.473 +
        13.75116 * this.state.weight +
        5.033 * this.state.height -
        6.755 * this.state.age;
    } else {
      bmr =
        655.0955 +
        9.5634 * this.state.weight +
        1.8496 * this.state.height -
        4.6756 * this.state.age;
    }
    // adjust bmr according to activity level
    switch (this.state.activity) {
      case "none":
        bmr = bmr * 1.2;
        break;
      case "moderate":
        bmr = bmr * 1.55;
        break;
      case "heavy":
        bmr = bmr * 1.725;
        break;
    }
    return Math.round(bmr);
  }

  render() {
    return (
      <Form className="form-test">
        <div className="entry-form">
          <p>Selecione suas medidas</p>

          <label for="gender">Genero</label>
          <select
            name="gender"
            id="gender"
            class=""
            onChange={this.changeGender}
          >
            <option value="" disabled selected>
              selecione
            </option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>

          <MetricForm
            weightChange={this.changeWeight}
            ageChange={this.changeAge}
            heightChange={this.changeHeight}
          />

          <ActivityLevel onChange={this.changeActivity} />

          <div className="button-form">
            <Button
              className="bg-blue-300"
              type="button"
              onClick={this.getCalories}
            >
              Calculo de caloria
            </Button>
          </div>
          <div>{this.state.showResult && this.state.resultForm}</div>
        </div>
        <Search />
      </Form>
    );
  }
}
