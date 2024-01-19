using Humanizer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.WebHost.UseUrls("http://localhost:5000");

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// The input can be any decimal but will be rounded to the nearest cent
app.MapPost("/input", (float input) =>
    {
        input = (float)Math.Round(input, 2);
        string dollars = ((int)input).ToWords();
        string cents = ((int)((input - (int)input) * 100)).ToWords();
        var transformed = $"{dollars} dollars and {cents} cents";
        return new TransformedInput(transformed);
    })
    .WithName("TransformInput");

app.Run();

record TransformedInput(string Transformed);