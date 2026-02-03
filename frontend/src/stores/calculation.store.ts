import { CalculationResponse } from "@/types";
import { Nullable } from "@/utils";
import { makeAutoObservable } from "mobx";

class CalculationStore {
  private loadingState: boolean = false;
  private response: Nullable<CalculationResponse> = null;

  constructor() {
    makeAutoObservable(this);
  };

  getLoadingState(): boolean {
    return this.loadingState;
  };

  setLoadingState(state: boolean) {
    this.loadingState = state;
  };

  getResponse(): Nullable<CalculationResponse> {
    return this.response;
  };

  setResponse(response: CalculationResponse) {
    this.response = response;
  };

  clearStore() {
    this.loadingState = false;
    this.response = null;
  };
};

export default CalculationStore;
