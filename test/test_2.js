describe("第2大题：棋盘", function () {
  it("如果宽高都为1时，应该只有一个空格", function () {
    expect(chessBoard(1, 1)).to.equal(" ");
  });

  it("如果把回车换行符换为0，把空格换成1，则chessBoard(2, 2)和chessBoard(2, 3)分别会是这样子", function () {
    let r = (str) =>
      str
        .replaceAll("\r\n", "0")
        .replaceAll("\r", "0")
        .replaceAll("\n", "0")
        .replaceAll(" ", "1");
    expect(r(chessBoard(2, 2))).to.equal("1#0#1");
    expect(r(chessBoard(2, 3))).to.equal("1#10#1#");
  });
});
