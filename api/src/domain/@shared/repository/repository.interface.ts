export default interface BaseRepository<T> {
    findAll(): Promise<T[]>;
    create(value: T): Promise<void>;
}