/*eslint-disable */

// Redux Types
declare type ReduxAction = {
  type: string,
  data?: any
};

declare type Dispatch = (action: ReduxAction) => void;

// Async Redux Action
declare type ReduxAsyncAction = (dispatch: Dispatch) => void;

// Redux Middleware
declare function Middleware (store: any):NextMiddleware;
declare function NextMiddleware (next: Function): ActionCreator;
declare function ActionCreator (action: ReduxAction): NextMiddleware;
