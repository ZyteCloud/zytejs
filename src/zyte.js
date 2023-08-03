"use strict";

exports.Zyte = Zyte;

var fetch = require("cross-fetch");

function Zyte(options = {}) {
  this.token = options["token"];
  this.uri = options["uri"];
  this._ = async function (method = "GET" | "POST" | "PATCH" | "DELETE", endpoint, data) {
    return new Promise(async (resolve, reject) => {
      return fetch(this.uri + endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
        body: JSON.stringify(data),
      }).then((x) => {
        x.json().then((res) => {
          return resolve(res);
        });
      });
    });
  };

  if (typeof this.token === "string") {
    return true;
  } else {
    throw new ReferenceError("[zytejs] API token may only be a string!");
  }
}

Zyte.prototype.user = function (id) {
  return async () => {
    return await this._("PATCH", "/api/v1/users/" + id);
  };
};

Zyte.prototype.shorten = function (id, options) {
  var link = options["link"];
  return async () => {
    return await this._("POST", "/api/v1/shorten", {
      userid: id,
      link: link,
    });
  };
};
