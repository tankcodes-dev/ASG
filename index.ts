import express, { type Request, type Response } from "express";
import os from "os";

export const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Success");
});

app.get("/healthcheck", (req: Request, res: Response) => {
	res.send("Healthcheck");
});

app.get("/cpu", (req, res) => {
	for (let i = 0; i < 1000000000; i++) {
		Math.random();
	}
	res.send("CPU operation completed");
});

app.get("/host", (req, res) => {
	res.send(os.hostname());
});
