function desk (height,width,char){
    var str = '',
    div = document.createElement('div'),
    body = document.getElementsByTagName('body');
    body[0].appendChild(div);

    for (var i = 0; i<=height; i++){
        for (var j = 0; j<=width; j++){

            if (i%2==0){
                var schar= '&nbsp'+char
            }else{
                var schar= char+'&nbsp';
            }

            str = str + schar;

        }
        str=str+'<br>'

    }
    div.innerHTML = str;
}

// длина * 2 -1
функция возращает

desk(4,6,'*');
