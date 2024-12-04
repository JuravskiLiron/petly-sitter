using System.Data;

namespace PetlySitter.Domain.Models;

public class User
{
    private User(Guid id, string userName, string email, string password)
    {
        Id = id;
        UserName = userName;
        Email = email;
        PasswordHash = password;
    }
    private User(Guid id, string userName, string email, string password, string? role, string? name
        , string? lastName, string? gender)
    {
        Id = id;
        UserName = userName;
        Email = email;
        PasswordHash = password;
        CreatedAt = DateTime.Today;
        Role = role;
        Name = name;
        LastName = lastName;
        Gender = gender;
    }
    
    protected User(){}
    
    public Guid Id { get; set; }
    public string UserName { get; private set; }
    public string Email { get; private set; }
    public string PasswordHash { get; private set; }
    public DateTime CreatedAt { get; private set; }
    
    public string? Role { get; private set; }
    public string? Name { get; set; }
    public string? LastName { get; set; }
    public string? Gender { get; set; }

    public static User Create(Guid id, string userName, string email, string password)
    {
        return new User(id, userName, email, password);
    }
    
}