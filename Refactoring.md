# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. Move the TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH constants at the top of the file
2. Created a helper function named hash which will create hash and thus making code more DRY
3. Simplified if else ladder by assigning default value to candidate as TRIVIAL_PARTITION_KEY
4. Used ternary operator to return candidate by making check of candidate length against MAX_PARTITION_KEY_LENGTH and thus made code more clean
5. I have added more test cases for each of the possible scenario so that the code is well tested against all possibilities.
6. To ensure my code does not break the existing implementation tested it against test cases and code has successfully passed.
7. By following all that i could, I have ensured the code becomes more clean, neat, readable and avoid unneccessary complexities.