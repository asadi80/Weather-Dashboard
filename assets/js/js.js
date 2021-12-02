
var city;
var i =0;
var arr=[];
var uv,uv1,uv2,uv3uv4,uv5,tim;
var time, time1,time2,time3,time4,time5;
var description ,description1 ,description2 ,description3 ,description4 ,description5;
var temp, temp1,temp2,temp3,temp4,temp5;
var humidity,humidity1,humidity2,humidity3,humidity4,humidity5;
var wind,wind1,wind2,wind3,wind4,wind5;
var iconurl,iconurl1,iconurl2,iconurl3,iconurl4,iconurl5;
$('input').keyup(function(e){
    var code = e.which;
    if(code == 13){                                      
        e.preventDefault();
        $('#button-addon2').trigger('click');
    }
});
$(window).on('load',function(){   
    for(j=0;j<=localStorage.length;j++){
    var value = localStorage.getItem(j,value);
    $(this).val(value);
    console.log(value)
    arr.push(value);
    console.log(arr[j]);
    if(arr[j] !== "null"){
    $('ul').append('<li><button type="button" class="btn btn-lg btn-primary" id="bt">'+arr[j]+'</button></li>')
    }
}
}); 

$.getJSON("http://api.ipstack.com/check?access_key=ec53248cc63f76e6086144510bca796d",
    function (data) {
        // alert(data.countryName);
        // alert(data.city);
        city=data.city;
    }
);
$(document).ready(function(city){
    
    $('#button-addon2').on('click', function(e){
        $('input[type="text"]').each(function(e){  
            var value = $(this).val();
            if(!value){
                alert("Please enter city name")
            }
            city=value;
            localStorage.setItem(i, value);
            // $('ul').append('<li><button type="button" class="btn btn-lg btn-primary" >'+value+'</button></li>')
            $('#city').append(city);
        });
        $('#bt').on('click', function(e){
            $('#bt').each(function(e){  
                // var value = $(this).text();
                city=$('#bt').text();
                console.log("++++"+city);
                $('#city').append(city);
            });
        });
        i++;
            
            $('input[type="text"]').val('');
          

            let locURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=62991e1f8401bfb35cb4e91f7b51dcb8';
            $.get(locURL)
            .then(function(res){
                console.log(res);
                lat=res.coord.lat;
               lon =res.coord.lon;
               console.log(lon);
               
               let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=62991e1f8401bfb35cb4e91f7b51dcb8";
               $.get(weatherURL)
               .then(function(res){
    
                // converting time
            function timeConv (t){
                var a = new Date(t * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();
                    tim = month + ' ' + date+ ' ' + year ;
                return(tim)
            }
                console.log(res);
                time =  moment(res.current.dt.value).format("MMM D, YYYY") ;               
                humidity=res.current.humidity;
                temp=Math.round(res.current.temp);
                wind = res.current.wind_speed;
                description=res.current.weather[0].description;
                var iconcod=res.current.weather[0].icon;
                iconurl = "http://openweathermap.org/img/w/" + iconcod + ".png";
                uv=res.current.uvi

                time1 = timeConv(res.daily[1].dt)  
                description1=res.daily[1].weather.description;
                humidity1=res.daily[1].humidity;
                temp1=Math.round(res.daily[1].temp.day);
                wind1 = res.daily[1].wind_speed;
                var iconcode=res.daily[1].weather[0].icon;
                iconurl1 = "http://openweathermap.org/img/w/" + iconcode + ".png";
                uv1=res.daily[1].uvi;

                time2 = timeConv(res.daily[2].dt)  
                description2=res.daily[2].weather[0].description;
                humidity2=res.daily[2].humidity;
                temp2=Math.round(res.daily[2].temp.day);
                wind2 = res.daily[2].wind_speed;
                const icon2=res.daily[2].weather[0].icon;
                iconurl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
                uv2=res.daily[2].uvi;

                time3 = timeConv(res.daily[3].dt)  
                description3=res.daily[3].weather[0].description;
                humidity3=res.daily[3].humidity;
                temp3=Math.round(res.daily[3].temp.day);
                wind3= res.daily[3].wind_speed;
                const icon3=res.daily[3].weather[0].icon;
                iconurl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
                uv3=res.daily[3].uvi;
    
                time4 = timeConv(res.daily[4].dt)  
                description4=res.daily[4].weather[0].description;
                humidity4=res.daily[4].humidity;
                temp4=Math.round(res.daily[4].temp.day);
                wind4 = res.daily[4].wind_speed;
                const icon4=res.daily[4].weather[0].icon;
                iconurl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
                uv4=res.daily[4].uvi;
    
                time5 =timeConv(res.daily[5].dt)  
                description5=res.daily[5].weather[0].description;
                humidity5=res.daily[5].humidity;
                temp5=Math.round(res.daily[5].temp.day);
                wind5= res.daily[5].wind_speed;
                const icon5=res.daily[5].weather[0].icon;
                iconurl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
                uv5=res.daily[5].uvi;
                
                $('#dt').append(time);
                $('#description').append(description);
                $('#deger').append(Math.round(temp1));
                $('#humidity').append(humidity1);
                $('#wind').append(wind1);
                $('#wicon').attr('src', iconurl1);
                $('#uv').append(uv);

                $('#dt1').append(time1);
                $('#description1').append(description1);
                $('#deger1').append(Math.round(temp1));
                $('#humidity1').append(humidity1);
                $('#wind1').append(wind1);
                $('#wicon1').attr('src', iconurl1);
                $('#uv1').append(uv1);

                $('#dt2').append(time2);
                $('#description2').append(description2);
                $('#deger2').append(Math.round(temp2));
                $('#humidity2').append(humidity2);
                $('#wind2').append(wind2);
                $('#wicon2').attr('src', iconurl2);
                $('#uv2').append(uv2);

                $('#dt3').append(time3);
                $('#description3').append(description3);
                $('#deger3').append(Math.round(temp3));
                $('#humidity3').append(humidity3);
                $('#wind3').append(wind3);
                $('#wicon3').attr('src', iconurl3);
                $('#uv3').append(uv3);

                $('#dt4').append(time4);
                $('#description4').append(description4);
                $('#deger4').append(Math.round(temp4));
                $('#humidity4').append(humidity4);
                $('#wind4').append(wind4);
                $('#wicon4').attr('src', iconurl4);
                $('#uv4').append(uv4);

                $('#dt5').append(time5);
                $('#description5').append(description5);
                $('#deger5').append(Math.round(temp5));
                $('#humidity5').append(humidity5);
                $('#wind5').append(wind5);
                $('#wicon5').attr('src', iconurl5);
                $('#uv5').append(uv5);

            });
        });
    });
});






    






















































