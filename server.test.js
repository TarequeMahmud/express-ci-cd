const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("should return 200 and correct text", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from CI/CD Express App!");
  });
});
