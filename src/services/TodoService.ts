import type { ApiResult, Result, LookupDto, TaxDto, PaginatedList } from "@/models/ApiResult";
import { BaseService } from "./Common/BaseService";
import type { AxiosResponse } from "axios";

export class TodoService extends BaseService {
    constructor() {
        super("todos");
    }

    GetTodoDetail(id: number): Promise<AxiosResponse<ApiResult<any>>> {
        return this.client.Get<ApiResult<any>>(this.baseUrl + `/${id}`);
    }
}