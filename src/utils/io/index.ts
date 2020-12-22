export type IO<A> = {
  io: () => A;
  _tag: 'IO';
};

export const of: <A>(f: () => A) => IO<A> = (fn) => ({
  io: fn,
  _tag: 'IO',
});
