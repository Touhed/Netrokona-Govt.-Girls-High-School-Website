using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NGGHS.Models;

namespace NGGHS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {

            return View();
        }

        public IActionResult About()
        {
            
            return View();
        }

        public IActionResult Admission()
        {
            
            return View();
        }

        public IActionResult Administration()
        {
           

            return View();
        }

        public IActionResult Academic()
        {
            
            return View();
        }

        public IActionResult Science()
        {

            return View();
        }

        public IActionResult Arts()
        {

            return View();
        }

        public IActionResult Commerce()
        {

            return View();
        }

        public IActionResult FacultyList()
        {

            return View();
        }

        public IActionResult Facilities()
        {

            return View();
        }

        public IActionResult Student()
        {

            return View();
        }

        public IActionResult StudentInformation()
        {

            return View();
        }

        public IActionResult AllStudentInformation()
        {

            return View();
        }

        public IActionResult Contact()
        {

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
