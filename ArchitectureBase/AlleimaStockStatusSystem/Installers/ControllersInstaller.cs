using System.Web.Mvc;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace AlleimaStockStatusSystem.Installers
{
    using AlleimaStackStatus.ActionInterfaces;
    using AlleimaStackStatus.AdapterInterfaces;
    using AlleimaStackStatus.LogInterfaces;
    using AlleimaStackStatus.RepositoryInterfaces;
    using Plumbing;
    using AlleimaStackStatus.Logs.Log;

    public class ControllersInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(
                Classes.
                    FromThisAssembly().
                    BasedOn<IController>().
                    If(c => c.Name.EndsWith("Controller")).
                    LifestyleTransient());

            container.Register(
                Classes.
                    FromAssemblyNamed("AlleimaStackStatus.Actions").
                    BasedOn<IBaseAction>().
                    WithService.
                    DefaultInterfaces().
                    LifestyleTransient());
            container.Register(
                Classes.
                    FromAssemblyNamed("AlleimaStackStatus.Adapters").
                    BasedOn<IBaseAdapter>().
                    WithService.
                    DefaultInterfaces().
                    LifestyleTransient());

            container.Register(
                Classes.
                    FromAssemblyNamed("AlleimaStackStatus.Repositories").
                    BasedOn<IBaseRepository>().
                    WithService.
                    DefaultInterfaces().
                    LifestyleTransient());

            // Register ILogs specifically with its implementation
            container.Register(
                Component.For<ILogs>()
                    .ImplementedBy<Loger>()
                    .LifestyleTransient());

            ControllerBuilder.Current.SetControllerFactory(new WindsorControllerFactory(container));
        }
    }
}