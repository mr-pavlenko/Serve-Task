function task5(context) {
    if (!context){
        return {status: 'failed',
            reason: 'Вы не передали данные'};

    }else {
        let min = context.minimum,
            max = context.maximum,
            countFirstMethod = 0,
            countSecondMethod = 0,
            result = {};


        for (let i = min; i <= max; i++) {
            let str = String(i),
                firstPart = Number(str[0]) + Number(str[1]) + Number(str[2]),
                secondPart = Number(str[3]) + Number(str[4]) + Number(str[5]);

            if (firstPart == secondPart) {
                countFirstMethod++;

            }
            firstPart = Number(str[0]) + Number(str[2]) + Number(str[4]);
            secondPart = Number(str[1]) + Number(str[3]) + Number(str[5]);

            if (firstPart == secondPart) {
                countSecondMethod++;

            }
        }
        result.firstMethod = countFirstMethod;
        result.secondMethod = countSecondMethod;

        if (countFirstMethod > countSecondMethod) {
            result.winner = 'Первый метод';

        } else if (countSecondMethod > countFirstMethod) {
            result.winner = 'Второй метод';

        } else {
            result.winner = 'Колличество билетов одинаковое';

        }

        return result;
    }
}


//мин<='xxxxxx'<=max , max=>min