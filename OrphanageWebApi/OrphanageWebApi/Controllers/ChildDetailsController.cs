using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrphanageWebApi.Context;
using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChildDetailsController : ControllerBase
    {
        private readonly ChildDbContext _child;
        public ChildDetailsController(ChildDbContext dbContext)
        {
            _child = dbContext;
        }
        [HttpPost("Add-Child-Info")]
        public async Task<IActionResult> addChild([FromBody] ChildData childObj)
        {
            if (childObj == null) { return BadRequest(); }
            await _child.childrenDataTB.AddAsync(childObj);
            await _child.SaveChangesAsync();
            return Ok(new
            {
                Message = " Data is Saved!"
            });
        }

        [HttpGet("Get-Child-Info")]
        //public async Task<ActionResult<IEnumerable<ChildData>>> getChild() 
        //{
        //    if (_child.childrenDataTB == null)
        //    {
        //        return NotFound();
        //    }
        //    return await _child.childrenDataTB.ToListAsync();
        //}
        public ActionResult<List<ChildData>> getChildren()
        {
            var childList = _child.childrenDataTB.Where(x => x.recordStatus == "Done").OrderByDescending(b => b.childID);
            return Ok(childList);
        }
        [HttpGet("Get-Deleted-Child-Info")]
        public ActionResult<List<ChildData>> deletedChildren()
        {
            var childList = _child.childrenDataTB.Where(x => x.recordStatus == "Deleted");
            return Ok(childList);
        }





        [HttpGet("Get-Child-Info-byID/{id}")]
        public async Task<ActionResult<ChildData>> getChildById(int id)
        {
            if (_child.childrenDataTB == null)
            {
                return NotFound();
            }
            var child=await _child.childrenDataTB.FindAsync(id);
            if(child == null)
            {
                return NotFound();
            }
            return child;
        }

        [HttpPut("update-child-info-byId/{id}")]
        public async Task<IActionResult>updateChild(int id,ChildData childObj)
        {
            if(id!= childObj.childID)
            {
                return BadRequest();
            }
            _child.Entry(childObj).State = EntityState.Modified;
            try
            {
                await _child.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!ChildAvailable(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Ok();
        }
        private bool ChildAvailable(int id)
        {
            return (_child.childrenDataTB?.Any(x => x.childID == id)).GetValueOrDefault();
        }

        //[HttpDelete("delete-child-info-byId/{id}")]
        //public async Task<IActionResult>deleteChild(int id)
        //{
        //    if(_child.childrenDataTB == null)
        //    {
        //        return NotFound();
        //    }
        //    var IDchild = await _child.childrenDataTB.FindAsync(id);
        //    if(IDchild == null)
        //    {
        //        return NotFound();
        //    }
        //    _child.childrenDataTB.Remove(IDchild);
        //    await _child.SaveChangesAsync();
        //    return Ok();
        //}

        [HttpGet("delete-child-info-byId/{id}")]
        public IActionResult deleteChild(int id)
        {
            var child = _child.childrenDataTB.FirstOrDefault(x => x.childID == id);
            _child.childrenDataTB.Remove(child);
            _child.SaveChanges();
            return Ok();
        }
    }
}
