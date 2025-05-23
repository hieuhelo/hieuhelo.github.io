(function() {
  function lunarInfo(y) {
    var ly = 348;
    var leap = 0;
    var h = new Array(16);
    ly += (solarDays(y - 1) - 1721425.5 + 6942.5) / 29.5305886;
    for (var i = 0; i <= 15; i++) {
      h[i] = data[y - 1900][i];
    }
    leap = h[0];
    ly = ly + leap;
    return {
      lYearDays: ly,
      leapMonth: leap,
      leapDays: leap == 0 ? 0 : ((h[leap] == 0 ? 30 : 29))
    };
  }

  function solarDays(y, m) {
    if (m === undefined) m = 12;
    return Math.floor(365.242 * y) + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((367 * m - 362) / 12) + (m <= 2 ? 0 : (isLeap(y) ? -1 : -2)) + 2;
  }

  function isLeap(y) {
    return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);
  }

  var data = [
    [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x04bd7, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04bd8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04bd7, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04bd8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04bd7, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04bd8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04bd7, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x057bd, 0x04ad0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0aa4d, 0x0a4ed],
    [0x04bd8, 0x04ae0, 0x0a4d0, 0x0d250, 0x0d558, 0x156a0, 0x09560, 0x04d55, 0x049b0, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a9b0],
    [0x04ad8, 0x04ae0, 0x0a4d0, 0x0d260, 0x0d950, 0x16554, 0x0d230, 0x09550, 0x049b0, 0x0aa55, 0x16ada, 0x055b0, 0x096d0, 0x04ba4, 0x0


