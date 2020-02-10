using BeetleX.FastHttpApi;
using System;
using System.Collections.Generic;
using System.Text;
using Northwind.Data;
using System.Linq;
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

        public object GetCustomerDetail(string id)
        {
            return new
            {
                item = DataHelper.Defalut.Customers.FirstOrDefault(p => p.CustomerID == id),
                orders = Orders(0, 0, id, 1000)
            };
        }

        public object GetEmployeeDetail(int id)
        {
            return new
            {
                item = DataHelper.Defalut.Employees.FirstOrDefault(p => p.EmployeeID == id),
                orders = Orders(0, id, null, 1000)
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

        public object Orders(int index, int employeeid, string customerid, int size = 20)
        {
            if (size == 0)
                size = 20;
            Func<Order, bool> filter = (b) => (employeeid == 0 || b.EmployeeID == employeeid)
                                      && (string.IsNullOrEmpty(customerid) || b.CustomerID == customerid);
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

        private object GetEmployeeName(int id)
        {
            var item = DataHelper.Defalut.Employees.FirstOrDefault(p => p.EmployeeID == id);
            return new { item?.EmployeeID, item?.FirstName, item?.LastName };
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
