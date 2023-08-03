![logo](https://github.com/ZyteCloud/zytejs/blob/main/.github/assets/zytejs.png?raw=true)

# zytejs
 A api library for the Zyte Cloud API

```js
const { Zyte } = require("zytejs");
const z = new Zyte({
    token: "",
    uri: "http://localhost:3000",
});

(async function() {
    const getOk = z.ok();
    const ok = await getOk();
    console.log(ok)
    // Result: { status: 200, message: 'Ok', data: null }
})();
```