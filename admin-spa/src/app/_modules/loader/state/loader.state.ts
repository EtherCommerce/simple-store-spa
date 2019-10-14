export interface LoaderState {
  show: boolean;
}

export const initializeState = () => ({
  show: false
} as LoaderState);
