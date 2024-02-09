using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Context;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _authContext;

        public LoginController(AppDbContext appDb)
        {
            _authContext=appDb;
        }
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AdminLogin userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }
            var adminUser= await _authContext.User.FirstOrDefaultAsync(x=>x.EmailId == userObj.EmailId && x.Password == userObj.Password);
            if (adminUser == null)
            {
                return NotFound(new {Message="User ID/Password may wrong!"});
            }
            return Ok(new { Message = "Login Successful!" });
        }
    }
}
