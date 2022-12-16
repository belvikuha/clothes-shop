export type SortType = 'LOW' | 'HIGH'
export type CurrencyType = 'USD' | 'UAH'
export type ActionType = 'SET_MAIN_STATE'
export type loadingType = 'idle' | 'error' | 'loading'
export type filtersType = 'ALL' |'BY_PRICE' | 'BY_AVAILABILITY' | 'BY_PRICE&&BY_AVAILABILITY'

export interface IAction {
    type: ActionType
    payload: IMainReducerState
}

export interface ICartItem {
    id: number
    quantity: number
} 

export interface IProduct{
    id: number,
    title: string,
    price: number,
    availability: [],
    color: string,
    category: string,
    image?: string 
}

export interface IMainReducerState{
    loading: boolean
    products: IProduct[]
    searchstring: string
    sortBy: SortType
    currency: CurrencyType
    cart: ICartItem[]
    filterString: string

}

export interface IFiltersReducerState{
    filters: filtersType[],
    filtersLoadingStatus: loadingType,
    activeFilter: filtersType
}