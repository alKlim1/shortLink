import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
const MyChart = () => {
    const pieChartData = {
        labels: ["safari","firefox","mozilla"],
        datasets: [{
            data: [6,3,2],
            label: "visits",
            backgroundColor: ["#f60505","#033af3","#eee207"],
            hoverBackgroundColor: ["#fff", "#fff", "#fff"]
        }]
    };
    const pieChart = (
        <Pie
            type="pie"
            width={20}
            height={10}
            options={{
                title: {
                    display: true,
                    text: "использовали за последний месяц",
                    fontSize: 15
                },
                legend: {
                    display: true,
                    position: "right"
                }
            }}
            data={pieChartData}
            />
    );
    return pieChart;
    };
export default MyChart;