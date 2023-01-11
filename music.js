
        var white = true
        var button_id = ['vidbox','vidbox1','vidbox2']
        var anchor_id = ['Adheera','TheSearch','rakkama']
        function Dark() {
            if (white == true) {
                
                document.body.style.backgroundColor = 'black';
                
                for (let i = 0; i < button_id.length; i++) {
                    const element = button_id[i];
                    const oelement = anchor_id[i];
                    var button = document.getElementById(element);
                    button.style.backgroundColor = 'black';
                    document.getElementById(oelement).style.color = 'white';
                    document.getElementById(element).style.borderColor = "black";
                }

                white = false

            } else if (white == false){

                document.body.style.backgroundColor = 'white';
                console.log('Just turned back!')
                for (let i = 0; i < button_id.length; i++) {
                    const element = button_id[i];
                    const oelement = anchor_id[i];
                    var button = document.getElementById(element);
                    button.style.backgroundColor = 'white';
                    document.getElementById(oelement).style.color = 'black';
                    document.getElementById(element).style.borderColor = "white";
                }
                white = true
            }
            
        }
        
