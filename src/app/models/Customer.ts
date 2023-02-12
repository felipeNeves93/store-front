export class Customer {

    private _id: Number;
    private _name: string;
    private _lastName: string;
    private _email: string;
    private _birthDate: Date;
    private _active: boolean;
    private _createdDate: Date;

    constructor(id: number, name: string, lastName: string, email: string, birthDate: Date, 
        active: boolean, createdDate: Date) {
            this._id = id;
            this._name = name;
            this._lastName = lastName;
            this._email = email;
            this._birthDate = birthDate;
            this._active = active;
            this._createdDate = createdDate;
}

    public get id(){
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get lastName() {
        return this._lastName;
    }

    public get email() {
        return this._email;
    }

    public get birthDate() {
        return this._birthDate;
    }

    public get active() {
        return this._active;
    }

    public get createdDate() {
        return this._createdDate;
    }

    public set id(id: Number){
        this._id = id;
    }

    public set name(name: string) {
        this._name = name;
    }

    public set lastName(lastName: string) {
        this._lastName = lastName
    }

    public set email(email: string) {
        this._email = email;
    }

    public set birthDate(birthDate: Date) {
        this._birthDate = birthDate;
    }

    public set active(active: boolean) {
        this._active = active;
    }

    public set createdDate(createdDate: Date) {
        this._createdDate = createdDate;
    }
}