# retry-fetch

A backoff retry strategy for the `Fetch` API.

Expose a function that wraps the [isomorphic-fetch](https://github.com/matthew-andrews/isomoretries) API and perform retry with configured delay (Linear/Exponential) 
if fetch call failed (Due to AdBlocker, network issues, etc.) 

## Installation

```javascript
npm install retry-fetch
```

# Unit Tests

```javascript
npm test
```

# Example

# API