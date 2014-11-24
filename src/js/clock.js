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
      width: 250,
      height: 250,
      });

    //init layers
    layerClock = new Kinetic.Layer();
    if (adresse === ''){
      adresse = 'css/asset/clock1.png';
    }

    imageClock.src = adresse;
    imageClock.onload = function () {
        var imgclock = new Kinetic.Image({
          width: 220,
          height: 228,
          image: imageClock,
          draggable: true
        });

     // add the shape to the layer
      layerClock.add(imgclock);
      layerClock.draw();
    };

    //Init Minutes
    imageMinute.src = 'css/asset/firstHand.png';
    imageMinute.onload = function () {
      minutes = Math.floor((Math.random() * 11)) * 5;
      var angle = minutes * 360 / 60;
      var firstHandclock = new Kinetic.Image({
          x: 109,
          y: 114,
          width: 3,
          height: 80,
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
      heures = Math.floor((Math.random() * 23));
      var secondHandclock = new Kinetic.Image({
          x: 109,
          y: 114,
          width: 3,
          height: 40,
          image: imageHour
        });
      //Flip l'aiguille pour la mettre au bon endroit
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
      imageClock.src = 'css/asset/'+ name +'.png';
    };
  this.getSrc = function (){
      return adresse;
    };
  this.getHeures = function (){
      return heures;
    };
    this.getState = function (){
      if (heures > 12)
      {
        return 'Après-midi';
      }else {
        return 'Matin';
      }
    };

  this.checkClock = function (hour, min) {
    return (hour === heures && min === minutes);
  };
};