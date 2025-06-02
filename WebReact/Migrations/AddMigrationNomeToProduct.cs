using Microsoft.EntityFrameworkCore.Migrations;

namespace WebReact.Migrations
{
    public partial class AddNomeToProduto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Produto",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Produto");
        }
    }
}
