import React from 'react';
import { Form } from "semantic-ui-react";

export class ActivityLevel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  

  
  handleChange = (e) => {
    const activity = e.target.value;
    this.props.onChange(activity); //manda pra fora
  }

  render() {
    
    return (
      <div>
        <label for="activity">Atividade Fisica</label>
        <select
          name="activity"
          id="activity"
          class=" "
          onChange={this.handleChange}
        >
          <optgroup>
            <option value="" disabled selected>
              Escolha uma opção
            </option>
            <option value="none">Baixa</option>
            <option value="moderate">Moderada</option>
            <option value="heavy">Intenso</option>
          </optgroup>
        </select>
      </div>
    );
  }
}
