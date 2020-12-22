export type Lazy<A> = {
  io: () => A;
  _tag: 'Lazy';
};

export const of: <A>(f: () => A) => Lazy<A> = (fn) => ({
  io: fn,
  _tag: 'Lazy',
});
