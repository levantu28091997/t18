(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Vietnamese
  jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: "nữa",
    seconds: "%d giây",
    minute: "1 phút",
    minutes: "%d phút",
    hour: "1 giờ",
    hours: "%d giờ",
    day: "1 ngày",
    days: "%d ngày",
    month: "1 tháng",
    months: "%d tháng",
    year: "1 năm",
    years: "%d năm",
    wordSeparator: " ",
    numbers: []
  };
}));
