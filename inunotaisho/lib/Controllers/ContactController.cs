using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Inunotaisho.Models.Contact;
using Microsoft.AspNetCore.Cors;
using System.Net.Mail;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Inunotaisho.lib.Controllers
{
    [EnableCors("CORSPolicy")]
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]ContactSchema ContactForm)
        {
            var data = ContactForm;
            SmtpClient client = new SmtpClient("smtp.gmail.com");
            client.Port = 587;
            //if we need to authenticate
            client.Credentials = new NetworkCredential("ervistrupja@gmail.com", "password");

            //security: ask to enable SSL
            //client.EnableSsl = true;

            //Construct the email
            //MailMessage mailMessage = new MailMessage()
            //{
            //    From = "youremailaddress",
            //    To = form.email,
            //    Subject = form.subject,
            //    Body = form.message
            //};

            //client.Send(mailMessage);


        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
