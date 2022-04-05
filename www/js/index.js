var app = {
    // Application Constructor
    initialize: function(){
        document.getElementById('btn').addEventListener('click', app.takephoto);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    takephoto: function() {

        console.log("Button Clicked!");

    navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    })
},
    
    onSuccess: function(imageData) {
        var image = document.getElementById('Photo');
        image.src = "data:image/jpeg;base64," + imageData;
    },
    
    onFail: function(message) {
        alert('Failed because: ' + message);
    }
    
};

app.initialize();

  
