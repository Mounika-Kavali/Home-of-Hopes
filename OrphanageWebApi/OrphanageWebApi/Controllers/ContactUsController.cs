using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Context;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly ContactDbContext _conDbContext;
        public ContactUsController(ContactDbContext dbContext)
        {
            _conDbContext = dbContext;
        }
        [HttpPost("ContactUs-Info")]
        public async Task<IActionResult> getInTouch([FromBody] ContactDetails volunterObj)
        {
            if (volunterObj == null) { return BadRequest(); }
            await _conDbContext.ContactUsTB.AddAsync(volunterObj);
            await _conDbContext.SaveChangesAsync(); 
            return Ok(new
            {
                Message = "Registration is SUCCESSFUL!"
            });
        }

        [HttpGet("getContactDetails")]
        public async Task<ActionResult<IEnumerable<ContactDetails>>> GetPayment()
        {
            if (_conDbContext.ContactUsTB == null)
            {
                return NotFound();
            }
            return await _conDbContext.ContactUsTB.ToListAsync();
        }
    }
}

