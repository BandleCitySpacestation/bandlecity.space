import { Request, Response, Router } from "express";

export const router = ((): Router => {
	const router = Router();

	router.get(/^(.*)$/, function(request: Request, response: Response): void {
		response.redirect('https://1drv.ms/u/s!AmV5wNKd1FphgeAR6cY8FHdnJMVwew');
	});

	return router;
})();