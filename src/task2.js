function  task2(envelope1,envelope2){
    if (!envelope1 && !envelope2){
        return {status: 'failed',
                reason: 'Вы не передали данные'};

    }else {
        let diagonalFirst = Math.sqrt((envelope1.a * envelope1.a) + (envelope1.b * envelope1.b)),
            diagonalSecond = Math.sqrt((envelope2.c * envelope2.c) + (envelope2.d * envelope2.d));

        if (diagonalFirst > diagonalSecond) {
            return 1;

        } else if (diagonalFirst < diagonalSecond) {
            return 2;

        } else {
            return 0;

        }
    }
}