describe("Api workflow", () => {
  it("Testando a rota GET /status", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toBe("são tops");
  });
});