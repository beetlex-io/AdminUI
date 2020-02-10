/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_home="";
 __models_home += '    <div>';
 __models_home += '        <h3 style="margin-top:0px;text-align:center">最新订单</h3>';
 __models_home += '        <table class="table" style="margin-bottom:0px;">';
 __models_home += '            <thead>';
 __models_home += '                <tr>';
 __models_home += '                    <th>OrderID</th>';
 __models_home += '                    <th>Employee</th>';
 __models_home += '                    <th>Customer</th>';
 __models_home += '                    <th>OrderDate</th>';
 __models_home += '                    <th>RequiredDate</th>';
 __models_home += '                    <th>ShipCountry</th>';
 __models_home += '                    <th>ShipCity</th>';
 __models_home += '                    <th>ShipAddress</th>';
 __models_home += '                    <th>RequiredDate</th>';
 __models_home += '                </tr>';
 __models_home += '            </thead>';
 __models_home += '            <tbody>';
 __models_home += '                <tr v-for="item in TopOrders.result.items">';
 __models_home += '                    <td>{{item.OrderID}}</td>';
 __models_home += '                    <td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>';
 __models_home += '                    <td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>';
 __models_home += '                    <td>{{item.OrderDate}}</td>';
 __models_home += '                    <td>{{item.RequiredDate}}</td>';
 __models_home += '                    <td>{{item.ShipCountry}}</td>';
 __models_home += '                    <td>{{item.ShipCity}}</td>';
 __models_home += '                    <td>{{item.ShipAddress}}</td>';
 __models_home += '                    <td>{{item.ShipAddress}}</td>';
 __models_home += '                </tr>';
 __models_home += '                <tr>';
 __models_home += '                    <td colspan="9" style="text-align:right;">';
 __models_home += '                        <a href="javascript:void(0)" @click="$emit(\'openwindow\', { id: \'orders\', title: \'订单列表\', model: \'models_orders\' })">更多...</a>';
 __models_home += '                    </td>';
 __models_home += '                </tr>';
 __models_home += '            </tbody>';
 __models_home += '        </table>';
 __models_home += '        <h3 style="margin-top:0px;text-align:center;">销量走势</h3>';
 __models_home += '        <div id="timeline" style="height:200px;">';
 __models_home += '';
 __models_home += '        </div>';
 __models_home += '        <div class="row" style="width:98%;padding-top:20px;">';
 __models_home += '            <div class="col-lg-6">';
 __models_home += '                <h3 style="margin-top:0px;text-align:center;">雇员销售比例</h3>';
 __models_home += '                <div id="employeePie" style="height:400px;">';
 __models_home += '';
 __models_home += '                </div>';
 __models_home += '            </div>';
 __models_home += '            <div class="col-lg-6">';
 __models_home += '                <h3 style="margin-top:0px;text-align:center;">客户比例</h3>';
 __models_home += '                <div id="customerPie" style="height:400px;">';
 __models_home += '';
 __models_home += '                </div>';
 __models_home += '            </div>';
 __models_home += '        </div>';
 __models_home += '    </div>';

    Vue.component('models_home', {
        data: function () {
            return {
                TopOrders: new beetlexAction("/orders", { index: 0, size: 5 }, { pages: 0, items: [] }),
                TimeStatis: new beetlexAction("/TimeStatis"),
                CustomerStatis: new beetlexAction("/CustomerStatis"),
                EmployeeStatis: new beetlexAction("/EmployeeStatis")
            }
        },
        methods: {
            OnOpenCustomer: function (item) {
                this.$emit('openwindow',
                    {
                        id: 'cust' + item.Customer.CustomerID,
                        title: '客户:' + item.Customer.CompanyName,
                        model: 'models_customerdetail',
                        data: { id: item.Customer.CustomerID }
                    }
                )
            },
            OnOpenEmployee: function (item) {
                this.$emit('openwindow',
                    {
                        id: 'emp' + item.Employee.EmployeeID,
                        title: '雇员:' + item.Employee.FirstName + ' ' + item.Employee.LastName,
                        model: 'models_employeedetail',
                        data: { id: item.Employee.EmployeeID }
                    }
                )
            }
        },
        template: __models_home,
        mounted: function () {

            this.TimeStatis.requested = function (r) {
                var option = {
                    grid: {
                        top: 10,
                        bottom: 20,
                        right: 20,
                        left: 60
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: []
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [],
                        type: 'line',
                        areaStyle: {},
                        smooth: true
                    }]
                };
                r.forEach(function (v) {
                    option.xAxis.data.push(v.Key);
                    option.series[0].data.push(v.Value);
                });
                var dom = document.getElementById("timeline");
                var myChart = echarts.init(dom);
                myChart.setOption(option, true);
            };
            this.EmployeeStatis.requested = function (r) {
                var option = {
                    grid: {
                        top: 0,
                        bottom: 0,
                        right: 20,
                        left: 20
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    series: [
                        {
                            name: '雇员',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: r,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                var dom = document.getElementById("employeePie");
                var myChart = echarts.init(dom);
                myChart.setOption(option, true);
            };

            this.CustomerStatis.requested = function (r) {
                var option = {
                    grid: {
                        top: 0,
                        bottom: 0,
                        right: 20,
                        left: 20
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    series: [
                        {
                            name: '客户',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: r,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                var dom = document.getElementById("customerPie");
                var myChart = echarts.init(dom);
                myChart.setOption(option, true);
            };

            this.TopOrders.get();
            this.TimeStatis.get();
            this.EmployeeStatis.get();
            this.CustomerStatis.get();
        }
    })
