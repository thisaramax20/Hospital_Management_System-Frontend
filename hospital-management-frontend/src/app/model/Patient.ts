export class Patient{
    public id: number;
    public name: string;
    public age: string;
    public address: string;
    public nic: string;
    public bloodGroup: string;
    public gender: string;
    public contact: string
    public note: string;
    public allergies: string;
    public category:string;
    constructor(id: number, name: string, age: string, address: string, nic: string, bloodGroup: string, gender: string, contact: string, note: string, allergies: string,category:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.nic = nic;
        this.bloodGroup = bloodGroup;
        this.gender = gender;
        this.contact = contact;
        this.note = note;
        this.allergies = allergies;
        this.category = category;
    }
    // Getters and Setters
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getAge(): string {
        return this.age;
    }
    public setAge(age: string): void {
        this.age = age;
    }
    public getAddress(): string {
        return this.address;
    }
    public setAddress(address: string): void {
        this.address = address;
    }
    public getNic(): string {
        return this.nic;
    }
    public setNic(nic: string): void {
        this.nic = nic;
    }
    public getBloodGroup(): string {
        return this.bloodGroup;
    }
    public setBloodGroup(bloodGroup: string): void {
        this.bloodGroup = bloodGroup;
    }
    public getGender(): string {
        return this.gender;
    }
    public setGender(gender: string): void {
        this.gender = gender;
    }
    public getContact(): string {
        return this.contact;
    }
    public setContact(contact: string): void {
        this.contact = contact;
    }
    public getNote(): string {
        return this.note;
    }
    public setNote(note: string): void {
        this.note = note;
    }
    public getAllergies(): string {
        return this.allergies;
    }
    public setAllergies(allergies: string): void {
        this.allergies = allergies;
    }
    public getCategory(): string {
        return this.category;
    }
    public setCategory(category: string): void {
        this.category = category;
    }
}