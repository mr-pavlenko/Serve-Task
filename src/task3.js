function task3(mass) {
    if (!mass){
        return {status: 'failed',
            reason: 'Вы не передали данные'};

    }else {
        let namesAndAreas = [],
            names = [];

        for (let i = 0; i < mass.length; i++) {
            let a = mass[i].a,
                b = mass[i].b,
                c = mass[i].c,
                p = (a * b * c) / 2,
                s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

            namesAndAreas[i] = {};
            namesAndAreas[i].names = mass[i].vertices;
            namesAndAreas[i].s = s;

        }
        let result = namesAndAreas.sort(function (a, b) {
            let c = a.s,
                d = b.s;

            if (c < d) {
                return -1;

            } else if (c > d) {
                return 1;

            }
            return 0;
        });
        for (let i = 0; i < namesAndAreas.length; i++) {
            names.push(namesAndAreas[i].names);

        }
        return names;
    }
}

