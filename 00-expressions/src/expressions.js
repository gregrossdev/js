// TODO: NUMBERS

/**
 * sumDouble(1, 2) → 3
 * sumDouble(3, 2) → 5
 * sumDouble(2, 2) → 8
 *
 * @param {Number} a
 * @param {Number} b
 * @return int
 *      if params are equal double the sum
 *      else sum
 */

function sumDouble(a, b)
{
    let sum = a + b;
    if (a == b) return sum * 2;
    else return sum;
}