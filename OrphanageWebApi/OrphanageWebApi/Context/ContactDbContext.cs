using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Context
{
    public class ContactDbContext : DbContext
    {
        
        public ContactDbContext(DbContextOptions<ContactDbContext> options) : base(options) { }
        public DbSet<ContactDetails>ContactUsTB { get; set; }

    }
}
