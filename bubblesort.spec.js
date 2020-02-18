describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('if given an already sorted array, whileLoop iteration should be 1', function(){
    expect( bubbleSort([1,2,3,4,5,6,7,8,9,10]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
  });

  it('sorts an inputted array ', function(){
    expect( bubbleSort([1,3,4,5,2]) ).toEqual( [1,2,3,4,5] );
  });


  it('output array has the same length', function(){
    expect( bubbleSort([1,3,4,5,2]).length ).toEqual( 5 );
  });

  xit('expects input and output array to have the same reference', function(){
    expect( bubbleSort() ).toEqual( );
  });



});
