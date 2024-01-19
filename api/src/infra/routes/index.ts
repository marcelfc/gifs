import { Router } from "express";
import HistoryRepository from "../repository/history.repository";

const router = Router();

router.get('/history', async (request, response) => {
    const historyRepository = new HistoryRepository();
    const data = await historyRepository.findAll();
    response.status(200).json({ data })
});


router.post('/history', async (request, response) => {
    const { search } = request.body
    const historyRepository = new HistoryRepository();
    await historyRepository.create(search);
    response.status(201).send();
});

export default router;