
describe('第1大题', function() {
  describe("1:列出你的信息，这样才知道是谁的卷子:"+you.name+'-'+you.number, function() {
    it('学号必须是number类型的全学号', function() {
      expect(you.number).to.be.a("number")
      expect(String(you.number)).to.have.lengthOf(11);
      //assert.equal(String(you.number).length, 11);
    });
    it('姓名、学号必须都存在', function() {
      expect(you.name && you.number).to.be.exist;
    });
  });
  describe('2:一行普通函数定义搞定闰年计算', function() {
    it('必须是一行搞定', function() {
      expect(isLeapYear.toString().indexOf("\n"),"听明白了没有？").to.equal(-1);
    });

    it('1996、2020,2000年应该是闰年', function() {
      expect(isLeapYear(1996)).to.be.ok;
      expect(isLeapYear(2020)).to.be.ok;
      expect(isLeapYear(2000)).to.be.ok;
    });
    it('1900,2001,2011应不是闰年', function() {
      expect(isLeapYear(1900)).to.not.be.ok;
      expect(isLeapYear(2001)).to.not.be.ok;
      expect(isLeapYear(2011)).to.not.be.ok;
    });
  });


  describe('3:一行箭头函数定义搞定闰年计算', function() {
    it('必须是一行搞定', function() {
      expect(isLeapYear2.toString().indexOf("\n"),"听明白了没有？").to.equal(-1);
    });

    it('1996、2020,2000年应该是闰年', function() {
      expect(isLeapYear2(1996)).to.be.ok;
      expect(isLeapYear2(2020)).to.be.ok;
      expect(isLeapYear2(2000)).to.be.ok;
    });
    it('1900,2001,2011应不是闰年', function() {
      expect(isLeapYear2(1900)).to.not.be.ok;
      expect(isLeapYear2(2001)).to.not.be.ok;
      expect(isLeapYear2(2011)).to.not.be.ok;
    });
  });


  describe('4:列出六种不同类型的值，作为valueTypes数组的元素', function() {
    it('1.valueTypes 应是长度为6的数组哦', function() {
      expect(valueTypes,"数组也是object哦").to.be.an("array");
      expect(valueTypes,"他的length属性的值得是6").to.have.lengthOf(6);
    });

    it('1.valueTypes 6个元素必须分别是六种不同的类型', function() {
      expect(valueTypes.reduce((a,b)=>(a[typeof b]=true,a),{}),"用汇总高阶函数检查这两个值的类型").to.deep.equal({string:true,boolean:true,number:true,object:true,function:true,undefined:true});
      expect(valueTypes.length,"他的length属性的值得是6").to.equal(6);
    });
  });
});

