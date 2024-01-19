using Microsoft.EntityFrameworkCore;

namespace Server.Models;

public class InputContext : DbContext
{
    public InputContext(DbContextOptions<InputContext> options)
        : base(options)
    {
    }

    public DbSet<InputModel> TodoItems { get; set; } = null!;
}