import express from 'express';
import type { Request, Response } from 'express';

class TypescriptService {
  testVariable: string;

  constructor() {
    this.testVariable = "I'm definitely a string, since my birth";
  }

  getTestVariable() {
    return this.testVariable;
  }
}

const app = express();
const typescriptService = new TypescriptService();

app.get("/", async (req: Request, res: Response) => {
  res.send(typescriptService.getTestVariable());
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});