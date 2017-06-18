function task6 (n,m) {
    if (!n && !m){
        return {status: 'failed',
            reason: 'Вы не передали данные'};

    }else {
        let str = '',
            leng = n * 2;

        while (str.length <= leng) {
            let inter = ( Math.floor(Math.random() * m) );

            if ((inter * inter) > m) {
                str += inter + ',';

            }
        }
        return str;
    }

}
