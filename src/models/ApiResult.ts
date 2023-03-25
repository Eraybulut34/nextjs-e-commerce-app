export class Result {
  constructor() {
    this.isSuccess = false;
    this.message = "";
  }

  isSuccess: boolean;
  message: string;
}

export class ApiResult<T> extends Result {
  constructor() {
    super();
    this.isSuccess = false;
    this.message = "";
    this.data = null;
  }

  data: T | null;
  isSuccess: boolean;
  message: string;
}

export class PaginatedList<T> {
  constructor() {
    this.items = null;
    this.pageNumber = 0;
    this.totalPages = 0;
    this.totalCount = 0;
    this.hasPreviousPage = false;
    this.hasNextPage = false;
  }

  items: Array<T> | null;
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export class LookupDto {
  constructor() {
    this.id = null;
    this.name = "";
    this.code = "";
  }

  id: number | null;
  name: string;
  code: string;
}

export class TaxDto {
  constructor() {
    this.id = 0;
    this.name = "";
    this.code = "";
    this.rate = 0;
  }
  id: number;
  name: string;
  code: string;
  rate: number;
}
