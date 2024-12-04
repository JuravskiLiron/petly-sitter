using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace PetlySitter.API.Endpoints;

public static class UserEndpoint
{
    public static IEndpointRouteBuilder MapEndpoints(this IEndpointRouteBuilder app)
    {

        app.MapPost("register", Register);
        app.MapPost("login", Login);
        
        
        
        return app;
    }

    private static async Task<IResult> Register(
        [FromBody] RegisterRequest request)
    {
        
        
        
        return Results.Ok("User registered seccessfully");
    }

    private static async Task<IResult> Login()
    {
        return Results.Ok("User registered seccessfully");
    }
    
    
}