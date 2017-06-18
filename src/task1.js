function task1 (height,width,char){
    if (!height  && !width && !char ){
        return {status: 'failed',
            reason: 'Вы не передали данные, 0 - некоректная высота/ширина, пустая строка не может быть символом'};

    }else if(typeof height != 'number' && typeof width != 'number' && typeof char != 'string'){
        return {status: 'failed',
                reason: 'Неверный формат входных данных'};

    }else {
        let str = '',
            intermediateChar;

        for (let i = 0; i < height; i++) {
            if (i % 2 === 0) {
                for (let j = 0; j < width; j++) {
                    if (j === (width - 1)) {
                        intermediateChar = char;
                        str += intermediateChar;

                    } else {
                        intermediateChar = `${char} `;
                        str += intermediateChar;

                    }
                }
            } else {
                for (let j = 0; j < width - 1; j++) {
                    intermediateChar = ` ${char}`;
                    str += intermediateChar;

                }
            }
            str = str + '\n'

        }

        return str;
    }
}
