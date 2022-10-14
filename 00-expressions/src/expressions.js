// TODO: NUMBERS

/**
 * sumDouble(1, 2) → 3
 * sumDouble(3, 2) → 5
 * sumDouble(2, 2) → 8
 *
 * @param {number} a
 * @param {number} b
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

/**
 * diff21(19) → 2
 * diff21(10) → 11
 * diff21(21) → 0
 * diff21(22) → 2
 * diff21(-10) → 31
 *
 * @param {number} n
 * @returns {number}
 *      if n is greater than 21 return double the difference between 21 and n
 *      else the difference between n and 21
 */
function diff21(n)
{
    if (n > 21)
        return 2 * (n - 21);
    else
        return 21 - n;
}

/**
 * intMax(1, 2, 3) → 3
 * intMax(1, 3, 2) → 3
 * intMax(3, 2, 1) → 3
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 *      find largest parameter
 */
function intMax(a, b, c)
{
    let max = a > b ? a : b;

    if(max < c)
        max = c;

    return max;
}

/**
 * intMax(1, 2, 3) → 3
 * intMax(1, 3, 2) → 3
 * intMax(3, 2, 1) → 3
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 *      find largest parameter
 */
function intMax(a, b, c)
{
    let max = a > b ? a : b;

    if(max < c)
        max = c;

    return max;
}

/**
 * max1020(11, 19) → 19
 * max1020(19, 11) → 19
 * max1020(11, 9) → 11
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *      if parameters within range 10 - 20 find largest value of the parameters
 *      else 0
 */
function max1020(a, b)
{
     a = (a >= 10 && a <= 20) ? a : 0;
     b = (b >= 10 && b <= 20) ? b : 0;

    return a > b ? a : b;
}

/**
 * dateFashion(5, 10) → 2
 * dateFashion(5, 2) → 0
 * dateFashion(5, 5) → 1
 *
 * @param {number} you
 * @param {number} date
 * @return {number}
 *      if both parameters are 8 or more return 2
 *      else if both parameters are 2 or less return 0
 *      else return 0
 */
function dateFashion(you, date)
{
    if (you >= 8 || date >= 8) return 2;
    else if (you <= 2 || date <= 2) return 0;
    else return 1;
}

/**
 * sortaSum(3, 4) → 7
 * sortaSum(9, 4) → 20
 * sortaSum(10, 11) → 21
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *      sum parameters
 *      if sum is in range 10 - 19 return 20
 *      else return sum
 */
function sortaSum(a, b)
{
    let sum = a + b;

    return (sum >= 10 && sum <= 19) ? 20 : sum;
}

/**
 * teenSum(3, 4) → 7
 * teenSum(10, 13) → 19
 * teenSum(13, 2) → 19
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *      sum parameters
 *      if either parameter is in range 13 - 19 return 19
 *      else return sum
 */
function teenSum(a, b)
{
    let sum = a + b;
    return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) ? 19 : sum;
}

/**
 * teaParty(6, 8) → 1
 * teaParty(3, 8) → 0
 * teaParty(20, 6) → 2
 *
 * @param {number} tea
 * @param {number} candy
 * @return {number}
 *      return outcome as 0=bad, 1=good, or 2=great
 *      if both parameters are at least 5 return 1
 *      if one parameter is double the amount of the other return 2
 *      if either parameter is less than 5 return 0
 */
function teaParty(tea, candy)
{
    if(tea < 5 || candy < 5) return 0;
    else if (tea / candy >= 2 || candy / tea >= 2) return 2;
    else return 1;
}











