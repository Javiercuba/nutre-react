import React from 'react';

export class ActivityLevel extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const activity = e.target.value;
        this.props.onChange(activity);
    }

    render(){
        return (
            <div class="activity-level">
                <label for="activity">Atividade Fisica</label>
                <select name="activity" id="activity" class="browser-default custom-select" onChange={this.handleChange}>
                    <optgroup>
                        <option value="" disabled selected>intensidade de atividade fisica</option>
                        <option value="none">Baixa</option>
                        <option value="moderate">Moderada</option>
                        <option value="heavy">Heavy Exercise (6-7 days a week)</option>
                    </optgroup>  
                </select>
            </div>
        );
    }
}
