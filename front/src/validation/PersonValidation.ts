import { IPersonState, IValidation } from "../Types";
import { MinLengthValidator } from "../validator/MinLengthValidator";

export class PersonValidation implements IValidation {
    private readonly firstNameValidator: MinLengthValidator = new MinLengthValidator(1);
    private readonly lastNameValidator: MinLengthValidator = new MinLengthValidator(2);

    public Validate(state: IPersonState, errors: string[]): void {
        if(!this.firstNameValidator.isValid(state.FirstName)) {
            errors.push("The first name is a minimum of 1 character");
        }

        if(!this.lastNameValidator.isValid(state.LastName)) {
            errors.push("The last name is a minimum of 2 characters");
        }
    }
}