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
