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

  interface Response {
    status: number;
    message: string;
    data?: Object | null | { user: string, url: string };
  }

  type METHOD = "GET" | "POST" | "PATCH" | "DELETE";
  class Zyte {
    private token: string;
    private uri: string;
    private set _(method: METHOD, endpoint: string, data?: Object): Promise;
    public get ok(): Promise<Response>;
    public set user(id: string): Promise<User>;
    public set shorten(id: string, link: string): Promise<Response>;
    public set delete(id: string, linkid: string): Promise<Response>
    constructor(options: ZyteOptions);
  }
}
