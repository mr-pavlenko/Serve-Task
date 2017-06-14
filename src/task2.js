function  isFit(envelope1,envelope2) {
    if (envelope1.a <= envelope2.c && envelope1.b <= envelope2.d){

        return 2;

    }else if (envelope2.c <= envelope1.a && envelope2.d <= envelope1.b){

        return 1;

    }else{

        return 0;

    }
}
first = {
    a:12,
    b: 14
};
second = {
    c: 10,
    d: 8
};
alert(isFit(first,second));

// Полня проверка