import cluster from "cluster";
import os from "os";
import { app } from ".";

const CPUs = os.cpus().length;

if (cluster.isPrimary) {
	console.log(`Master ${process.pid} is running`);

	//Fork workers
	for (let i = 0; i < CPUs; i++) cluster.fork();
} else {
	app.listen(3000, () => {
		console.log(`Worker started ${process.pid}`);
	});
}
