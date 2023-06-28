using ClashApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ClashApi.Contexts
{
    public class PlayerContext : DbContext
    {
        public PlayerContext(DbContextOptions<PlayerContext> options) : base(options) { }

        public DbSet<Player> players { get; set; } = null!;
    }
}
