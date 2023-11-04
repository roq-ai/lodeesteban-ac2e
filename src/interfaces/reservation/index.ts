import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
