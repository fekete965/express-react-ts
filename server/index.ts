import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
