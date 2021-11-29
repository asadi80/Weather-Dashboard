


 
// var url ='https://api.openweathermap.org/data/2.5/weather?q='+city+',USA&units=imperial&appid=62991e1f8401bfb35cb4e91f7b51dcb8';
var city;
// var epoch = System.currentTimeMillis()/1000;
$('input').keyup(function(e){
    var code = e.which;
    if(code == 13){
        e.preventDefault();
        $('#button-addon2').trigger('click');
    }
});
$(document).ready(function(city){
    $('#button-addon2').on('click', function(){
        $('input[type="text"]').each(function(){    
            var id = $(this).attr('id');
            var value = $(this).val();
          
            city=value;

            localStorage.setItem(id, value);
            $('ul').append('<li><button type="button" class="btn btn-lg btn-primary" >'+city+'</button></li>')
            $('#city').append(city);

       
        });
       
        $.ajax({
            dataType: "jsonp",
            url: 'https://api.openweathermap.org/data/2.5/forecast?q='+city+',USA&units=imperial&dt=hourly&appid=62991e1f8401bfb35cb4e91f7b51dcb8',
            jsonCallback: 'jsonp',
            data: { q: city },
            cache: false,
            success: function (data) {
                data.city = city;
            }
        
        }).done(function(data){
            
        
            $.map(data, function(data,i){
               
                console.log(data)
                if(i[1]=== 'weather'){
                $('#description').append(data[0].description);
                const icon=data[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
                $('#wicon').attr('src', iconurl);
               
                }
                if(i[1]=== 'main'){
                    $('#deger').append(Math.round(data.temp));
                    $('#humidity').append(data.humidity);
                }
                if(i[1]=== 'wind'){
                    $('#wind').append(data.speed);
                }
                if(i[1]=== 'clouds'){
                    $('#dt').append(data.dt_txt);
                }
            
            });
            
        });
    });

});