const corsOptions = {
  origin: (origin, callback) => {
    [
      "http://localhost:4000",
      "https://www.google.com",
      "https://www.github.com",
    ].indexOf(origin) !== -1 || !origin
      ? callback(null, true)
      : callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
