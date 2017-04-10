const serve = require("serve");

const server = serve("vr", {
  port: process.env.PORT || 3030
});
