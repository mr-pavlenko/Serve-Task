function isPoli(num) {
    if(num%2==0){
        return 0;
    }else {
        num = num + '';
        for (var i = 0; i < num.length; i++) {

                if (num[i]==num[num.length-1-i]) {

                    result = 'palindrom';

                }else{
                    result = 0;
                }
            }

        }
        result+=num;
        return result;


}

alert(isPoli(123321));

//максимальное количество символов +