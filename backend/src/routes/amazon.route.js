import { Router } from "express";
import User from "../models/user.model.js";
const router = Router();

// testing (Working Database is successfully connected)
router.route('/hello').get((req, res) => {
    res.send('Hello from Amazon route');
    const user = new User({email_id: 'a@gmail.com'});
    user.save()
        .then(() => console.log('User added'))
        .catch(err => console.log(err));
});

export default router;