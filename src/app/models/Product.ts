export class Product {

    private _id: number;
    private _name: string;
    private _description: string;
    private _stock: number;
    private _price: number;
    private _creationDate: Date;
    private _image: any;

    constructor(id: number, name: string, description: string, stock: number, 
        price: number, creationDate: Date, image: any) {

        this._id = id;
        this._name = name;
        this._description = description;
        this._stock = stock;
        this._price = price;
        this._creationDate = creationDate;
        this._image = image;
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get description() {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get stock() {
        return this._stock;
    }

    public set stock(stock: number) {
        this._stock = stock;
    }

    public get price() {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get creationDate() {
        return this._creationDate;
    }

    public set creationDate(creationDate: Date) {
        this._creationDate = creationDate;
    }

    public get image() {
        return this._image;
    }

    public set image(image: any) {
        this._image = image;
    }
}