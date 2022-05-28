describe("第5大题：展开数组的数组", function () {
    it('展开前后数组的内容应该是相等的', function () {
        let obj={};
      expect(expand([[1, 2, 3], [4, 5], [6]])).to.deep.equal([1,2,3,4,5,6]);
    });

    it('这次我们考虑空数组，各种类型里各种奇葩的值', function () {
        let obj={};
      expect(expand([[], [true,3], [{},null,undefined]])).to.deep.equal([true,3,{},null,undefined]);
    });
  });
  