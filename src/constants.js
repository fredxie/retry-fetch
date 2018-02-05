export const FIELD_CONSTANTS = {
    ATTEMPT: 'attempt',
    FACTOR: 'factor',
    INITIAL_DELAY: 'initialDelay',
    MAX_DELAY: 'maxDelay'
};

export const DEFAULT_RETRY_CONFIG = {
    [FIELD_CONSTANTS.ATTEMPT]: 0,
    [FIELD_CONSTANTS.FACTOR]: 2,
    [FIELD_CONSTANTS.INITIAL_DELAY]: 200, // Milliseconds
    [FIELD_CONSTANTS.MAX_DELAY]: 1000 // Milliseconds, allows for 3 retries with default initialDelay
};