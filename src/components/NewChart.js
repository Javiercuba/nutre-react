import React, { Component } from "react";
import Chart from "react-apexcharts";

const categorias = ["Proteina", "Energia", "Carboidrato", "Gord saturada"];

/**
 *
 * @param {Array} vetorDeAlimetos
 */
const transformarValores = (vetorDeAlimetos) => {
  let valoresTransformados = [0, 0, 0, 0];
  const tmp = vetorDeAlimetos.filter((e) => !!e);
  tmp.forEach((alimento) => {
    valoresTransformados[0] += parseFloat(alimento[categorias[0]]);
    valoresTransformados[1] += parseFloat(alimento[categorias[1]]);
    valoresTransformados[2] += parseFloat(alimento[categorias[2]]);
    valoresTransformados[3] += parseFloat(alimento[categorias[3]]);
  });
  return [
    {
      data: valoresTransformados,
    },
  ];
  //[30, 40, 45, 50, 140];
};

class NewChar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          width: "100%",
          id: "responsive-chart",
          height: 380,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },

        xaxis: {
          categories: categorias,
        },

        dataLabels: {
          enabled: false,

          formatter: function (val) {
            return val + "%";
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: [
        {
          data: [30, 40, 45, 50, 140],
        },
      ],
    };
  }

  render() {
    const { nutrientesSelecionados } = this.props;
    console.log(nutrientesSelecionados);
    return (
      <div className="app">
        <div className="row">
          <div className="responsive-chart">
            <Chart
              options={this.state.options}
              series={transformarValores(nutrientesSelecionados)}
              type="bar"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewChar;
