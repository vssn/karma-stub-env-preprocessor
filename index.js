var stubProcessEnv = function(args, config, logger, helper) {
  var log = logger.create("preprocessor.stub-process-env");
  log.info("Stubbing process.env");

  return function(content, file, done) {
    var envContent =
      "window.process = { env:"" };\n";
    done(envContent + "\n" + content);
  };
};

module.exports = {
  "preprocessor:stub-process-env": ["factory", stubProcessEnv]
};
