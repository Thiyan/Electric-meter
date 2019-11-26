export class Data {
  public I: String;
  public T: number;
  public RR: number;
  public HR: number;
  public PPG: number;
  public S: String;

  private static instance: Data;
  private constructor() {}

  static getInstance() {
    if (!Data.instance) {
      Data.instance = new Data();
    }
    return Data.instance;
  }

  getHR() {
    return this.HR;
  }

  getTem() {
    return this.T;
  }
  getPPG() {
    return this.PPG;
  }
  getRR() {
    return this.RR;
  }
}
