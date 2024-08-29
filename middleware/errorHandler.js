const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { logEvents } = require("./logger");

const errorHandler = (err, req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "errorLog.log");
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500;
  res.status(status);
  res.json({ message: err.message });
  //   next();
};

module.exports = { errorHandler };
