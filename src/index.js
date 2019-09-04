import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import "./styles.css";
export default class App extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }
  render() {
    var data = [
      {
        Month: "Jan",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "Feb",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8400
      },
      {
        Month: "March",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "April",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "May",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "June",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      }
    ];
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="ETH"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="BTC"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);