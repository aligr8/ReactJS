using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactApp.Startup))]
namespace ReactApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
