---
path: '/blog/throttle-and-debounce'
date: '2020-09-14'
title: 'Throttle and Debounce from scratch, explained'
excerpt: 'Implementation of throttle and debounce functions with vanilla JavaScript'
tags: ['article', 'blog', 'coding-interviews']
---

# Throttle and Debounce from scratch

Throttling and debouncing functions are a simple method to delay the action of a behavior. You can think of a throttle as a function that will perform an action only once every certain amount of time. Debounce on the other side will perform an action only once if the time elapsed from the invocation has passed.

## What's the purpose of throttle and debounce?

Think of any action that might represent an expensive, costly task for your application and you want to limit or delay based on a determined amount of time. A good example is the use case of an autocomplete text input when the autocomplete _needs_ to make an API call using the current input value that's being updated on every keystroke.

- Can I limit the fetch request interval to a time interval? Throttle can help.
- Would it be ok to only fetch data after a time interval of user inactivity? Debounce can help.

## Implementing throttle

Let's start with the implementation of a throttling function step by step. Everything boils down to the use of closures and `setTimeout` API.

**1. Set up a wrapper function.**

We want to throttle a given function on a given cadence. Our wrapper function should take two arguments and return a new function:

```javascript
const greeter = () => {
  console.log('Hello world!');
}

const throttle = (fn, ms) => {
  return () => {
    setTimeout(() => {
      fn();
    }, ms);
  }
}

// Later we will create a throttled instance as follows:
const throttledGreeter = throttle(greeter, 1000);
throggledGreeter();
```

At this point the `throttle` function is only delaying the execution of `fn` by whatever value has been given to `ms`: if I perform a call on 3 times in less than a second, 3 calls to `fn` will be executed. Now we need to somehow tell our code to only execute the first call within `setTimeout` and ignore the subsequent ones until the first timer has went off.

**2. Hold a timer reference from setTimeout**

`setTimeout` API returns an identifier which we can use within the scope of `throttle`. The returned anonymous function will have access to that reference because it will be declared in it's parent scope. Closure magic!

```javascript
const throttle = (fn, ms) => {
  let timerId = undefined;
  return () => {
    timerId = setTimeout(() => {
      fn();
    }, ms);
  }
}
```

Now we can determine if `timerId` is defined or not when an instance of `throttle` is called:

```javascript
const throttle = (fn, ms) => {
  let timerId = undefined;
  return () => {
    if (timerId === undefined) {
      timerId = setTimeout(() => {
        fn();
      }, ms)
    }
  }
}
```

**3. Reset the timer reference after the execution**

Our code now is delaying the given `fn` but `timerId` remains defined. In order to start a new timer we need to reset `timerId` to `undefined` in order to start new timers on subsequent calls:

```javascript
const throttle = (fn, ms) => {
  let timerId = undefined;
  return () => {
    if (timerId === undefined) {
      timerId = setTimeout(() => {
        fn();
        timerId = undefined;
      }, ms)
    }
  }
}
```

That wraps up our throttle implementation.

## Implementing debounce

A debounce implementation is quite similar to throttle. A debounced function will reset and start a new a timer **every time** it's called. Our implementation doesn't need to check if there's an existing timer, it will just go and reset it. Anyway, we need to keep a reference to the timer in order to cancel it. 

- If we debounce `fn` with 1000 ms and we call the debounced `fn` only once, the action will be delayed for 1000 ms. 
- If we call the same debounced `fn` 5 times within 1000ms, **only the last call** will be performed.

**1. Set up a wrapper function**

The starting code looks almost the same. An instance of `debounce` will hold a reference of `timerId` as `undefined`. The first call to our instance will set `timerId` value as the timer reference.

```javascript
const debounce = (fn, ms) => {
  let timerId = undefined;
  return () => {
    timerId = setTimeout(() => {
      fn();
    }, ms);
  }
}
```

**2. Reset the timer on subsequent calls**

Now we need to tell our code that on subsequent calls this timer reference must be cancelled.

```javascript
const debounce = (fn, ms) => {
  let timerId = undefined;
  return () => {
    clearTimeout(timerId); // Here is the magic
    timerId = setTimeout(() => {
      fn();
    }, ms);
  }
}
```

It is not enough to reset `timerId` back to undefined. We also need to tell our environment to "forget" the timer previously created. We do this with `clearTimeout`, which will cancel the timer passed as an argument. It's worth to note that there is an equivalent for `setInterval`: the `clearInterval` function.

And that's it for the `debounce` implementation!

## Resources related to this article

* More on [setTimeout from MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout).
* More on [closures from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).
* More on [closures from JavaScript.info](https://javascript.info/closure).

