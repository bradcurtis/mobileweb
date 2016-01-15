using Abp.Web.Mvc.Controllers;

namespace myproject.Web.Controllers
{
    /// <summary>
    /// Derive all Controllers from this class.
    /// </summary>
    public abstract class myprojectControllerBase : AbpController
    {
        protected myprojectControllerBase()
        {
            LocalizationSourceName = myprojectConsts.LocalizationSourceName;
        }
    }
}