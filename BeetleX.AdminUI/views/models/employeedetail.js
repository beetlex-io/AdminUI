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
