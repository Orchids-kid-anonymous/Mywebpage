var display_topic = false
        function some(params) {
            var btn = document.getElementById("open");
            if (display_topic == false) {
                document.getElementById("topics").style.display = "block";
                
                display_topic = true
            } else if (display_topic == true){
                document.getElementById("topics").style.display = "none";
                
                display_topic = false
            }
        }

        var white = true  
        var length = [0,1,2]
        function Dark() {
            
            if (white == true) {
                
                document.body.style.backgroundColor = 'black';
                document.getElementById('txt').style.color = "white";
                document.getElementById('links').style.borderColor = "white";
                for (let index = 0; index < length.length; index++) {
                    const element = document.getElementById('links').getElementsByTagName('li').item(index);
                    element.style.color = "white";
                }

                white = false

            } else if (white == false){
                
                document.body.style.backgroundColor = 'white';
                console.log('Just turned back!')
                document.getElementById('txt').style.color = "black";
                document.getElementById('links').style.borderColor = "black";
                for (let index = 0; index < length.length; index++) {
                    const element = document.getElementById('links').getElementsByTagName('li').item(index);
                    element.style.color = "black";
                }
                white = true
            }
            
        }
