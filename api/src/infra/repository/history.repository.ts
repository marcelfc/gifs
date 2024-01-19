import History from "../../domain/history/history.entity";
import HistoryRepositoryInterface from "../../domain/history/history.repository.interface";
import database from "../database";

export default class HistoryRepository implements HistoryRepositoryInterface {
    async findAll(): Promise<History[]> {
        try {
            const results = await database.query('SELECT * FROM history ORDER BY id DESC');
            return results.rows.map((row) => new History(row.id, row.search).toJson());
        } catch (error) {
            throw error;
        }
    }

    async create(value: History): Promise<void> {
        try {
            await database.query('INSERT INTO history(search) values($1)', [value]);
        } catch (error) {
            throw error;
        }
    }
    
}