using DatingApp.Models;

namespace DatingApp.Interfaces
{
    public interface ITokenService
    {
       public string CreateToken(AppUser user);
    }
}
