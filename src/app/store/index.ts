import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
import * as fromSmartBand from './smart-band/smart-band.reducer';
import * as fromOrder from './order/order.reducer';
import { AuthState } from '../models/user.model';
import { SmartBandState } from '../models/smart-band.model';
import { OrderState } from '../models/order.model';

export interface AppState {
  auth: AuthState;
  smartBands: SmartBandState;
  orders: OrderState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  smartBands: fromSmartBand.reducer,
  orders: fromOrder.reducer
};

export const metaReducers: MetaReducer<AppState>[] = [];
