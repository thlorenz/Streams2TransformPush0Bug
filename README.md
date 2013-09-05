## Streams2 odd behavior when pushing 0 in objectMode

I ran into the following problem. Since `0` is used as a special value for streams in node `0.10`, it breaks streams
that start with a `0`, even if I select `objectMode`.

I only see this happen when piping through a `Transform` stream. Piping directly to the destination does not have that
problem.

This example reproduces this behavior.
