describe("第3大题：字符计数", function () {
  it('只记录字符串B的话，countBs("CBB")应为为2', function () {
    expect(countBs("CBB")).to.equal(2);
  });
  it('只记录字符串B的话，countBs("CB\r\nBCBCccb")应为为3', function () {
    expect(countBs("CB\r\nBCBCccb")).to.equal(3);
  });

  it('countChar("kakkerlak", "k")应该为4', function () {
    expect(countChar("kakkerlak", "k")).to.equal(4);
  });

  it('countChar("kakkerlakKKKKk", "k")应该为5', function () {
    expect(countChar("kakkerlakKKKKk", "k")).to.equal(5);
  });
  it('countChar("kakkerlakKKKKk", "K")应该为4', function () {
    expect(countChar("kakkerlakKKKKk", "K")).to.equal(4);
  });
});


