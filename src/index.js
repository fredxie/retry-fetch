import 'isomorphic-fetch';
import Promise from 'es6-promise';
import {
  getExponentialWaitTimeInMilliseconds,
  getMergedRetryConfigs
} from "./utils";

function retryFetch(url, fetchConfigs, retryConfigs) => {
  return new Promise((res, rej) => {
    const tryFetch = (fetchUrl, fetchConf, retryConf) => {
    fetch(fetchUrl, fetchConf)
    .then(response => res(response))
    .catch(error => {
      if (retryConf.retries > 0) {
        const updatedRetryConf = getMergedRetryConfigs(retryConf);

        setTimeout(() => {
          tryFetch(fetchUrl, fetchConf, updatedRetryConf);
        }, getExponentialWaitTimeInMilliseconds(retryConfig));
      } else {
        // If caller wants to implement an error callback, this lets them do it,
        // otherwise the error would be resolved with this catch call.
        rej(error);
      }
    });
    };


    tryFetch(conf, conf);
  });
};

export default retryFetch;
