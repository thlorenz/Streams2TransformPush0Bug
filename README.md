## Streams2 odd behavior when pushing 0 in objectMode

I ran into the following problem. Since `0` is used as a special value for streams in node `0.10`, it breaks streams
that start with a `0` and have transforms in the pipe, even if I select `objectMode`.

I only see this happen when piping through a `Transform` stream. Piping directly to the destination does not have that
problem.

This [example](https://github.com/thlorenz/Streams2TransformPush0Bug/blob/master/index.js#L8) reproduces this behavior.

Im running `node v0.10.18`.

## Reproduce

Clone this repo.

Then `node index`. You'll see numbers printed to the console.

Now change the `startValue` in the example to `0` and `node index` again.

Nothing gets printed anymore.
