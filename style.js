var options = {
  //segmentShowStroke: false,
  percentageInnerCutout: 70,
  //animation: true,
  animationEasing: 'easeOutQuint',
  //animateRotate: false,
  animateScale: true
};
var data = {
  photoshop: [
    {
      value: 95,
      color: "#02aac6"
    },
    {
      value: 5,
      color: "#C4C4C4"
    }
  ],
  illustrator: [
    {
      value: 75,
      color: "#02aac6"
    },
    {
      value: 15,
      color: "#C4C4C4"
    }
  ],
  indesign: [
    {
      value: 65,
      color: "#02aac6"
    },
    {
      value: 35,
      color: "#C4C4C4"
    }
  ],
  html: [
    {
      value: 50,
      color: "#02aac6"
    },
    {
      value: 50,
      color: "#C4C4C4"
    }
  ],
  brackets: [
    {
      value: 40,
      color: "#02aac6"
    },
    {
      value: 60,
      color: "#C4C4C4"
    }
  ],
  photo: [
    {
      value: 90,
      color: "#02aac6"
    },
    {
      value: 10,
      color: "#C4C4C4"
    }
  ]
};

var offset = 0;
$.each(data, function (key, data) {
  var canvas = document.querySelector('#' + key);
  if (canvas) {
    offset += 250;
    setTimeout(function () {
      var ctx = canvas.getContext('2d');
      var chart = new Chart(ctx);
      chart.Doughnut(data, options);
    }, offset);
  }
});