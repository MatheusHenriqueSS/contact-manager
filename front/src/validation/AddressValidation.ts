import { RegularExpressionLiteral } from "typescript";
import { IPersonState, IValidation } from "../Types";
import { MinLengthValidator } from "../validator/MinLengthValidator";
import { RegularExpressionValidator } from "../validator/RegularExpressionValidator";

export class AddressValidation implements IValidation {
    private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(5);
    private readonly zipCodeValidator: RegularExpressionValidator = new RegularExpressionValidator("[0-9]{5}-?[0-9]{3}");

    public Validate(state: IPersonState, errors: string[]): void {
        if(!this.minLengthValidator.isValid(state.Address1)) {
            errors.push("Address line 1 must be greater than 5 characters");
        }

        if(!this.minLengthValidator.isValid(state.Town)) {
            errors.push("Town must be greater than 5 characters");
        }

        if(!this.minLengthValidator.isValid(state.County)) {
            errors.push("County must be greater than 5 characters");
        }

        if(!this.zipCodeValidator.isValid(state.Postcode)) {
            errors.push("The postal/zip code is invalid")
        }
    }
}