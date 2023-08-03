declare module "zytejs" {
  interface ZyteOptions {
    token: string;
    uri: string;
  }

  interface Contents {
    Link: string;
    URLID: string;
  }

  interface User {
    status: number;
    message: string;
    contents: Contents[];
  }

  type METHOD = "";
  class Zyte {
    private token: string;
    private uri: string;
    private set _(method: METHOD, endpoint: string, data?: Object): Promise;
    public set user(id: string): Promise<User>;
    constructor(options: ZyteOptions);
  }
}
