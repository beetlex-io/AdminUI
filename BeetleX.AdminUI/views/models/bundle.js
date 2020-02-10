/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __windowsbar="";
 __windowsbar += '    <div class="windows_bar" :style="{left:(fullStatus==\'max\'?\'60px\':\'260px\')}">';
 __windowsbar += '';
 __windowsbar += '        <ul class="nav nav-tabs" style="display:flex">';
 __windowsbar += '            <li v-for="item in items" role="presentation" :class="[select==item.id?\'active\':\'\']">';
 __windowsbar += '                <a href="javascript:void(0)" @click="$emit(\'openwindow\', item)">{{item.title}}</a>';
 __windowsbar += '                <img v-if="item.id!=\'home\'" @click="OnClose(item)" style="position:relative;float:right;margin-top:-30px;padding-right:4px;cursor:pointer" src="/images/tabclose.png"/>';
 __windowsbar += '            </li>';
 __windowsbar += '        </ul>';
 __windowsbar += '    </div>';

    Vue.component('windows_bar', {
        props: ['windows', 'full', 'selectwindow'],
        data: function () {
            return {
                fullStatus: this.full,
                items: this.windows || [],
                select: this.selectwindow
            }
        },
        watch: {
            full(val) {
                this.fullStatus = val;
            },
            windows(val) {
                this.items = val;
            },
            selectwindow(val) {
                this.select = val;
            },
        },
        methods: {
            OnClose: function (e) {
                this.$emit('close', e);
            }
        },
        template: __windowsbar,
        mounted: function () {

        }
    });

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_orders="";
 __models_orders += '    <div>';
 __models_orders += '        <div class="form-inline">';
 __models_orders += '            <div class="form-group">';
 __models_orders += '                <label for="exampleInputName2">雇员</label>';
 __models_orders += '                <select class="form-control" v-model="GetOrders.data.employeeid">';
 __models_orders += '                    <option value="0">全部</option>';
 __models_orders += '                    <option v-for="item in GetEmployeeAndCustomer.result.employees" :value="item.EmployeeID">{{item.FirstName}} {{item.LastName}}</option>';
 __models_orders += '                </select>';
 __models_orders += '            </div>';
 __models_orders += '            <div class="form-group">';
 __models_orders += '                <label for="exampleInputEmail2">客户</label>';
 __models_orders += '                <select class="form-control" v-model="GetOrders.data.customerid">';
 __models_orders += '                    <option value="">全部</option>';
 __models_orders += '                    <option v-for="item in GetEmployeeAndCustomer.result.customers" :value="item.CustomerID">{{item.CompanyName}}</option>';
 __models_orders += '';
 __models_orders += '                </select>';
 __models_orders += '            </div>';
 __models_orders += '            <button type="button" class="btn btn-default" @click="GetOrders.data.index=0;items=[];GetOrders.get()">查询</button>';
 __models_orders += '        </div>';
 __models_orders += '';
 __models_orders += '        <table class="table">';
 __models_orders += '            <thead>';
 __models_orders += '                <tr>';
 __models_orders += '                    <th>OrderID</th>';
 __models_orders += '                    <th>Employee</th>';
 __models_orders += '                    <th>Customer</th>';
 __models_orders += '                    <th>OrderDate</th>';
 __models_orders += '                    <th>RequiredDate</th>';
 __models_orders += '                    <th>ShipCountry</th>';
 __models_orders += '                    <th>ShipCity</th>';
 __models_orders += '                    <th>ShipAddress</th>';
 __models_orders += '                    <th>RequiredDate</th>';
 __models_orders += '                </tr>';
 __models_orders += '            </thead>';
 __models_orders += '            <tbody>';
 __models_orders += '                <tr v-for="item in items">';
 __models_orders += '                    <td>{{item.OrderID}}</td>';
 __models_orders += '                    <td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>';
 __models_orders += '                    <td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>';
 __models_orders += '                    <td>{{item.OrderDate}}</td>';
 __models_orders += '                    <td>{{item.RequiredDate}}</td>';
 __models_orders += '                    <td>{{item.ShipCountry}}</td>';
 __models_orders += '                    <td>{{item.ShipCity}}</td>';
 __models_orders += '                    <td>{{item.ShipAddress}}</td>';
 __models_orders += '                    <td>{{item.ShipAddress}}</td>';
 __models_orders += '                </tr>';
 __models_orders += '                <tr v-if="GetOrders.data.index<pages">';
 __models_orders += '                    <td colspan="9" style="text-align:right;">';
 __models_orders += '                        <a href="javascript:void(0)" @click="GetOrders.get()">({{GetOrders.data.index}}/{{pages}})更多...</a>';
 __models_orders += '                    </td>';
 __models_orders += '                </tr>';
 __models_orders += '            </tbody>';
 __models_orders += '        </table>';
 __models_orders += '';
 __models_orders += '    </div>';

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

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __menu="";
 __menu += '    <div :class="[full==\'min\'?\'menu_full\':\'menu_min\']">';
 __menu += '        <div v-if="full==\'min\'">';
 __menu += '            <h3 style="margin-top:10px;margin-right:-5px;padding-left:20px;">BeetleX.AdminUI</h3>';
 __menu += '            <a href="javascript:void(0)" @click="OnResizeMenu(\'max\')" style="float:right;margin-top:-35px;"><img style="width:24px;" src="/images/min.png" /></a>';
 __menu += '            <hr style="padding:4px;margin:0px;" />';
 __menu += '            <ul>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenHome"><img src="/images/home.png" style="height:32px;" />主页</a></li>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenCustomer"><img src="/images/customer.png" style="height:32px;" />客户</a></li>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenOrders"><img src="/images/order.png" style="height:32px;" />订单</a></li>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenEmployees"><img src="/images/employee.png" style="height:32px;" />雇员</a></li>';
 __menu += '                <!--<li><a href="javascript:void(0)"  @click="OnOpenAbout"><img src="/images/about.png" style="height:32px;" />关于</a></li>-->';
 __menu += '            </ul>';
 __menu += '        </div>';
 __menu += '        <div v-else>';
 __menu += '            <ul>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnResizeMenu(\'min\')"><img src="/images/full.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenHome"><img src="/images/home.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenCustomer"><img src="/images/customer.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenOrders"><img src="/images/order.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenEmployees"><img src="/images/employee.png" style="height:32px;" /></a></li>';
 __menu += '                <!--<li><a href="javascript:void(0)" @click="OnOpenAbout"><img src="/images/about.png" style="height:32px;" /></a></li>-->';
 __menu += '';
 __menu += '            </ul>';
 __menu += '        </div>';
 __menu += '    </div>';

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
                this.$emit('openwindow', { id: 'home', title: '主页', model: 'models_home' });
            },
            OnOpenCustomer: function () {
                this.$emit('openwindow', { id: 'customers', title: '客户列表', model: 'models_customers' });
            },
            OnOpenEmployees: function () {
                this.$emit('openwindow', { id: 'employees', title: '雇员列表', model: 'models_employees' });
            },
            OnOpenOrders: function () {
                this.$emit('openwindow', { id: 'orders', title: '订单列表', model: 'models_orders' });
            },
            OnOpenAbout: function () {
                this.$emit('openwindow', { id: 'about', title: '关于', model: 'models_about' });
            },
        },
        template: __menu,
        mounted: function () { }
    });

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_home="";
 __models_home += '    <div>';
 __models_home += '        <div>';
 __models_home += '            <div style="text-align:center">';
 __models_home += '                <br />';
 __models_home += '                <h3>BeetleX.AdminUI是基于Beetlex+Vuejs+Bootstrap相结合的后台管理框架</h3>';
 __models_home += '                <br />';
 __models_home += '                <h4>Donation(捐赠)</h4>';
 __models_home += '                <a href="#" class="btn">';
 __models_home += '                    <h4 class="list-group-item-heading">Alipay(支付宝)</h4>';
 __models_home += '                    <p class="list-group-item-text">  <img style="width:100px" src="/images/alipay.png" /></p>';
 __models_home += '                </a>';
 __models_home += '                <a href="https://www.paypal.me/henryfancn?locale.x=zh_XC" class="btn" target="_blank">';
 __models_home += '                    <h4 class="list-group-item-heading">Paypal(贝宝)</h4>';
 __models_home += '                    <p class="list-group-item-text">paypal.me/henryfan</p>';
 __models_home += '                </a>';
 __models_home += '                <a href="#" class="btn">';
 __models_home += '                    <h4 class="list-group-item-heading">Wechat(微信)</h4>';
 __models_home += '                    <p class="list-group-item-text">    <img style="width:100px" src="/images/wechatpay.png" /></p>';
 __models_home += '                </a>';
 __models_home += '            </div>';
 __models_home += '        </div>';
 __models_home += '    </div>';

    Vue.component('models_home', {
        data: function () {
            return {
               
            }
        },
        methods: {
          
        },
        template: __models_home,
    })

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __footer="";
 __footer += '    <div class="folder">';
 __footer += '        <p style="text-align:center;">';
 __footer += '            <a href="https://github.com/IKende/AdminUI" target="_blank">BeetleX.AdminUI</a> copyright © 2020 <a href="http://beetlex.io" target="_blank">beetlex.io</a>';
 __footer += '            email: admin@beetlex.io <a href="https://github.com/ikende" target="_blank">github.com</a>';
 __footer += '        </p>';
 __footer += '    </div>';

    Vue.component('page_footer', {
        data: function () {
            return {
            }
        },
        template: __footer,
    })

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_employees="";
 __models_employees += '    <div>';
 __models_employees += '        <table class="table">';
 __models_employees += '            <thead>';
 __models_employees += '                <tr>';
 __models_employees += '                    <th>Name</th>';
 __models_employees += '                    <th>Title</th>';
 __models_employees += '                    <th>Region</th>';
 __models_employees += '                    <th>City</th>';
 __models_employees += '                    <th>Country</th>';
 __models_employees += '                    <th>Address</th>';
 __models_employees += '                </tr>';
 __models_employees += '            </thead>';
 __models_employees += '            <tbody>';
 __models_employees += '                <tr v-for="item in GetEmployees.result">';
 __models_employees += '                    <td><a href="javascript:void(0)" @click="OnOpen(item)">{{item.FirstName}} {{item.LastName}}</a> </td>';
 __models_employees += '                    <td>{{item.Title}}</td>';
 __models_employees += '                    <td>{{item.Region}}</td>';
 __models_employees += '                    <td>{{item.City}}</td>';
 __models_employees += '                    <td>{{item.Country}}</td>';
 __models_employees += '                    <td>{{item.Address}}</td>';
 __models_employees += '                </tr>';
 __models_employees += '';
 __models_employees += '            </tbody>';
 __models_employees += '        </table>';
 __models_employees += '    </div>';

    Vue.component('models_employees', {
        data: function () {
            return {
                GetEmployees: new beetlexAction("/Employees", null, []),
            }
        },
        methods: {
            OnOpen: function (item) {
                this.$emit('openwindow',
                    {
                        id: 'emp' + item.EmployeeID,
                        title: '雇员:' + item.FirstName + ' ' + item.LastName ,
                        model: 'models_employeedetail',
                        data: { id: item.EmployeeID }
                    }
                )
            }
        },
        mounted: function () {
            this.GetEmployees.get();
        },
        template: __models_employees,
    })

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_employeedetail="";
 __models_employeedetail += '    <div>';
 __models_employeedetail += '        <div class="form-horizontal" style="width:90%">';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">ID</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="number" readonly class="form-control" :value="GetDetail.result.item.EmployeeID">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">FirstName</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.FirstName">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">LastName</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.LastName">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Title</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Title">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Phone</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.HomePhone">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Country</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Country">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Region</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Region">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">City</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.City">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '            <div class="form-group">';
 __models_employeedetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Address</label>';
 __models_employeedetail += '                <div class="col-sm-6">';
 __models_employeedetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Address">';
 __models_employeedetail += '                </div>';
 __models_employeedetail += '            </div>';
 __models_employeedetail += '';
 __models_employeedetail += '        </div>';
 __models_employeedetail += '';
 __models_employeedetail += '        <table class="table">';
 __models_employeedetail += '            <thead>';
 __models_employeedetail += '                <tr>';
 __models_employeedetail += '                    <th>OrderID</th>';
 __models_employeedetail += '                   ';
 __models_employeedetail += '                    <th>Customer</th>';
 __models_employeedetail += '                    <th>OrderDate</th>';
 __models_employeedetail += '                    <th>RequiredDate</th>';
 __models_employeedetail += '                    <th>ShipCountry</th>';
 __models_employeedetail += '                    <th>ShipCity</th>';
 __models_employeedetail += '                    <th>ShipAddress</th>';
 __models_employeedetail += '                    <th>RequiredDate</th>';
 __models_employeedetail += '                </tr>';
 __models_employeedetail += '            </thead>';
 __models_employeedetail += '            <tbody>';
 __models_employeedetail += '                <tr v-for="item in GetDetail.result.orders.items">';
 __models_employeedetail += '                    <td>{{item.OrderID}}</td>';
 __models_employeedetail += '                  ';
 __models_employeedetail += '                    <td>{{item.Customer.CompanyName}}</td>';
 __models_employeedetail += '                    <td>{{item.OrderDate}}</td>';
 __models_employeedetail += '                    <td>{{item.RequiredDate}}</td>';
 __models_employeedetail += '                    <td>{{item.ShipCountry}}</td>';
 __models_employeedetail += '                    <td>{{item.ShipCity}}</td>';
 __models_employeedetail += '                    <td>{{item.ShipAddress}}</td>';
 __models_employeedetail += '                    <td>{{item.ShipAddress}}</td>';
 __models_employeedetail += '                </tr>';
 __models_employeedetail += '            </tbody>';
 __models_employeedetail += '        </table>';
 __models_employeedetail += '    </div>';

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

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_customers="";
 __models_customers += '    <div>';
 __models_customers += '        <table class="table">';
 __models_customers += '            <thead>';
 __models_customers += '                <tr>';
 __models_customers += '                    <th>CustomerID</th>';
 __models_customers += '                    <th>CompanyName</th>';
 __models_customers += '                    <th>ContactName</th>';
 __models_customers += '                    <th>ContactTitle</th>';
 __models_customers += '                    <th>Phone</th>';
 __models_customers += '                    <th>Fax</th>';
 __models_customers += '                </tr>';
 __models_customers += '            </thead>';
 __models_customers += '            <tbody>';
 __models_customers += '                <tr v-for="item in items">';
 __models_customers += '                    <td><a href="javascript:void(0)" @click="OnOpen(item)"> {{item.CustomerID}}</a></td>';
 __models_customers += '                    <td>{{item.CompanyName}}</td>';
 __models_customers += '                    <td>{{item.ContactName}}</td>';
 __models_customers += '                    <td>{{item.ContactTitle}}</td>';
 __models_customers += '                    <td>{{item.Phone}}</td>';
 __models_customers += '                    <td>{{item.Fax}}</td>';
 __models_customers += '                </tr>';
 __models_customers += '                <tr v-if="GetCustomers.data.index<pages">';
 __models_customers += '                    <td colspan="6" style="text-align:right;">';
 __models_customers += '                        <a href="javascript:void(0)" @click="GetCustomers.get()">({{GetCustomers.data.index}}/{{pages}})更多...</a>';
 __models_customers += '                    </td>';
 __models_customers += '                </tr>';
 __models_customers += '            </tbody>';
 __models_customers += '        </table>';
 __models_customers += '    </div>';

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
                this.$emit('openwindow',
                    {
                        id: 'cust' + item.CustomerID,
                        title: '客户:' + item.CompanyName,
                        model: 'models_customerdetail',
                        data: { id: item.CustomerID }
                    }
                )
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

/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_customerdetail="";
 __models_customerdetail += '    <div>';
 __models_customerdetail += '';
 __models_customerdetail += '        <div class="form-horizontal" style="width:90%">';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">CustomerID</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" readonly class="form-control" :value="GetDetail.result.item.CustomerID">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">CompanyName</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.CompanyName">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">ContactName</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.ContactName">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">ContactTitle</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.ContactTitle">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Address</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Address">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">City</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.City">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">PostalCode</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.PostalCode">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Country</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Country">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Phone</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Phone">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '        </div>';
 __models_customerdetail += '';
 __models_customerdetail += '        <table class="table">';
 __models_customerdetail += '            <thead>';
 __models_customerdetail += '                <tr>';
 __models_customerdetail += '                    <th>OrderID</th>';
 __models_customerdetail += '';
 __models_customerdetail += '                    <th>Employee</th>';
 __models_customerdetail += '                    <th>OrderDate</th>';
 __models_customerdetail += '                    <th>RequiredDate</th>';
 __models_customerdetail += '                    <th>ShipCountry</th>';
 __models_customerdetail += '                    <th>ShipCity</th>';
 __models_customerdetail += '                    <th>ShipAddress</th>';
 __models_customerdetail += '                    <th>RequiredDate</th>';
 __models_customerdetail += '                </tr>';
 __models_customerdetail += '            </thead>';
 __models_customerdetail += '            <tbody>';
 __models_customerdetail += '                <tr v-for="item in GetDetail.result.orders.items">';
 __models_customerdetail += '                    <td>{{item.OrderID}}</td>';
 __models_customerdetail += '';
 __models_customerdetail += '                    <td>{{item.Employee.FirstName}} {{item.Employee.LastName}}</td>';
 __models_customerdetail += '                    <td>{{item.OrderDate}}</td>';
 __models_customerdetail += '                    <td>{{item.RequiredDate}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipCountry}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipCity}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipAddress}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipAddress}}</td>';
 __models_customerdetail += '                </tr>';
 __models_customerdetail += '            </tbody>';
 __models_customerdetail += '        </table>';
 __models_customerdetail += '    </div>';

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