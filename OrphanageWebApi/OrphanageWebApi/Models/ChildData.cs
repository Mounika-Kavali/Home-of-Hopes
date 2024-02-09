using System.ComponentModel.DataAnnotations;

namespace OrphanageWebApi.Models
{
    public class ChildData
    {
        [Key]
        public int childID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int age { get; set; }
        public string guardianName { get; set; }
        public string contactNo { get; set; }
        public string address { get; set; }
        public string remarks { get; set; }

        public string doj { get; set; }
        public string type_of_child { get; set; }
        public string dob { get; set; }
        public string gender { get; set; }
        public string standard { get; set; }
        public string sponser { get; set; }
        public string recordStatus { get; set; } = "Done";


    }
}
