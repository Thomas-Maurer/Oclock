var Clock = function(){
  var stage;
  var state;
  var layerClock;
  var layerHour;
  var layerMinutes;
  var adresse='';
  var heures;
  var minutes;
  var imageClock = new Image();
  var imageHour = new Image();
  var imageMinute = new Image();


  this.initStage = function () {
     //init stage
    stage = new Kinetic.Stage({
      container: 'game',
      width: 250,
      height: 250,
      });
    stage.add(layerClock, layerMinutes, layerHour);
    layerClock.draw();

  };

  this.init = function () {
   
    //init layers
    layerClock = new Kinetic.Layer({
      x:0,
      y:0,
      width:300,
      height:300
    });
    layerMinutes = new Kinetic.Layer({
      x:0,
      y:-2,
      width:6,
      height:75
    });
    layerHour = new Kinetic.Layer({
      x:0,
      y:0,
      width:6,
      height:55
    });
    if (adresse === ''){
      adresse = 'css/asset/clock1.png';
    }

    imageClock.src = adresse;
    imageClock.onload = function () {
        var imgclock = new Kinetic.Image({
          width: 220,
          height: 228,
          image: imageClock
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
      layerMinutes.add(firstHandclock);
      layerMinutes.draw();
    };
      imageHour.src = 'css/asset/secondHand.png';
      imageHour.onload = function () {
      heures = Math.floor((Math.random() * 23));
      if (heures > 12){
        state = "Après-midi";
      }else{
        state = "Matin";
      }
      console.log(heures);
      console.log(state);
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
      layerHour.add(secondHandclock);
      layerHour.draw();
    };

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
  this.getMinutes = function (){
      return minutes;
    };
    this.getState = function (){
      return state;
    };

  this.changeTime = function () {
      heures = Math.floor((Math.random() * 23));
      minutes = Math.floor((Math.random() * 11)) * 5;
      if (heures > 12){
        state = "Après-midi";
      }else{
        state = "Matin";
      }
      layerHour.rotation((heures%12)* 360 / 12);
      layerHour.draw();
      layerMinutes.rotation(minutes * 360 / 60);
      layerMinutes.draw();
  };
  this.checkClock = function (hour, min) {
    return (hour === heures && min === minutes);
  };
};