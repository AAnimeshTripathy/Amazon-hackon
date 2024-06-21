import { Router } from "express";

const router = Router();

router.route('/hello').get((req, res) => {
    res.send('Hello from Amazon route');
});

export default router;