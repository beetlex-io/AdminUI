/*
* Generate component javascript with vuejs Copyright © beetlex.io 2019-2020 email:admin@beetlex.io 
*/
var __models_about=""+ '<div>'+ '<div>'+ '<div style="text-align:center">'+ '<br />'+ '<h3>Beetlex+Vuejs+Bootstrap</h3>'+ '<p><a href="https://github.com/IKende/AdminUI" target="_blank">https://github.com/IKende/AdminUI</a></p>'+ '<h3><a href="http://element.beetlex.io" target="_blank"> Beetlex+Vuejs+ElementUI</a></h3>'+ '<br />'+ '</div>'+ '</div>'+ '</div>';
    Vue.component('models_about', {
        data: function () {
            return {

            }
        },
        methods: {

        },
        template: __models_about,
    })
var __models_customerdetail=""+ '<div>'+ '<div class="form-horizontal">'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">CustomerID</label>'+ '<div class="col-sm-6">'+ '<input type="text" readonly class="form-control" :value="GetDetail.result.item.CustomerID">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">CompanyName</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.CompanyName">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">ContactName</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.ContactName">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">ContactTitle</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.ContactTitle">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Address</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.Address">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">City</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.City">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">PostalCode</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.PostalCode">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Country</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.Country">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Phone</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.Phone">'+ '</div>'+ '</div>'+ '</div>'+ '<table class="table">'+ '<thead>'+ '<tr>'+ '<th>OrderID</th>'+ '<th>Employee</th>'+ '<th>OrderDate</th>'+ '<th>RequiredDate</th>'+ '<th>ShipCountry</th>'+ '<th>ShipCity</th>'+ '<th>ShipAddress</th>'+ '<th>RequiredDate</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in GetDetail.result.orders.items">'+ '<td>{{item.OrderID}}</td>'+ '<td>{{item.Employee.FirstName}} {{item.Employee.LastName}}</td>'+ '<td>{{item.OrderDate}}</td>'+ '<td>{{item.RequiredDate}}</td>'+ '<td>{{item.ShipCountry}}</td>'+ '<td>{{item.ShipCity}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('models_customerdetail', {
        props: ["token"],
        data: function () {
            return {
                employeeid: this.token.id,
                GetDetail: new beetlexAction("/GetCustomerDetail", { id: 0 }, { item: {}, orders: [] }),
            }
        },
        methods: {

        },
        watch: {
            token(val) {
                this.employeeid = val.id;
                this.GetDetail.get({ id: val.id });
            }
        },
        mounted: function () {
            this.GetDetail.get({ id: this.token.id });
        },
        template: __models_customerdetail,
    })
var __models_customers=""+ '<div>'+ '<table class="table">'+ '<thead>'+ '<tr>'+ '<th>CustomerID</th>'+ '<th>CompanyName</th>'+ '<th>ContactName</th>'+ '<th>ContactTitle</th>'+ '<th>Phone</th>'+ '<th>Fax</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in items">'+ '<td><a href="javascript:void(0)" @click="OnOpen(item)"> {{item.CustomerID}}</a></td>'+ '<td>{{item.CompanyName}}</td>'+ '<td>{{item.ContactName}}</td>'+ '<td>{{item.ContactTitle}}</td>'+ '<td>{{item.Phone}}</td>'+ '<td>{{item.Fax}}</td>'+ '</tr>'+ '<tr v-if="GetCustomers.data.index<pages">'+ '<td colspan="6" style="text-align:right;">'+ '<a href="javascript:void(0)" @click="GetCustomers.get()">({{GetCustomers.data.index}}/{{pages}})更多...</a>'+ '</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('models_customers', {
        data: function () {
            return {
                GetCustomers: new beetlexAction("/Customers", { index: 0 }, { pages: 0, items: [] }),
                pages: 0,
                items: []
            }
        },
        methods: {
            OnOpen: function (item) {
                this.$open('cust' + item.CustomerID, '客户:' + item.CompanyName, 'models_customerdetail', { id: item.CustomerID });
            }
        },
        mounted: function () {
            var _this = this;
            this.GetCustomers.requested = function (r) {
                _this.pages = r.pages;
                this.data.index++;
                r.items.forEach(function (v) {
                    _this.items.push(v);
                });
            };
            this.GetCustomers.get();
        },
        template: __models_customers,
    })
var __model_customerspie=""+ '<div>'+ '<div id="customerspie" style="height:400px;">'+ '</div>'+ '<table v-if="full==\'max\'" class="table" style="margin-bottom:0px;">'+ '<caption style="text-align:center;font-size:12pt;font-weight:bold;">{{title}}</caption>'+ '<thead>'+ '<tr>'+ '<th>Employee</th>'+ '<th>Customer</th>'+ '<th>OrderDate</th>'+ '<th>RequiredDate</th>'+ '<th>ShipCountry</th>'+ '<th>ShipCity</th>'+ '<th>ShipAddress</th>'+ '<th>RequiredDate</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in GetOrders.result.items">'+ '<td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>'+ '<td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>'+ '<td>{{item.OrderDate}}</td>'+ '<td>{{item.RequiredDate}}</td>'+ '<td>{{item.ShipCountry}}</td>'+ '<td>{{item.ShipCity}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('model_customerspie', {
        props: ["winsize","panelStatus"],
        data: function () {
            return {
                CustomerStatis: new beetlexAction("/CustomerStatis"),
                GetOrders: new beetlexAction("/Orders", { index: 0, employeeid: 0, customerid: '' }, { pages: 0, items: [] }),
                customerPie: null,
                full: this.panelStatus,
                title: '',
            };
        },
        watch: {
            winsize(val) {
                if (this.customerPie)
                    this.customerPie.resize();
            },
            panelStatus(val) {
                this.full = val;
            },
        },
        methods: {
            OnItemClick: function (e) {
                this.title = e.name;
                this.GetOrders.get({ index: 0, size: 100, customerid: e.data.CustomerID });
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
                var dom = document.getElementById("customerspie");
                that.customerPie = echarts.init(dom);
                that.customerPie.setOption(option, true);
                that.customerPie.on('click', function (params) {
                    that.OnItemClick(params);
                });
            };
            this.CustomerStatis.get();
        },
        template: __model_customerspie,
    })
var __models_employeedetail=""+ '<div>'+ '<div class="form-horizontal">'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">ID</label>'+ '<div class="col-sm-6">'+ '<input type="number" readonly class="form-control" :value="GetDetail.result.item.EmployeeID">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">FirstName</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.FirstName">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">LastName</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.LastName">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Title</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.Title">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Phone</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.HomePhone">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Country</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.Country">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Region</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.Region">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">City</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.City">'+ '</div>'+ '</div>'+ '<div class="form-group">'+ '<label for="inputEmail3" class="col-sm-2 control-label">Address</label>'+ '<div class="col-sm-6">'+ '<input type="text" class="form-control" :value="GetDetail.result.item.Address">'+ '</div>'+ '</div>'+ '</div>'+ '<table class="table">'+ '<thead>'+ '<tr>'+ '<th>OrderID</th>'+ '<th>Customer</th>'+ '<th>OrderDate</th>'+ '<th>RequiredDate</th>'+ '<th>ShipCountry</th>'+ '<th>ShipCity</th>'+ '<th>ShipAddress</th>'+ '<th>RequiredDate</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in GetDetail.result.orders.items">'+ '<td>{{item.OrderID}}</td>'+ '<td>{{item.Customer.CompanyName}}</td>'+ '<td>{{item.OrderDate}}</td>'+ '<td>{{item.RequiredDate}}</td>'+ '<td>{{item.ShipCountry}}</td>'+ '<td>{{item.ShipCity}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('models_employeedetail', {
        props: ["token"],
        data: function () {
            return {
                employeeid: this.token.id,
                GetDetail: new beetlexAction("/GetEmployeeDetail", { id: 0 }, { item: {}, orders: [] }),
              
            }
        },
        methods: {

        },
        watch: {
            token(val) {
                this.employeeid = val.id;
                this.GetDetail.get({ id: val.id });
            }
        },
        mounted: function () {
            var _this = this;
            this.GetDetail.get({ id: this.token.id });
        },
        template: __models_employeedetail,
    })
var __models_employees=""+ '<div>'+ '<table class="table">'+ '<thead>'+ '<tr>'+ '<th>Name</th>'+ '<th>Title</th>'+ '<th>Region</th>'+ '<th>City</th>'+ '<th>Country</th>'+ '<th>Address</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in GetEmployees.result">'+ '<td><a href="javascript:void(0)" @click="OnOpen(item)">{{item.FirstName}} {{item.LastName}}</a> </td>'+ '<td>{{item.Title}}</td>'+ '<td>{{item.Region}}</td>'+ '<td>{{item.City}}</td>'+ '<td>{{item.Country}}</td>'+ '<td>{{item.Address}}</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('models_employees', {
        data: function () {
            return {
                GetEmployees: new beetlexAction("/Employees", null, []),
            }
        },
        methods: {
            OnOpen: function (item) {
                this.$open('emp' + item.EmployeeID, '雇员:' + item.FirstName + ' ' + item.LastName, 'models_employeedetail', { id: item.EmployeeID });
            }
        },
        mounted: function () {
            this.GetEmployees.get();
        },
        template: __models_employees,
    })
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
var __footer=""+ '<div class="folder">'+ '<p style="text-align:center;">'+ '<a href="https://github.com/IKende/AdminUI" target="_blank">BeetleX.AdminUI</a> copyright © 2020 <a href="http://beetlex.io" target="_blank">beetlex.io</a>'+ 'email: admin@beetlex.io <a href="https://github.com/ikende" target="_blank">github.com</a>'+ '</p>'+ '</div>';
    Vue.component('page_footer', {
        data: function () {
            return {
            }
        },
        template: __footer,
    })
var __models_home=""+ '<div style="width:99%;">'+ '<div class="row">'+ '<div class="col-lg-6">'+ '<models_panel :title="\'销售走势\'" :child="\'models_monthline\'" :winsize="winsize"></models_panel>'+ '<models_panel :title="\'雇员销售比例\'" :child="`model_employeesspie`" :winsize="winsize"></models_panel>'+ '</div>'+ '<div class="col-lg-6">'+ '<models_panel :title="\'最新订单\'" :child="`models_neworders`"></models_panel>'+ '<models_panel :title="\'客户订单比例\'" :child="`model_customerspie`" :winsize="winsize"></models_panel>'+ '</div>'+ '</div>'+ '</div>';
    Vue.component('models_home', {
        props: ["winsize"],
        data: function () {
            return {
               
            }
        },
        methods: {
           
        },
        template: __models_home,
        watch: {
            winsize(val) {
              
            },
        },
        mounted: function () {
          
        }
    })
var __menu=""+ '<div :class="[full==\'min\'?\'menu_full\':\'menu_min\']">'+ '<div>'+ '<h3 v-if="full==\'min\'" style="margin-top:10px;margin-right:-5px;padding-left:40px;font-size:11pt;"><a href="http://beetlex.io" target="_blank">BeetleX.AdminUI</a></h3>'+ '<a v-if="full==\'min\'" href="javascript:void(0)" @click="OnResizeMenu(\'max\')" style="float:right;margin-top:-30px;">'+ '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+ '</a>'+ '<hr v-if="full==\'min\'" style="padding:4px;margin:0px;" />'+ '<ul>'+ '<li v-if="full!=\'min\'"><a href="javascript:void(0)" @click="OnResizeMenu(\'min\')">'+ '<i class="glyphicon glyphicon-chevron-right" aria-hidden="true"></i></a></li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenHome">'+ '<i class="glyphicon glyphicon-home" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">主页</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenCustomer">'+ '<i class="glyphicon glyphicon-user" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">客户</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenOrders">'+ '<i class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">订单</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenEmployees">'+ '<i class="glyphicon glyphicon-user" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">雇员</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenAbout">'+ '<i class="glyphicon glyphicon-info-sign" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">关于</span>'+ '</a>'+ '</li>'+ '</ul>'+ '</div>'+ '</div>';
    Vue.component('main_menu', {
        data: function () {
            return {
                full: 'min',
            }
        },
        methods: {
            OnResizeMenu: function (value) {
                this.full = value;
                this.$emit('menu_resize', value)
            },
            OnOpenHome: function () {
                this.$open('home', '主页', 'models_home');
            },
            OnOpenCustomer: function () {
                this.$open('customers', '客户列表', 'models_customers');
            },
            OnOpenEmployees: function () {
                this.$open('employees', '雇员列表', 'models_employees');
            },
            OnOpenOrders: function () {
                this.$open('orders', '订单列表', 'models_orders');
            },
            OnOpenAbout: function () {
                this.$open('about', '关于', 'models_about');
            },
        },
        template: __menu,
        mounted: function () { }
    });
var __model_monthline=""+ '<div>'+ '<div id="monthline" style="height:260px;">'+ '</div>'+ '<table v-if="full==\'max\'" class="table" style="margin-bottom:0px;">'+ '<caption style="text-align:center;font-size:12pt;font-weight:bold;">{{month}}</caption>'+ '<thead>'+ '<tr>'+ '<th>Employee</th>'+ '<th>Customer</th>'+ '<th>OrderDate</th>'+ '<th>RequiredDate</th>'+ '<th>ShipCountry</th>'+ '<th>ShipCity</th>'+ '<th>ShipAddress</th>'+ '<th>RequiredDate</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in GetOrders.result.items">'+ '<td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>'+ '<td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>'+ '<td>{{item.OrderDate}}</td>'+ '<td>{{item.RequiredDate}}</td>'+ '<td>{{item.ShipCountry}}</td>'+ '<td>{{item.ShipCity}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('models_monthline', {
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
        },
        template: __model_monthline,
    })
var __models_neworders=""+ '<table class="table" style="margin-bottom:0px;">'+ '<thead>'+ '<tr>'+ '<th>Employee</th>'+ '<th>Customer</th>'+ '<th>OrderDate</th>'+ '<th v-if="full==\'max\'">RequiredDate</th>'+ '<th v-if="full==\'max\'">ShipCountry</th>'+ '<th v-if="full==\'max\'">ShipCity</th>'+ '<th v-if="full==\'max\'">ShipAddress</th>'+ '<th v-if="full==\'max\'">RequiredDate</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in TopOrders.result.items">'+ '<td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>'+ '<td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>'+ '<td>{{item.OrderDate}}</td>'+ '<td v-if="full==\'max\'">{{item.RequiredDate}}</td>'+ '<td v-if="full==\'max\'">{{item.ShipCountry}}</td>'+ '<td v-if="full==\'max\'">{{item.ShipCity}}</td>'+ '<td v-if="full==\'max\'">{{item.ShipAddress}}</td>'+ '<td v-if="full==\'max\'">{{item.ShipAddress}}</td>'+ '</tr>'+ '<tr v-if="full!=\'max\'">'+ '<td colspan="3" style="text-align:right;">'+ '<a href="javascript:void(0)" @click="$open(\'orders\',\'订单列表\', \'models_orders\')">更多...</a>'+ '</td>'+ '</tr>'+ '</tbody>'+ '</table>';
    Vue.component('models_neworders', {
        props: ['panelStatus'],
        data: function () {
            return {
                TopOrders: new beetlexAction("/orders", { index: 0, size: 5 }, { pages: 0, items: [] }),
                full: this.panelStatus,
            };
        },
        watch: {
            panelStatus(val) {
                this.full = val;
                if (this.full == 'max') {
                    this.TopOrders.get({ index: 0, size: 50 })
                }
                else {
                    this.TopOrders.get({ index: 0, size: 5 })
                }

            },
        },
        methods: {
            OnOpenCustomer: function (item) {
                this.$open('cust' + item.Customer.CustomerID, '客户:' + item.Customer.CompanyName, 'models_customerdetail', { id: item.Customer.CustomerID });
            },
            OnOpenEmployee: function (item) {
                this.$open('emp' + item.Employee.EmployeeID, '雇员:' + item.Employee.FirstName + ' ' + item.Employee.LastName, 'models_employeedetail', { id: item.Employee.EmployeeID });
            }
        },
        mounted: function () {
            this.TopOrders.get();
        },
        template: __models_neworders,
    })
var __models_orders=""+ '<div>'+ '<div class="form-inline">'+ '<div class="form-group">'+ '<label for="exampleInputName2">雇员</label>'+ '<select class="form-control" v-model="GetOrders.data.employeeid">'+ '<option value="0">全部</option>'+ '<option v-for="item in GetEmployeeAndCustomer.result.employees" :value="item.EmployeeID">{{item.FirstName}} {{item.LastName}}</option>'+ '</select>'+ '</div>'+ '<div class="form-group">'+ '<label for="exampleInputEmail2">客户</label>'+ '<select class="form-control" v-model="GetOrders.data.customerid">'+ '<option value="">全部</option>'+ '<option v-for="item in GetEmployeeAndCustomer.result.customers" :value="item.CustomerID">{{item.CompanyName}}</option>'+ '</select>'+ '</div>'+ '<button type="button" class="btn btn-default" @click="GetOrders.data.index=0;items=[];GetOrders.get()">查询</button>'+ '</div>'+ '<table class="table">'+ '<thead>'+ '<tr>'+ '<th>OrderID</th>'+ '<th>Employee</th>'+ '<th>Customer</th>'+ '<th>OrderDate</th>'+ '<th>RequiredDate</th>'+ '<th>ShipCountry</th>'+ '<th>ShipCity</th>'+ '<th>ShipAddress</th>'+ '<th>RequiredDate</th>'+ '</tr>'+ '</thead>'+ '<tbody>'+ '<tr v-for="item in items">'+ '<td>{{item.OrderID}}</td>'+ '<td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>'+ '<td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>'+ '<td>{{item.OrderDate}}</td>'+ '<td>{{item.RequiredDate}}</td>'+ '<td>{{item.ShipCountry}}</td>'+ '<td>{{item.ShipCity}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '<td>{{item.ShipAddress}}</td>'+ '</tr>'+ '<tr v-if="GetOrders.data.index<pages">'+ '<td colspan="9" style="text-align:right;">'+ '<a href="javascript:void(0)" @click="GetOrders.get()">({{GetOrders.data.index}}/{{pages}})更多...</a>'+ '</td>'+ '</tr>'+ '</tbody>'+ '</table>'+ '</div>';
    Vue.component('models_orders', {
        
        data: function () {
            return {
                GetOrders: new beetlexAction("/Orders", { index: 0, employeeid: 0, customerid: '' }, []),
                pages: 0,
                items: [],
                GetEmployeeAndCustomer: new beetlexAction("/GetEmployeeAndCustomer", null, { employees: [], customers: [] }),
            }
        },
        methods: {
            OnOpenCustomer: function (item) {
                this.$open('cust' + item.Customer.CustomerID, '客户:' + item.Customer.CompanyName, 'models_customerdetail', { id: item.Customer.CustomerID });
            },
            OnOpenEmployee: function (item) {
                this.$open('emp' + item.Employee.EmployeeID, '雇员:' + item.Employee.FirstName + ' ' + item.Employee.LastName, 'models_employeedetail', { id: item.Employee.EmployeeID });
            }
        },
        mounted: function () {
            var _this = this;
            this.GetEmployeeAndCustomer.get();
            this.GetOrders.requested = function (r) {
                _this.pages = r.pages;
                this.data.index++;
                r.items.forEach(function (v) {
                    _this.items.push(v);
                });
            };
            this.GetOrders.get();
        },
        template: __models_orders,
    })
var __model_panel=""+ '<div>'+ '<div :class="GetStyle()">'+ '<div class="model-panel-title">'+ '<h4>{{title}}</h4>'+ '<a href="javascript:void(0)" @click="OnResize"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></a>'+ '</div>'+ '<hr style="padding:0px;margin:0px;" />'+ '<div :class="[panelStatus==\'max\'?\'model-panel-body-full\':\'model-panel-body\']">'+ '<component :is="childModel" :token="childData" :winsize="resize" :panelStatus="panelStatus"></component>'+ '</div>'+ '</div>'+ '</div>';
    Vue.component('models_panel', {
        props: ["winsize", "child", "token", "title"],
        data: function () {
            return {
                resize: this.winsize,
                childModel: this.child,
                childData: this.token,
                panelStatus: 'none',           
            }
        },
        watch: {
            winsize(val) {
                this.resize = val;
            },
            token(val) {
                this.childData = val;
            },
        },
        methods: {
            OnOpenWindow: function (event) {
                this.$open(event.id, event.title, event.model, event.data);
            },
            GetStyle: function () {
                if (this.panelStatus == 'none')
                    return "model-panel";
                if (this.$fullScreen() == 'max') {
                    return "model-panel-full-max";
                }
                else {
                    return "model-panel-full";
                }
            },
            OnResize: function () {
                if (this.panelStatus == 'none') {
                    this.panelStatus = 'max';
                }
                else {
                    this.panelStatus = 'none';
                }
                this.resize++;
            }
        },
        mounted: function () {

        },
        template: __model_panel,
    })
var __windowsbar=""+ '<div class="windows_bar" :style="{left:(fullStatus==\'max\'?\'70px\':\'270px\')}">'+ '<ul class="nav nav-tabs" style="display:flex" id="windowsbar">'+ '<li v-for="item in items" role="presentation" :class="[select==item.id?\'active\':\'\']" :title="item.title">'+ '<a href="javascript:void(0)" @click="$open(item.id,item.title,item.model,item.data)" :title="item.title">'+ '<span :style="{maxWidth:(select==item.id?(selectWidth+\'px\'):(maxWidth+\'px\'))}">{{item.title}}</span>'+ '</a>'+ '<img v-if="item.id!=\'home\'" @click="OnClose(item)" src="/images/tabclose.png" />'+ '</li>'+ '</ul>'+ '</div>';
    Vue.component('windows_bar', {
        props: ['windows', 'full', 'selectwindow'],
        data: function () {
            return {
                fullStatus: this.full,
                items: this.windows || [],
                select: this.selectwindow,
                maxWidth: 100,
                selectWidth:300,
            }
        },
        watch: {
            full(val) {
                this.fullStatus = val;
            },
            windows(val) {
                this.items = val;
                this.onResize();
            },
            selectwindow(val) {
                this.select = val;
                this.onResize();
            },
        },
        methods: {
            OnClose: function (e) {
                this.$emit('close', e);
            },
            GetSelectWidth: function (str) {
                var len = 0;
                for (var i = 0; i < str.length; i++) {
                    var c = str.charCodeAt(i);
                    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                        len++;
                    }
                    else {
                        len += 2;
                    }
                }
                return len;  
            }
            ,
            onResize: function () {
                this.selectWidth = 50;
                var that = this;
                this.items.forEach(function (v) {
                    if (that.select == v.id) {
                        that.selectWidth = that.GetSelectWidth(v.title) * 8;
                    }
                });
                var width = document.getElementById('windowsbar').clientWidth - this.selectWidth - 48 * (this.items.length - 1)-20;
                if (this.items.length > 1) {
                    this.maxWidth = width / (this.items.length - 1);
                    if (this.maxWidth < 20)
                        this.maxWidth == 20;
                }
                else {
                    this.maxWidth = 300;
                }
            },
        },
        template: __windowsbar,
        mounted: function () {

        }
    });
