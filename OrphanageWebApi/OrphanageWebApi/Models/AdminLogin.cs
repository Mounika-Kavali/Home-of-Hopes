using System.ComponentModel.DataAnnotations;

namespace OrphanageWebApi.Models
{
    public class AdminLogin
    {
        [Key]
        
        public string Password { get; set; }
        public string EmailId { get; set; }

    }
}
