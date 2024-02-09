using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Context;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly PayDbContext _dbContext;
        private readonly PayDbContext _expendit;
        public PaymentController(PayDbContext dbContext)
        {
            _dbContext = dbContext;
            _expendit = dbContext;
        }
        [HttpPost("paymentDetails")]
        public async Task<IActionResult> UserPayment([FromBody] PaymentDetails userObj)
        {
            if (userObj == null) { return BadRequest(); }
            await _dbContext.PaymentDetailsTB.AddAsync(userObj);
            await _dbContext.SaveChangesAsync();
            return Ok(new
            {
                Message="PAYMENT SUCCESSFUL!"
            }); 
        }

        [HttpGet("getPaymentDetails")]
        public async Task<ActionResult<IEnumerable<PaymentDetails>>>GetPayment()
        {
            if(_dbContext.PaymentDetailsTB == null)
            {
                return NotFound();
            }
            return await _dbContext.PaymentDetailsTB.ToListAsync();
        }

        [HttpPut("update-expensesAmount-byId/{expid}")]
        public async Task<IActionResult> updateAmount(Expenses expObj)
        {
            var changeValues = _expendit.ExpendituresTB.Where(x => x.id == expObj.id).ToList();
            changeValues.ForEach(k =>
            {
                k.food = expObj.food;
                k.clothing = expObj.clothing;
                k.education = expObj.education;
                k.health = expObj.health;
                k.salaries = expObj.salaries;
                k.sanitation = expObj.sanitation;
                k.maintainance = expObj.maintainance;
                k.others = expObj.others;
               
            });
            await _dbContext.SaveChangesAsync();
            return Ok(changeValues);
        }

        [HttpPost("add-new-expensesAmounts")]
        public async Task<IActionResult> addAmounts([FromBody] Expenses userObj)
        {
            if (userObj == null) { return BadRequest(); }
            await _expendit.ExpendituresTB.AddAsync(userObj);
            await _expendit.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("get-Updated-ExpensesAmount")]
        public async Task<ActionResult<List<Expenses>>> GetUpdatedExpAmt()
        {
            if (_expendit.ExpendituresTB == null)
            {
                return NotFound();
            }
            var ExpensesList= _expendit.ExpendituresTB.OrderByDescending(x => x.onDate);
            return Ok(ExpensesList); 
        }


        //SUM of all Expenditures using 'AdditionOfExpenditures' stored procedure!
        [HttpGet("sumOfExpenses{add}")]
        public async Task<IActionResult> GetExpAmtSum(int add)
        {

            //var sqlstr = "EXEC AdditionOfExpenditures @add=" + add;
            //var GetExpSum=await _expendit.ExpendituresTB.FromSqlRaw(sqlstr).ToListAsync();
            var GetExpSum = _expendit.ExpendituresTB.FromSqlRaw("EXEC AdditionOfExpenditures {add}").ToList();
            return Ok(GetExpSum);
        }

        

       


        

        

    }
}
