import type { PropertyStatus } from "./PropertyStatus.ts";

export default class Property {
    private id?: number;
    private title: string;
    private address: string;
    private status: PropertyStatus;

    constructor(title: string, address: string, status: PropertyStatus) {
        this.title = title;
        this.address = address;
        this.status = status;
    }
}