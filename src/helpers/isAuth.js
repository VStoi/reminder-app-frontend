import StorageService from "../services/StorageService";

export const isAuth = () => {
    const storage = new StorageService();
    return storage.get("SESSION");
}
