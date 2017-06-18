function task7(context) {
    if (!context) {
        return {
            status: 'failed',
            reason: 'Вы не передали данные'
        };

    } else {
        let a = 1, b = 1,
            fiboNubbers = [];

        if (context.min && context.max) {
            for (let i = context.min; i <= context.max; i++) {
                let c = a + b;

                fiboNubbers.push(c);

                a = b;
                b = c;

            }
            return fiboNubbers;

        } else if (context.leng) {
            for (let i = 0; i <= context.leng; i++) {
                let c = a + b;

                fiboNubbers.push(c);

                a = b;
                b = c;
            }
            return fiboNubbers;
        }
    }
}