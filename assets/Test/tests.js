QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Temperature Test", function( assert ) {
  assert.strictEqual(Test.Name(100), 'Success','Successfully Entered valid Number.');
  assert.strictEqual(Test.Name(-10), 'Success','Successfully Entered valid Number.');
  assert.strictEqual(Test.Name(""),'Empty Value', 'Returns Please Enter the number.');
  assert.strictEqual(Test.Name("Sunil"),'It is a String', 'Returns Please Enter only Number');
  
  
  
});

