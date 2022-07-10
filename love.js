    flag=1
   function yes()
        {
            alert("Love you too !")
        }
        function non()
        {
            if(flag==1){
                n.style="top:20px;left:500px"
                flag=2
            }
            else if(flag==2){
                n.style="top:110px; left:200px"
                flag=3
            }
            else if(flag==3){
                n.style="top:220px;left:450px"
                flag=4
            }
            else if(flag==4){
                n.style="top:140px;left:1075px"
                flag=5
            }
            else if(flag==5){
                n.style="top:285px;left:780px"
                flag=6
            }
            else if(flag==6){
                n.style="top:550px;left:780px"
                flag=1
            }

        }