export const ID = "MINDS_LIMITLEZZ";
export const Minds = {blue: "#1b85d6"};

export interface Meta {
  analytics: boolean;
}

export class Global {
  static get(): Meta {
    return JSON.parse(localStorage.getItem(ID));
  }

  static set(meta: Meta): void {
    localStorage.setItem(ID, JSON.stringify(meta));
  }
}
