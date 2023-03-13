import { IValidator, StringOrNull } from "../Types";

export class MinLengthValidator implements IValidator<StringOrNull> {
    private minLength: number;
    constructor(minLength: number) {
        this.minLength = minLength;
    }
    public isValid(input: StringOrNull): boolean {
        if(!input) {
            return false;
        }
        return input.length >= this.minLength;
    }
}