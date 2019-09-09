import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{

  chartMappings = {
    "bar": Bar,
    "line": Line,
    "pie":  Pie
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }
  

  render(){
    const ChartType = this.chartMappings[this.props.type];
    return (
      <div className="chart">
        <ChartType
          data={this.props.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text: this.props.text,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;