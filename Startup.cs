using Microsoft.EntityFrameworkCore;
using WebReact.Configura��o;

public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<Contexto>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
    // outros servi�os...
}   