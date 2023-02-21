// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey : 'stagingSecretKey'
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'productionSecretKey'
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : staging;

// Check that the current environment is one of the environments above, if not, default to staging
const environmentToExport = typeof (environments[currentEnvironment]) === 'object'
    ? environments[currentEnvironment]
    : environments.staging;

// Export the module
module.exports = environmentToExport;