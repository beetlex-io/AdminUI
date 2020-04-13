
    <div>
       
        <div class="form-inline">
            <div class="form-group">
                <label for="exampleInputName2">雇员</label>
                <select class="form-control" v-model="GetOrders.data.employeeid">
                    <option value="0">全部</option>
                    <option v-for="item in GetEmployeeAndCustomer.result.employees" :value="item.EmployeeID">{{item.FirstName}} {{item.LastName}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">客户</label>
                <select class="form-control" v-model="GetOrders.data.customerid">
                    <option value="">全部</option>
                    <option v-for="item in GetEmployeeAndCustomer.result.customers" :value="item.CustomerID">{{item.CompanyName}}</option>

                </select>
            </div>
            <button type="button" class="btn btn-default" @click="GetOrders.data.index=0;items=[];GetOrders.get()">查询</button>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>OrderID</th>
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
                <tr v-for="item in items">
                    <td>{{item.OrderID}}</td>
                    <td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>
                    <td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>
                    <td>{{item.OrderDate}}</td>
                    <td>{{item.RequiredDate}}</td>
                    <td>{{item.ShipCountry}}</td>
                    <td>{{item.ShipCity}}</td>
                    <td>{{item.ShipAddress}}</td>
                    <td>{{item.ShipAddress}}</td>
                </tr>
                <tr v-if="GetOrders.data.index<pages">
                    <td colspan="9" style="text-align:right;">
                        <a href="javascript:void(0)" @click="GetOrders.get()">({{GetOrders.data.index}}/{{pages}})更多...</a>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

<script>
{
        
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
        }
    }
</script>