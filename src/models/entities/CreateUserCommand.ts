import { LookupDto, TaxDto } from "../ApiResult";

export class CreateUserCommand {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
  }
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}