var num = document.getElementById("num")
    var result = document.getElementById("result")
    var rand = Math.floor(Math.random()*10)+1
    var chance = document.getElementById("chance")
    var chances = 10

    function check()
    {
        var ennum = num.value
        
        if(ennum == rand){
        console.log("Right")
        result.textContent = "You are Right"
        alert("YAY! YOU WON")
        }

        else{
        chances = chances-1
        chance.textContent = "Chance Remaining:"+chances
        console.log("Wrong")
        result.textContent = "You are Wrong"
        }
    }