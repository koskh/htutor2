/* eslint-disable no-undef */
declare type ReduxAction = {type: string, payload: any};
declare type ThunkAction= (...args: Array<any>)=>State;
declare type ReducerAction = (state: State, action: {type: string, payload: any}) => State; // действ редюсера
declare type ReducerActions = {[handler: string]: ReducerAction};
//
declare type State = {[key: string]: any};
//
// type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
//
// declare type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
//
declare type ComponentStore = {
    id?: any,
    data: ?any,
    error: ?any,
    isPending: boolean,
    isUpdating: boolean
}
//

declare type Dispatch= Function;
