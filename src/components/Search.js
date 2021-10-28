import React, { useEffect } from "react";
import _ from "lodash";
import { Search, Grid, Header, Segment, Label } from "semantic-ui-react";


 
const tasks = [
  {
    taskId: 1,
    taskName: "Clean the bathroom",
    taskStatus: "Complete",
  },
  {
    taskId: 2,
    taskName: "Learn filtering data in React",
    taskStatus: "To do",
  },
  {
    taskId: 3,
    taskName: "Fix the bug on React project",
    taskStatus: "To do",
  },
  {
    taskId: 4,
    taskName: "Fix the car",
    taskStatus: "Complete",
  },
];
console.log(tasks);
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
const resultRenderer = ({ taskName }) => <Label content={taskName} />;

export default function SearchExampleStandard() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;
  

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.taskName);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(tasks, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={loading}
            onResultSelect={(e, data) =>
              dispatch({
                type: "UPDATE_SELECTION",
                selection: data.result.taskName,
              })
            }
            onSearchChange={handleSearchChange}
            resultRenderer={resultRenderer}
            results={results}
            value={value}
          />
        </Grid.Column>

        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify({ loading, results, value }, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(tasks, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
