const DEFAULT_STORAGE = localStorage;

class StorageService {
    constructor({ store = DEFAULT_STORAGE} = {}) {
        this._store = store;
    }

    _objectToString(obj) {
        return JSON.stringify(obj);
    }

    _parseString(str) {
        return JSON.parse(str);
    }

    get(key) {
        const data = this._store.getItem(key)
        return this._parseString(data);
    }

    set(key, value) {
        this._store.setItem(key, this._objectToString(value));
    }

    merge(key, value) {
        const keyName = this._decorateKey(key);
        const oldValue = this.get(key);
        const newValue = Object.assign(oldValue, value);

        this._store.setItem(keyName, this._objectToString(newValue));
    }

    remove(key) {
        this._store.removeItem(this._decorateKey(key));
    }

    clear() {
        this._store.clear();
    }
}

export default StorageService;
