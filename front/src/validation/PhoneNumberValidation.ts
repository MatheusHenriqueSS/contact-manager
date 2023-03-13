import { IPersonState, IValidation } from "../Types";
import { MinLengthValidator } from "../validator/MinLengthValidator";
import { RegularExpressionValidator } from "../validator/RegularExpressionValidator";

export class PhoneValidation implements IValidation {
    private readonly regexValidator: RegularExpressionValidator = 
        new RegularExpressionValidator(`^(?:\\((?:[0-9]{2})\\)|(?:[0-9]{2}))[-. ]?(?:[0-9]{5})[-. ]?(?:[0-9]{4})$`);
    private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(1);

    public Validate(state: IPersonState, errors: string[]): void {
        if(!this.minLengthValidator.isValid(state.PhoneNumber)) {
            errors.push("You must enter a phone number");
        }

        if(!this.regexValidator.isValid(state.PhoneNumber)) {
            errors.push("The phone number format is invalid");
        }
    }
}

