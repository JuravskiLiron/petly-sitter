using System.ComponentModel.DataAnnotations;

namespace PetlySitter.API.Contracts.Users;

public record LoginUserRequest
{
    [Required] public string Email { get; init; }
    [Required] public string Password { get; init; }
}