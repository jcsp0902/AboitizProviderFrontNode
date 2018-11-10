import { createAction } from 'redux-actions';
import * as TYPE from './Types';

export const postCustomerRegisterEpic = createAction(
  TYPE.POST_CUSTOMER_REGISTER_EPIC,
);
export const postCustomerRegisterLoading = createAction(
  TYPE.POST_CUSTOMER_REGISTER_LOADING,
);
export const postCustomerRegisterError = createAction(
  TYPE.POST_CUSTOMER_REGISTER_ERROR,
);
export const postCustomerRegisterSuccess = createAction(
  TYPE.POST_CUSTOMER_REGISTER_SUCCESS,
);
