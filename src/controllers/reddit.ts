import { Request, Response, Router } from "express";

export const router = ((): Router => {
	const router = Router();

	router.get(/^(.*)$/, function(request: Request, response: Response): void {
		response.redirect('https://www.reddit.com/r/bandlecityspace');
	});

	return router;
})();