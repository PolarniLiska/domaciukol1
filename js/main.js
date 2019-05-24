$(function(){
    $('#ustava h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#048'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

    var kviz = $('#kviz div.row');
    var odkazy = $('#odkazy ul');
    filmy.forEach(function(obj,idx){
        kviz.append('<div class="col-sm-4"><figure><img src="img/kamera.jpg" alt="kamera"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
        odkazy.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
    });

    var foto = $('#kviz img');
    foto.on('click', function(){
        var index = Math.floor(Math.random()*filmy.length);
        $(this).attr('src','img/'+filmy[index].photo)
               .attr('alt',filmy[index].name);
    });

    $('#kviz .btn-success').on('click', function(){
        $('#kviz figure').each(function(idx,obj) {
            var alt = $(obj).find('img').attr('alt');
            var figcaption = $(obj).find('figcaption').text();
            if (alt == figcaption) {
                $(obj).find('img').css({'border':'2px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'2px solid red'}); 
            }
        });
    });

    var i = 0;
    window.setInterval(function(){
        $('#sidlo img').attr('src','img/'+topFilmy[i].photo);
        $('#sidlo figcaption').text(topFilmy[i].place);
        i<topFilmy.length-1 ? i++ : i=0; 
    }, 3000);

})