import React, { useEffect,useState } from "react";
import _ from "lodash";
import { Search, Label, Table, Grid, Header, Segment } from "semantic-ui-react";

var result = [];
var teste = [];
const ParseCSV = (csv) => {
  const lines = csv.split("\n");
  var headers = lines[0].split(",");
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return JSON.stringify(result);
};

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const resultRenderer = ({ Nome }) => <Label content={Nome} />;


export default function SearchExampleStandard() {
  
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  useEffect(() => {
    fetch("./nutrientes.csv")
      .then((r) => r.text())
      .then((text) => {
        ParseCSV(text);
      });
  }, []);

  
  const timeoutRef = React.useRef();

  const handleSearchChange = React.useCallback((e, data) => {
    console.log(data);
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.Nome);
      
      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(result, isMatch),
      });
      console.log(_.filter(result, isMatch));
    }, 300);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);


  return (
    <div className="form-search">
      <Grid>
        Selecione os itens da sua refeição
        <Search
          
          className="search-input"
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({
              type: "UPDATE_SELECTION",
              selection: data.result.Nome,
            })
          }
          Label="teste"
          onSearchChange={handleSearchChange}
          resultRenderer={resultRenderer}
          results={results}
          value={value}
        />
      </Grid>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Medida caseira</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>banana</Table.Cell>
            <Table.Cell>unidade</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
