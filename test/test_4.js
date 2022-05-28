describe("第4大题：深层比较", function () {
    it('同一个对象必然是相等的', function () {
        let obj={};
      expect(deepEqual(obj, obj)).to.be.true;
    });
    it('两个对象属性都不同，那一定不想等只记录字符串B的话，countBs("CB\r\nBCBCccb")应为为3', function () {
      expect(deepEqual(obj, {here: 1, object: 2})).to.be.false;
    });
  
    it('虽然不是同一个对象，但如果属性以及嵌套属性都相等的话，必然为true', function () {
        let obj = {here: {is: "an"}, object: 2};
        expect(deepEqual(obj, {here: {is: "an"}, object: 2})).be.true;
    });
  });
  