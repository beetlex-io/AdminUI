/*
* Generate component javascript with vuejs Copyright © beetlex.io 2019-2020 email:admin@beetlex.io 
*/
var __model_employeesspie=""+ '<div>'+ '<div id="employeespie" style="height:400px;">'+ '</div>'+ '<table v-if="full==\'max\'" class="table" style="margin-bottom:0px;">'+ '<caption style="text-align:center;font-size:12pt;font-weight:bold;">{{title}}</caption>'+ '<thead>'+ '<tr>'+ '<th>Employee</th>'+ '<th>Customer</th>'+ '<th>OrderDate</th>'+ '<th>RequiredDate</th>'+ '<th>ShipCountry</th>'+ '<th>ShipCity</th>'+ '<th>ShipAddress</th>'+ '<th>RequiredDate</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in GetOrders.result.items">'+ '<td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>'+ '<td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>'+ '<td>{{item.OrderDate}}</td>'+ '<td>{{item.RequiredDate}}</td>'+ '<td>{{item.ShipCountry}}</td>'+ '<td>{{item.ShipCity}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('model_employeesspie', {
        props: ["winsize", "panelStatus"],
        data: function () {
            return {
                EmployeeStatis: new beetlexAction("/EmployeeStatis"),
                GetOrders: new beetlexAction("/Orders", { index: 0, employeeid: 0, customerid: '' }, { pages: 0, items: [] }),
                employeePie: null,
                full: this.panelStatus,
                title:'',
            };
        },
        watch: {
            winsize(val) {
                if (this.employeePie)
                    this.employeePie.resize();
            },
            panelStatus(val) {
                this.full = val;
            },
        },
        methods: {
            OnItemClick: function (e) {
                this.title = e.name;
                this.GetOrders.get({ index: 0, size: 100, employeeid: e.data.EmployeeID });
                console.log(e);
            },
            OnOpenCustomer: function (item) {
                this.$open('cust' + item.Customer.CustomerID, '客户:' + item.Customer.CompanyName, 'models_customerdetail', { id: item.Customer.CustomerID });
            },
            OnOpenEmployee: function (item) {
                this.$open('emp' + item.Employee.EmployeeID, '雇员:' + item.Employee.FirstName + ' ' + item.Employee.LastName, 'models_employeedetail', { id: item.Employee.EmployeeID });
            }
        },
        mounted: function () {
            var that = this;
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
                var dom = document.getElementById("employeespie");
                that.employeePie = echarts.init(dom);
                that.employeePie.setOption(option, true);
                that.employeePie.on('click', function (params) {
                    that.OnItemClick(params);
                });
            };
            this.EmployeeStatis.get();
        },
        template: __model_employeesspie,
    })
