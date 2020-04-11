---
path: '/blog/the-nullish-coalescing-operator'
date: '2020-04-10'
title: 'Implementing the nullish coalescing operator'
excerpt: 'How to use nullish coalescing operator to make your code more clean and readable'
tags: ['article', 'blog']
---

# The nullish coalescing operator (??)

One of the new features of ES2020 is the implementation of the new nullish coalescing operator. It's a logical operator which returns the right-hand side of the operation only when the left-hand side is either `null` or `undefined`. Oposite to the OR (`||`) operator, which evaluates as falsy values of empty strings or zero, for example.

Its syntax is quite short and conscise:

```
leftExpression ?? rightExpression
```

## Nullish coalescing compared to OR operator

```javascript
const result = '' || 'This is a string'
console.log(result)
// This will log 'This is a string'

const number = 0 || 10
console.log(number)
// This will log 10
```

Now, if we try the same logical comparisons with `??`, the results are:

```javascript
const text = '' ?? 'This is a string'
// Will return ''

const number = 0 ?? 10
// Will return 0
```

Consider the use of nullish coalescing operator when you want to narrow down to `null` and `undefined` comparisons, leaving any other JavaScript _falsy_ value behind. Depending on your codebase, it might help to mitigate some cryptic errors.

Let's compare `??` to `||` in a practical example. We want to get the a player score and we know that zero is a valid value. If we want to use OR operator for this logical comparison, a value of zero would be considered falsy, returning the fallback value on the right side of the operation. Applying nullish coalescing operator fixes the issue in a simple and elegant way, with no need of extra checking.

```javascript
// Example with OR operator
const player = { score: 0 }

const getScore = ({ score }) => {
  return score || 'Not assigned' // returns "Not asigned"
}
```

The above example considers the value of `score` as falsy, returning `"Not assigned"` as a result.

```javascript
// Example with ?? operator
const player = { score: 0 }

const getScore = ({ score }) => {
  return score ?? 'Not assigned' // returns 0
}
```

The example with `??` operator considers 0 as a truthy value. For our use case, it is a valid output.

## Conclusion

The nullish coalescing logical operator `??` narrows down the comparison of falsy values only to `null` and `undefined` and it might help to prevent logical errors in your codebase. A `null` variable that hasn't been assigned or an `undefined` value that hasn't been declared are in fact situations where we don't have _something_ to compare. On the other hand, falsy JavaScript variable values like `NaN`, `0` and `''` are comparable values regardless of the validity nuances of each one of them.
