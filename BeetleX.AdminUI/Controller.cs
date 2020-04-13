using BeetleX.FastHttpApi;
using System;
using System.Collections.Generic;
using System.Text;
using Northwind.Data;
using System.Linq;
using BeetleX.FastHttpApi.VueExtend;

namespace BeetleX.AdminUI
{
    [Controller]
    public class Controller
    {
        public object Customers(int index)
        {
            int size = 20;
            int pages = DataHelper.Defalut.Customers.Count / size;
            if (DataHelper.Defalut.Customers.Count % size > 0)
                pages++;
            return new
            {
                pages,
                items = DataHelper.Defalut.Customers.Skip(size * index).Take(size)
            };
        }

        public object GetScript(IHttpContext context)
        {
            return context.Server.Vue().Response(context);
        }

        public object CustomerStatis()
        {
            return (from b in (from a in DataHelper.Defalut.Orders
                               group a by GetCustomerFullName(a.CustomerID) into b
                               select new { name = b.Key, value = b.Count(), b.FirstOrDefault().CustomerID })
                    orderby b.value descending
                    select b).Take(20);

        }

        public object EmployeeStatis()
        {
            return from a in DataHelper.Defalut.Orders
                   group a by GetEmployeeFullName(a.EmployeeID) into b
                   select new { name = b.Key, value = b.Count(), b.FirstOrDefault()?.EmployeeID };
        }

        public object GetCustomerDetail(string id)
        {
            return new
            {
                item = DataHelper.Defalut.Customers.FirstOrDefault(p => p.CustomerID == id),
                orders = Orders(0, 0, id,null, 1000)
            };
        }

        public object GetEmployeeDetail(int id)
        {
            return new
            {
                item = DataHelper.Defalut.Employees.FirstOrDefault(p => p.EmployeeID == id),
                orders = Orders(0, id, null,null, 1000)
            };
        }

        public object GetEmployeeAndCustomer()
        {
            return new
            {
                employees = (from a in DataHelper.Defalut.Employees select new { a.FirstName, a.LastName, a.EmployeeID }),
                customers = (from a in DataHelper.Defalut.Customers select new { a.CompanyName, a.CustomerID })
            };
        }

        public object TimeStatis()
        {
            return from a in DataHelper.Defalut.Orders
                   group a by a.OrderDate.ToString("yyyy/MM") into b
                   select new { b.Key, Value = b.Count() };

        }

        public object Orders(int index, int employeeid, string customerid, string month, int size = 20)
        {
            if (size == 0)
                size = 20;
            Func<Order, bool> filter = (b) => (employeeid == 0 || b.EmployeeID == employeeid)
                                      && (string.IsNullOrEmpty(customerid) || b.CustomerID == customerid)
                                      && (string.IsNullOrEmpty(month) || b.OrderDate.ToString("yyyy/MM") == month);

            var count = DataHelper.Defalut.Orders.Count(filter);
            int pages = count / size;
            if (count % size > 0)
                pages++;
            return new
            {
                pages,
                items = from a in (from b in DataHelper.Defalut.Orders
                                   where filter(b)
                                   select b
                ).Skip(size * index).Take(size)
                        select new
                        {
                            a.OrderDate,
                            a.OrderID,
                            a.RequiredDate,
                            a.ShippedDate,
                            a.ShipAddress,
                            a.ShipCity,
                            a.ShipCountry,
                            a.ShipName,
                            Employee = GetEmployeeName(a.EmployeeID),
                            Customer = GetCustomerName(a.CustomerID)
                        }
            };
        }


        private string GetEmployeeFullName(int id)
        {
            var item = DataHelper.Defalut.Employees.FirstOrDefault(p => p.EmployeeID == id);
            return $"{item?.FirstName} {item?.LastName}";
        }

        private object GetEmployeeName(int id)
        {
            var item = DataHelper.Defalut.Employees.FirstOrDefault(p => p.EmployeeID == id);
            return new { item?.EmployeeID, item?.FirstName, item?.LastName };
        }

        private string GetCustomerFullName(string id)
        {
            var item = DataHelper.Defalut.Customers.FirstOrDefault(p => p.CustomerID == id);
            return item?.CompanyName;
        }

        private object GetCustomerName(string id)
        {
            var item = DataHelper.Defalut.Customers.FirstOrDefault(p => p.CustomerID == id);
            return new { item?.CustomerID, item?.CompanyName };
        }

        public object Employees()
        {
            return DataHelper.Defalut.Employees;
        }
    }
}
