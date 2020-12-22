import { Predicate, Refinement } from '../functions';

/**
 *
 * Given an array of generic items return the first element of an array.
 * @since 2020.11.1
 */
export const head: <A>(as: A[]) => A | undefined = ([first]) => first;

/**
 *
 * Given an array of generic items return all but the first elements of the array.
 * @since 2020.11.1
 */
export const tail: <A>(as: A[]) => A[] = ([first, ...rest]) => rest;

/**
 *
 * Given an array of generic items return the last one.
 * @since 2020.11.1
 */
export const last: <A>(as: A[]) => A | undefined = (as) => as[as.length - 1];

/**
 *
 * @since 2020.11.1
 */
export const reduce: <A, B>(b: B, fn: (b: B, a: A) => B) => (as: A[]) => B = (
  b,
  fn
) => (as) => as.reduce(fn, b);

/**
 *
 * @since 2020.11.1
 */
export declare const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (as: A[]) => B[];
  <A>(predicate: Predicate<A>): (as: A[]) => A[];
};
