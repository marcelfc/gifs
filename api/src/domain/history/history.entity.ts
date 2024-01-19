export default class History {
    private id

    constructor( id: string, search: string) {
        this.id= id
        this.search= search
    }
    
    get id(): string {
        return this.id;
    }

    get search(): string {
        return this.search;
    }

    validate(): boolean {
        if(this.id.length <= 0) {
            throw new Error("ID is required");
            
        }

        if(this.id.length <= 0) {
            throw new Error("Search is required");
            
        }

        return true;
    }

    toJson(): History {
        return {
            id: this._id,
            search: this._search
        }
    }
}