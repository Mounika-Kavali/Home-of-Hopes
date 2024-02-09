using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrphanageWebApi.Context;
using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsersController : ControllerBase
    {
        private readonly SponserDbContext _sponser;
        private readonly SponserDbContext _child;
        public SponsersController(SponserDbContext dbContext)
        {
            _sponser = dbContext;
            _child = dbContext;
        }

        [HttpGet("post-sponserDetails")]
        public async Task<ActionResult<IEnumerable<SponserDetails>>> getSponser()
        {
            if (_sponser.sponsersTB == null)
            {
                return NotFound();
            }
            return await _sponser.sponsersTB.ToListAsync();
        }
        [HttpGet("sponsers-child-details")]
        public IEnumerable<joinData> GetJoinedData()
        {
            var query = (from sponser in _sponser.sponsersTB
                         join child in _child.childrenDataTB
                         on sponser.chairman equals child.sponser
                         into sponserChild
                         from x in sponserChild.DefaultIfEmpty()

                         select new joinData()
                         {
                             Id = sponser.sponserID,
                             chairman = sponser.chairman,
                             organisationName = sponser.orgName,
                             location = sponser.location,
                             child_firstName = x.firstName,
                             child_lastName = x.lastName,
                             child_standard = x.standard

                         });
            return query.ToList();
        }
        [HttpGet("child-details/{sponser}")]
        public IEnumerable<ChildData> GetChild(string sponser)
        {
            var kid = (from k in _child.childrenDataTB.Where(x=>x.recordStatus=="Done")  where k.sponser.ToUpper() == sponser select k).ToList();
            return kid.ToList();
        }

    }
}
