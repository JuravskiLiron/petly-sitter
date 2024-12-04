using Microsoft.AspNetCore.Mvc;

namespace PetlySitter.API.Contracts.Users;

public record RegisterUserRequest(
    [FromBody] 
    string Email,
    string UserName,
    string Password,
    string CreatedAt
    
    );