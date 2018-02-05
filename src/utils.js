import { FIELD_CONSTANTS, DEFAULT_RETRY_CONFIG } from "./constants";

export function getExponentialWaitTimeInMilliseconds(retryConfig) {
  return Math.min(
    retryConfig[FIELD_CONSTANTS.INITIAL_DELAY]
    * Math.pow(retryConfig[FIELD_CONSTANTS.FACTOR], retryConfig[FIELD_CONSTANTS.ATTEMPT]),
    retryConfig[FIELD_CONSTANTS.MAX_DELAY]);
}

export function getMergedRetryConfigs(overridingRetryConfigs) {
  let retryConfig = overridingRetryConfigs;

  if (!retryConfig[FIELD_CONSTANTS.FACTOR]) {
    retryConfig[FIELD_CONSTANTS.FACTOR] = DEFAULT_RETRY_CONFIG[FIELD_CONSTANTS.FACTOR];
  }

  if (!retryConfig[FIELD_CONSTANTS.INITIAL_DELAY]) {
    retryConfig[FIELD_CONSTANTS.INITIAL_DELAY] = DEFAULT_RETRY_CONFIG[FIELD_CONSTANTS.INITIAL_DELAY];
  }

  if (!retryConfig[FIELD_CONSTANTS.MAX_DELAY]) {
    retryConfig[FIELD_CONSTANTS.MAX_DELAY] = DEFAULT_RETRY_CONFIG[FIELD_CONSTANTS.MAX_DELAY];
  }

  return retryConfig;
}