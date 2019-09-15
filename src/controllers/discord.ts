import { Request, Response, Router } from "express";

export const router = ((): Router => {
	const router = Router();

	router.get(/^(.*)$/, function(request: Request, response: Response) {
		response.redirect('https://discord.gg/tb4Nxmq');
	});

	return router;
})();