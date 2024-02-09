using System.ComponentModel.DataAnnotations;

namespace OrphanageWebApi.Models
{
    public class SponserDetails
    {
        [Key]
        public int sponserID { get; set; }
        public string orgName { get; set; }
        public string chairman { get; set; }
        public string location { get; set; }
        public string email { get; set; }
        public string sponserDetails { get; set; }

    }
}
