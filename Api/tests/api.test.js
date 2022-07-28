import request from "supertest";

import server from "../src/app.js";

// Test*//

describe("GET /iecho", () => {
  it("respond with status 200 ", (done) => {
    request(server)
      .get("/iecho?text=ana")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("respond with status 400 ", (done) => {
    request(server)
      .get("/iecho?text=1234")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });

  it("respond with json {text:tset,palindrome:false} ", (done) => {
    request(server)
      .get("/iecho?text=test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ text: "tset", palindrome: false })
      .end(done);
  });

  it("respond with json {error:no text}", (done) => {
    request(server)
      .get("/iecho?text=1234")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect({ error: "no text" })
      .end(done);
  });
  it("respond with json { text: ana, palindrome: true } ", (done) => {
    request(server)
      .get("/iecho?text=ana")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ text: "ana", palindrome: true })
      .end(done);
  });
  it("respond with json {text:daba le arroz al a zorra elabaD,palindrome:true} ", (done) => {
    request(server)
      .get("/iecho?text=Dabale arroz a la zorra el abad")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({"text":"daba le arroz al a zorra elabaD","palindrome":true})
      .end(done);
  });
});
