export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface Count {
  count: number;
}

interface IncreaseNumber {
  type: typeof INCREMENT;
}

interface DecreaseNumber {
  type: typeof DECREMENT;
}

export type CountNumberActionTypes = IncreaseNumber | DecreaseNumber;
