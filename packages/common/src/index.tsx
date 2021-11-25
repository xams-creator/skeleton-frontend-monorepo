export interface ApiResponse<T = any> {
    code: number,
    data: T[] & PageEntity<T>
    message: string
    notify: boolean
    params: any
    success: boolean
}

export interface PageEntity<T = any> {
    total: number,
    limit: number,
    rows: T[],
    page: number
    size: number,
}

export const YES = 1;
export const NO = 0;

export class BusinessError extends Error {

}

export class BusinessException extends Error {

}