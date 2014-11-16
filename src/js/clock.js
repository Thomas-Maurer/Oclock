var Clock = function(){
  var stage;
  var layerClock;
  var adresse='';
  var heures;
  var minutes;
  var imageClock = new Image();
  var imageHour = new Image();
  var imageMinute = new Image();


  this.init = function () {
    //init stage
    stage = new Kinetic.Stage({
      container: 'game',
      width: 800,
      height: 800,
      });
    //init layers
    layerClock = new Kinetic.Layer();
    if (adresse === ''){
      imageClock.src = 'css/asset/clock1.png'
    }else {
      imageClock.src = adresse;
    };
    imageClock.onload = function () {
        var imgclock = new Kinetic.Image({
          width: 440,
          height: 456,
          image: imageClock,
          draggable: false
        });
     // add the shape to the layer
      layerClock.add(imgclock);
      layerClock.draw();
    };
    //Init Minutes
    imageMinute.src = 'css/asset/firstHand.png';
    imageMinute.onload = function () {
      minutes = 10;
      var angle = minutes * 360 / 60;
      var firstHandclock = new Kinetic.Image({
          x: 219,
          y: 228,
          width: 6,
          height: 120,
          image: imageMinute
        });
      //Flip l'aiguille pour la mettre au bon endroit
      firstHandclock.setScale({y:-1});
      firstHandclock.rotate(angle%360);
      // add the shape to the layer
      layerClock.add(firstHandclock);
      layerClock.draw();
    };
      imageHour.src = 'css/asset/secondHand.png';
      imageHour.onload = function () {
      heures = 22;
      var secondHandclock = new Kinetic.Image({
          x: 219,
          y: 228,
          width: 6,
          height: 80,
          image: imageHour
        });
      secondHandclock.setScale({y:-1});
      secondHandclock.rotate((heures%12)* 360 / 12);
      // add the shape to the layer
      layerClock.add(secondHandclock);
      layerClock.draw();
    };
    stage.add(layerClock);
    layerClock.draw();
  };

  this.changeClock = function (name){
      adresse = 'css/asset/'+ name +'.png';
    };
  this.getSrc = function (){
      return adresse;
    };
};