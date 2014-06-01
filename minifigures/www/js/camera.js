 var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    function onPhotoSuccess(imageData, idPhoto) {
      // Uncomment to view the image file URI 
      // console.log(idPhoto);
      // Get image handle
      //
      var largeImage = document.getElementById(idPhoto);

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = "data:image/jpeg;base64," + imageData;
    }

    function getPhoto(source, idPhoto) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(function(imageData) { onPhotoSuccess(imageData, idPhoto); }, onFail, { quality: 50, 
        destinationType: destinationType.DATA_URL,
        sourceType: source });
    }
    function onFail(message) {
      alert('Failed because: ' + message);
    }

