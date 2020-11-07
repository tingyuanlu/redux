const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);

  next(action);
};

//currying
export default logger;
