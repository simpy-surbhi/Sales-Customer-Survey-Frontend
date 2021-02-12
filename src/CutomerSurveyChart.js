import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { getSurvey, targetableclients, carmodelsData, avragefamilycar } from './Api'
import { Bar, Pie } from 'react-chartjs-2';
import './CustomerSurveyCart.css';

class CustomerSurveyForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            bardata : {},
            piedata : {},
            modelbardata: {},
            cars : [
                'BMW', 'Audi', 'Mercedes'
            ],
            selectedcar:null,
            averagecar:null,
        }
        this.selectCar = this.selectCar.bind(this);
    }

    avragefamilycar = () => {
        avragefamilycar().then((res) => {
            this.setState({averagecar:res.avg})
        }).catch((e)=>{
            console.log(e)
        })
    }

    selectCar(event) {
        let value = this.state.cars[event.target.id]
        this.setState({selectedcar:value})
        this.getcarModel(value)
    }

    componentDidMount(){
        this.avragefamilycar()
        this.getsurveyfn()
        this.getTargetClient()
    }

    getsurveyfn = () => {
        getSurvey().then((res) => {
            let colors = []
            for(let i = 0;i<res[0].length;i++){
                var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
                colors.push(ColorCode)
            }
            const data = {
                labels: res[0],
                datasets: [
                  {
                    label: "Survey",
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: res[1],
                  },
                ],
            };

            this.setState({bardata:data})
        }).catch((e)=>{
            console.log(e)
        })
    }

    getTargetClient = () => {
        targetableclients().then((res) => {
            let colors = []
            for(let i = 0;i<res[0].length;i++){
                var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
                colors.push(ColorCode)
            }
            const data = {
                labels: res[0],
                datasets: [
                  {
                    label: 'Percentage of Target Customers',
                    data: res[1],
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1,
                  },
                ],
              }
              this.setState({piedata:data})
        }).catch((e)=>{
            console.log(e)
        })
    }

    getcarModel = (carname) => {
        console.log(carname)
        carmodelsData(carname).then((res) => {
            let colors = []
            for(let i = 0;i<res[0].length;i++){
                var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
                colors.push(ColorCode)
            }
            const data = {
                labels: res[0],
                datasets: [
                  {
                    label: "Car Model Survey",
                    backgroundColor: colors,
                    borderColor:colors,
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(30,99,56,0.4)",
                    hoverBorderColor: "rgba(30,99,56,1)",
                    data: res[1],
                  },
                ],
            };
            
            this.setState({modelbardata:data})
        }).catch((e)=>{
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Survey Analysis </h1>
               
                <table style={{margin: "0px auto",width:"80%"}}>
                    <tr>
                        <td colSpan="2">
                    <h1 style={{textAlign:"center"}}>Average Cars Per Family: {this.state.averagecar}</h1>
                    </td>
                    </tr>
                    <br/>
                    <tr  height="100px"><td>
                <div>
                <h3 style={{textAlign: "Center"}}>
                                    Category Survey
                                    </h3>
                    <Bar
                        width="100%"
                        height="400px"
                        data={this.state.bardata}
                        options={{ responsive: true, maintainAspectRatio: false, scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.8
                            }]
                        } }}
                    />
                </div>  
                </td>
                    <td style={{verticalAlign:"top"}}>
                        <div>
                    <h3 style={{textAlign: "Center"}}>
                                    Target Survey
                                    </h3>
                                    </div>
                    <div>
                    
                    <Pie height="400px" data={this.state.piedata} options={{ responsive: true, maintainAspectRatio: false, }}/>
                </div>
                        </td>
                       
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div>
                                    <h3 style={{textAlign: "Center"}}>
                                    The Car Name and Model Distribution
                                    </h3>
                                <div class="dropdown">
                                    <button class="dropbtn">{this.state.selectedcar==null ? "Please select car" : this.state.selectedcar}</button>
                                        <div class="dropdown-content">
                                            { this.state.cars.map((values, index)=>{
                                                return <a id={index} onClick={this.selectCar}>{values}</a>
                                            })}
                                        </div>
                                </div>
                                <br/><br/>
                                <div style={{margin: "0px auto"}} width="100%">
                                    <Bar
                                        width="100%"
                                        height="400px"
                                        data={this.state.modelbardata}
                                        options={{ responsive: true, maintainAspectRatio: false, scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero:true
                                                }
                                            }],
                                            xAxes: [{
                                                barPercentage: 0.3
                                            }]
                                        } }}
                                    />
                                </div>
                                </div>
                            </td>
                        </tr>
                        </table>
               <br/><br/><br/><br/><br/>
             
             
               
               <br/><br/><br/>
            </div>
        )
    }
}

export default CustomerSurveyForm;