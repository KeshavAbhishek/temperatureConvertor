var math = Math;

function run(){
    var temp = document.getElementById('text').value;

    var selected = document.getElementById("select").value;

    if(selected==="C"){

        if(temp!=""){
            temp = parseFloat(temp);
        }
        else{
            temp = 0;
        }

        var box_1 = document.querySelector('#box-1 .temp').innerHTML=`${temp}°C`;
    
        var box_2 = document.querySelector('#box-2 .temp').innerHTML=`${math.round(1.8*temp+32, 4)}°F`;
    
        var box_3 = document.querySelector('#box-3 .temp').innerHTML=`${temp+273}K`;
    
        var box_4 = document.querySelector('#box-4 .temp').innerHTML=`${math.round(0.8*temp, 4)}°R`;
    
    }

    if(selected==='F'){

        if(temp!=""){
            temp = parseFloat(temp);
        }
        else{
            temp = 32;
        }

        var box_1 = document.querySelector('#box-1 .temp').innerHTML=`${math.round(((temp-32)*5)/9, 4)}°C`;
    
        var box_2 = document.querySelector('#box-2 .temp').innerHTML=`${temp}°F`;
    
        var box_3 = document.querySelector('#box-3 .temp').innerHTML=`${math.round((((temp-32)*5)/9)+273, 4)}K`;
    
        var box_4 = document.querySelector('#box-4 .temp').innerHTML=`${math.round(1.25*(((temp-32)*5)/9), 4)}°R`;
    }

    if(selected==="K"){

        if(temp!=""){
            temp = parseFloat(temp);
        }
        else{
            temp = 273;
        }

        var box_1 = document.querySelector('#box-1 .temp').innerHTML=`${temp-273}°C`;
    
        var box_2 = document.querySelector('#box-2 .temp').innerHTML=`${math.round((temp-273-32)*5/9, 4)}°F`;
    
        var box_3 = document.querySelector('#box-3 .temp').innerHTML=`${temp}K`;
    
        var box_4 = document.querySelector('#box-4 .temp').innerHTML=`${math.round(1.25*(temp-273), 4)}°R`;
    }

    if(selected==="R"){

        if(temp!=""){
            temp = parseFloat(temp);
        }
        else{
            temp = 0;
        }

        var box_1 = document.querySelector('#box-1 .temp').innerHTML=`${math.round(temp*1.25, 4)}°C`;
    
        var box_2 = document.querySelector('#box-2 .temp').innerHTML=`${math.round(((temp*1.25)*1.8)+32, 4)}°F`;
    
        var box_3 = document.querySelector('#box-3 .temp').innerHTML=`${math.round((temp*1.25)+273, 4)}K`;
    
        var box_4 = document.querySelector('#box-4 .temp').innerHTML=`${temp}°R`;
    }

}

document.getElementById("text").oninput=()=>{
    run();
}