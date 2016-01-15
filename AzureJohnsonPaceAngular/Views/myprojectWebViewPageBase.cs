using Abp.Web.Mvc.Views;

namespace myproject.Web.Views
{
    public abstract class myprojectWebViewPageBase : myprojectWebViewPageBase<dynamic>
    {

    }

    public abstract class myprojectWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected myprojectWebViewPageBase()
        {
            LocalizationSourceName = myprojectConsts.LocalizationSourceName;
        }
    }
}