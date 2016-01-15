using System.Web.Mvc;

namespace myproject.Web.Controllers
{
    public class HomeController : myprojectControllerBase
    {
        public ActionResult Index()
        { 
            return View("~/App/Main/views/layout/layout.cshtml"); //Layout of the angular application.
        }
	}
}