import React from "react";
import { Bar } from "react-chartjs-2";

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      energy: 1000,
      protein: 23,
      carbohydrate: 200,
      water: 2000,
    };
  }


  render() {
    return (
      <div>
        <Bar
          data={{
            labels: ["Proteina", "Energia", "Carboidrato", "Agua"],
            datasets: [
              {
                label: "Consumido",
                data: [
                  this.state.protein,
                  this.state.energy,
                  this.state.carbohydrate,
                  10,
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                ],
                borderWidth: 3,
              },
              {
                label: "Sugerido",
                data: [
                  this.props.energy,
                  this.props.energy,
                  (this.props.energy * 0.65) / 4,
                  this.props.weight * 35,
                ],
                backgroundColor: "white",
                borderColor: "green",
                borderWidth: 3,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}
