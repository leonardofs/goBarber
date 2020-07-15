import { Router } from 'express';
import User from '../models/user'

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'hello world' })
}
);

export default routes;
