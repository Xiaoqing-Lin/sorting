/* eslint-disable no-undef */
describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2])).toEqual([[1], [2]]);
  });

  it('is able to split an odd array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1], [2])).toEqual([1, 2]);
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('mergeSort function', function() {
  it('is able to split and merge two sorted arrays into one sorted array', function() {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});

/*

1





*/
