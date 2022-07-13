import React, { Component } from "react";
import Chart from "react-apexcharts";

const categorias = [
  "Açucares",
  "Proteina",
  "Energia",
  "Carboidrato",
  "Gord Total",
  "Fibras",
];

/**
 *
 * @param {Array} vetorDeAlimetos
 */
const transformarValores = (vetorDeAlimetos) => {
  let valoresTransformados = [0, 0, 0, 0, 0, 0];
  const tmp = vetorDeAlimetos.filter((e) => !!e);
  tmp.forEach((alimento) => {
    valoresTransformados[0] += parseFloat(alimento[categorias[0]]);
    valoresTransformados[1] += parseFloat(alimento[categorias[1]]);
    valoresTransformados[2] += parseFloat(alimento[categorias[2]]);
    valoresTransformados[3] += parseFloat(alimento[categorias[3]]);
    valoresTransformados[4] += parseFloat(alimento[categorias[4]]);
    valoresTransformados[5] += parseFloat(alimento[categorias[5]]);
  });
  return [
    {
      data: valoresTransformados,
    },
  ];
};

class NewChar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          width: "70%",
          id: "responsive-chart",
          height: "auto%",
          type: "bar",
          background: "#41338f",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        theme: {
          mode: "dark",
          palette: "palette1",
          monochrome: {
            enabled: true,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        },
        xaxis: {
          categories: categorias,
        },

        yaxis: {
          show: true,
          showAlways: true,
          showForNullSeries: true,
          labels: {
            show: true,
            align: "right",
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
            formatter: (value) => {
              return value;
            },
          },
        },

        dataLabels: {
          enabled: true,

          formatter: function (energia) {
            return ((energia / 2000) * 100).toFixed(1) + "%";
            //return energia.toFixed(1);
          },
        },
        stroke: {
          width: 1,
          colors: ["#000"],
          strokeColor: "#775DD0",
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
          data: [],
        },
      ],
    };
  }

  render() {
    const { nutrientesSelecionados } = this.props;

    return (
      <div className="app">
        <div className="chart">
          <Chart
            options={this.state.options}
            series={transformarValores(nutrientesSelecionados)}
            type="bar"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default NewChar;
