import app from "../../../backend/src";
import * as request from "supertest";
describe("Api workflow", () => {
  it("Testando a rota GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual("opa");
  });
});
