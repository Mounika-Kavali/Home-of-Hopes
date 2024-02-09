using System.ComponentModel.DataAnnotations;

namespace OrphanageWebApi.Models
{
    public class ContactDetails
    {
        [Key]
        public int contactId { get; set; }
        public string fullName { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string description { get; set; }
       

    }
}
