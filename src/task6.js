function row (n,m) {
    var str='';
    var leng=n*3-1;
    while( str.length<=leng){
        var   inter = ( Math.floor(Math.random() * m) );
        if((inter*inter)>m){
            str+=inter+','
        }
    }
    return str;

}


alert(row(7,100));