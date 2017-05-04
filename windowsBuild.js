"use strict"

const builder = require("electron-builder")
const Platform = builder.Platform

// Promise is returned
builder.build({
  targets: Platform.WINDOWS.createTarget(),
  config: {
   "//": "build options, see https://goo.gl/ZhRfla"
  }
})
  .then(() => {
    // handle result
  })
  .catch((error) => {
    // handle error
  })