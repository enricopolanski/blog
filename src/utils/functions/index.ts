export interface Refinement<A, B extends A> {
  (a: A): a is B;
}

export interface Predicate<A> {
  (a: A): boolean;
}
