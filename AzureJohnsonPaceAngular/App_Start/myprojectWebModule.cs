using System.Reflection;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Abp.Localization;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Modules;
using Abp.Web.Mvc;

namespace myproject.Web
{
    [DependsOn(
        typeof(AbpWebMvcModule),
        typeof(myprojectDataModule), 
        typeof(myprojectApplicationModule), 
        typeof(myprojectWebApiModule))]
    public class myprojectWebModule : AbpModule
    {
        public override void PreInitialize()
        {
            //Add/remove languages for your application
            Configuration.Localization.Languages.Add(new LanguageInfo("en", "English", "famfamfam-flag-england", true));
            Configuration.Localization.Languages.Add(new LanguageInfo("tr", "Türkçe", "famfamfam-flag-tr"));
            Configuration.Localization.Languages.Add(new LanguageInfo("zh-CN", "简体中文", "famfamfam-flag-cn"));

            //Add/remove localization sources here
            Configuration.Localization.Sources.Add(
                new DictionaryBasedLocalizationSource(
                    myprojectConsts.LocalizationSourceName,
                    new XmlFileLocalizationDictionaryProvider(
                        HttpContext.Current.Server.MapPath("~/Localization/myproject")
                        )
                    )
                );

            //Configure navigation/menu
            Configuration.Navigation.Providers.Add<myprojectNavigationProvider>();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());

            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
