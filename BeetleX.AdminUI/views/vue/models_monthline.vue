    <div>
        <div id="monthline" style="height:260px;">
        </div>

        <table v-if="full=='max'" class="table" style="margin-bottom:0px;">
            <caption style="text-align:center;font-size:12pt;font-weight:bold;">{{month}}</caption>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Customer</th>
                    <th>OrderDate</th>
                    <th>RequiredDate</th>
                    <th>ShipCountry</th>
                    <th>ShipCity</th>
                    <th>ShipAddress</th>
                    <th>RequiredDate</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in GetOrders.result.items">
                    <td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>
                    <td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>
                    <td>{{item.OrderDate}}</td>
                    <td>{{item.RequiredDate}}</td>
                    <td>{{item.ShipCountry}}</td>
                    <td>{{item.ShipCity}}</td>
                    <td>{{item.ShipAddress}}</td>
                    <td>{{item.ShipAddress}}</td>
                </tr>
            </tbody>
        </table>
    </div>
<script>
 {
        props: ["winsize", "panelStatus"],
        data: function () {
            return {
                TimeStatis: new beetlexAction("/TimeStatis"),
                GetOrders: new beetlexAction("/Orders", { index: 0, employeeid: 0, customerid: '' }, { pages: 0, items: [] }),
                timeline: null,
                full: this.panelStatus,
                month:'',
            };
        },
        watch: {
            winsize(val) {
                if (this.timeline)
                    this.timeline.resize();
            },
            panelStatus(val) {
                this.full = val;
            },
        },
        methods: {
            OnItemClick: function (e) {
                this.month = e.name;
                this.GetOrders.get({ size: 100, month: e.name });
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
                var dom = document.getElementById("monthline");
                that.timeline = echarts.init(dom);
                that.timeline.setOption(option, false);
                that.timeline.on('click', function (params) {
                    that.OnItemClick(params);
                });
            };
            this.TimeStatis.get();
        }
    }
</script>