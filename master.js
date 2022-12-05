var Links={
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
};

var Body={
  setColor:function(color){document.querySelector('body').style.color =color;},
  setBGColor:function(color){document.querySelector('body').style.backgroundColor =color;}

  }


function nightDayHandler(self){
  if(self.value == 'night'){
    Body.setBGColor('black');
    //bodySetBGColor('black');
    //target.style.backgroundColor = 'black';
    Body.setColor('white');
    //bodySetColor('white');
    //target.style.color = 'white';
    self.value='day';
    Links.setColor('powderblue');
    //linkSetColor('powderblue');
    //self.value = 'day';

  } else {
    Body.setBGColor('white');
    //bodySetBGColor('white');
    //target.style.backgroundColor = 'white';
    Body.setColor('black');
    //bodySetColor('black');
    //target.style.color = 'black';
    self.value='night';
    Links.setColor('blue');
    //linkSetColor('blue');
    //self.value = 'night';
  }
}
