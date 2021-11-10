export interface IState {
    videos: Array<object>
    isLoading: boolean,
    error: null
}

export interface IAction {
    type: string
    data: any
}