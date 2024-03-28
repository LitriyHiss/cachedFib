function fibonacci(n){
    if (n <= 1){
        return n;
    } else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function createCache(originalFun){
    const cache = new Map();

    return function(...args){
        const cacheKey = JSON.stringify(args);

        if (cache.has(cacheKey)){
            return cache.get(cacheKey);
        }

        const result = originalFun(...args);
        cache.set(cacheKey, result);

        return result;
    }
}

const cachedFib = createCache(fibonacci);

onmessage = function(event){
    const result = cachedFib(event.data);
    postMessage(result);
}