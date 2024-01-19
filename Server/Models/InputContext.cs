using Microsoft.EntityFrameworkCore;

namespace server.Models;

public class InputContext : DbContext
{
    public InputContext(DbContextOptions<InputContext> options)
        : base(options)
    {
    }

    public DbSet<InputModel> UserInput { get; set; } = null!;
}