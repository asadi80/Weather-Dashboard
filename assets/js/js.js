
var city,city1="";
var i =0;
var x =0;
var arr=[];
var uv,uv1,uv2,uv3uv4,uv5,tim;
var time, time1,time2,time3,time4,time5;
var description ,description1 ,description2 ,description3 ,description4 ,description5;
var temp, temp1,temp2,temp3,temp4,temp5;
var humidity,humidity1,humidity2,humidity3,humidity4,humidity5;
var wind,wind1,wind2,wind3,wind4,wind5;
var iconurl,iconurl1,iconurl2,iconurl3,iconurl4,iconurl5;

    // targiting enter key
$('input').keyup(function(e){
    var code = e.which;
    if(code == 13){                                      
        e.preventDefault();
        $('#button-addon2').trigger('click');
    }
});


     // show old data from localstorge
$(document).each(function(){  
     

    $('ul').val('');
    for(j=0;j<localStorage.length;j++){
            var value = localStorage.getItem(j,value);
            $(this).val(value);
            arr.push(value);
            $('ul').append('<li><button type="button" class="btn btn-lg list-style-none" id="bt">'+arr[j]+'</button></li>')
         
    
    }
    
}); 

$(window).on('load',function() {     
    $.getJSON("http://api.ipstack.com/check?access_key=ec53248cc63f76e6086144510bca796d",
    function (data) {
        var cc=data.city;
        CheckingStatus(cc);
    });
});






   // entring data and safe it to local storge
$('#button-addon2').on('click', function () {
    $('input[type="text"]').each(function () {
        var value = $(this).val();
        if (!value) {
            alert("Please enter city name");
        } else {
            
            CheckingStatus(value);
            
        }
       
        $('input[type="text"]').val('');
    });
});


function CheckingStatus(c){
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + c + '&appid=62991e1f8401bfb35cb4e91f7b51dcb8', function(data, statusText, xhr) {
        if(xhr.status == 200)
        {
            console.log(xhr.status)
    
            localStorageFun(i,c);
            i++
        }else{
            alert("city not found");
            console.log(xhr.status)
        }
    });


}


function localStorageFun(x,val){
    localStorage.setItem(x, val);
    $('ul').append('<li><button type="button" class="btn btn-lg list-style-none" id="bt">'+val+'</button></li>')
    weatherFun(val)
    
    
}
    
       // old cities data
$(document).on('click','#bt', function () {     
    var v = $(this).text();
    weatherFun(v);
});
            // clear old data
function clearFunction (){
    $('#city').empty();
    $('#dt').empty();                
    $('#description').empty();
    $('#deger').empty();
    $('#humidity').empty();
    $('#wind').empty();
    $('#wicon').empty();
    $('#uv').empty();
    $('#dt1').empty();
    $('#description1').empty();
    $('#deger1').empty();
    $('#humidity1').empty();
    $('#wind1').empty();
    $('#wicon1').empty();
    $('#uv1').empty();
    $('#dt2').empty();
    $('#description2').empty();
    $('#deger2').empty();
    $('#humidity2').empty();
    $('#wind2').empty();
    $('#wicon2').empty();
    $('#uv2').empty();
    $('#dt3').empty();
    $('#description3').empty();
    $('#deger3').empty();
    $('#humidity3').empty();
    $('#wind3').empty();
    $('#wicon3').empty();
    $('#uv3').empty();
    $('#dt4').empty();
    $('#description4').empty();
    $('#deger4').empty();
    $('#humidity4').empty();
    $('#wind4').empty();
    $('#wicon4').empty();
    $('#uv4').empty();
    $('#dt5').empty();
    $('#description5').empty();
    $('#deger5').empty();
    $('#humidity5').empty();
    $('#wind5').empty();
    $('#wicon5').empty();
    $('#uv5').empty();


}
      //getting all data and display it
function weatherFun(city1){
    clearFunction ();
    $(".col-8").css("display", "block");
    $(".just").css("display", "flex").delay( 1000 ).show(0);
            let locURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=62991e1f8401bfb35cb4e91f7b51dcb8';
            $.get(locURL )
                .then(function (res) {
                    lat = res.coord.lat;
                    lon = res.coord.lon;
                   
                    $('#city').append(res.name);

                    let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=62991e1f8401bfb35cb4e91f7b51dcb8";
                    $.get(weatherURL)
                        .then(function (res) {

                            // converting date
                            function timeConv(t) {
                                var a = new Date(t * 1000);
                                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                var year = a.getFullYear();
                                var month = months[a.getMonth()];
                                var date = a.getDate();
                                tim = month + ' ' + date + ' ' + year;
                                return (tim);
                            }
                            function uvIndex(u){
                                if(u <=2){
                                    document.getElementById("uv").classList = "favorable";
                                }else if(u >2 && u<=8){
                                    document.getElementById("uv").classList = "moderate ";
                                }
                                else {
                                    document.getElementById("uv").classList = "severe";
                                }
                        
                            };

                            
                            console.log(res);
                            time = moment(res.current.dt.value).format("MMM D, YYYY");
                            humidity = res.daily[0].humidity;
                            temp = Math.round(res.daily[0].temp.day);
                            wind = res.daily[0].wind_speed;
                            description = res.daily[0].weather[0].description;
                            var iconcod = res.daily[0].weather[0].icon;
                            iconurl = "http://openweathermap.org/img/w/" + iconcod + ".png";
                            uv = res.daily[0].uvi;
                            uvIndex(uv);

                            time1 = timeConv(res.daily[1].dt);
                            description1 = res.daily[1].weather[0].description;
                            humidity1 = res.daily[1].humidity;
                            temp1 = Math.round(res.daily[1].temp.day);
                            wind1 = res.daily[1].wind_speed;
                            var iconcode = res.daily[1].weather[0].icon;
                            iconurl1 = "http://openweathermap.org/img/w/" + iconcode + ".png";
                            uv1 = res.daily[1].uvi;

                            time2 = timeConv(res.daily[2].dt);
                            description2 = res.daily[2].weather[0].description;
                            humidity2 = res.daily[2].humidity;
                            temp2 = Math.round(res.daily[2].temp.day);
                            wind2 = res.daily[2].wind_speed;
                            const icon2 = res.daily[2].weather[0].icon;
                            iconurl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
                            uv2 = res.daily[2].uvi;

                            time3 = timeConv(res.daily[3].dt);
                            description3 = res.daily[3].weather[0].description;
                            humidity3 = res.daily[3].humidity;
                            temp3 = Math.round(res.daily[3].temp.day);
                            wind3 = res.daily[3].wind_speed;
                            const icon3 = res.daily[3].weather[0].icon;
                            iconurl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
                            uv3 = res.daily[3].uvi;

                            time4 = timeConv(res.daily[4].dt);
                            description4 = res.daily[4].weather[0].description;
                            humidity4 = res.daily[4].humidity;
                            temp4 = Math.round(res.daily[4].temp.day);
                            wind4 = res.daily[4].wind_speed;
                            const icon4 = res.daily[4].weather[0].icon;
                            iconurl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
                            uv4 = res.daily[4].uvi;

                            time5 = timeConv(res.daily[5].dt);
                            description5 = res.daily[5].weather[0].description;
                            humidity5 = res.daily[5].humidity;
                            temp5 = Math.round(res.daily[5].temp.day);
                            wind5 = res.daily[5].wind_speed;
                            const icon5 = res.daily[5].weather[0].icon;
                            iconurl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
                            uv5 = res.daily[5].uvi;
                            
                           
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
    
}

    
        
       

           
            