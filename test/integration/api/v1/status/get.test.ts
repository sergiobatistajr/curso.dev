import { Express } from "express";
import app from "../../../../../backend/src/index";
import * as request from "supertest";
describe("Api workflow", () => {
  it("Testando a rota GET /status", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
    // expect(response.body).toBe("são top");
  });
});
