function task4(str) {
    if (!str){
        return {status: 'failed',
            reason: 'Вы не передали данные'};

    }else {
        let indexLeft = 1,
            indexRight = 2,
            currentIndex = 1,
            resultStr = '';
        str = String(str);

        isPoly(indexLeft, indexRight, currentIndex);

        function isPoly(indexLeft, indexRight, currentIndex) {
            if (currentIndex == str.length - 1) {
                return;
            }

            if (str[indexLeft] == str[indexRight]) {
                spliceOfIndex(indexLeft, indexRight + 1)

                isPoly(--indexLeft, ++indexRight, currentIndex);

            } else if ((currentIndex == indexLeft) && (str[indexLeft - 1]) == (str[indexRight])) {
                spliceOfIndex(indexLeft - 1, indexRight + 1);

                isPoly(indexLeft - 2, indexRight + 1, currentIndex);

            } else {
                currentIndex++;
                indexLeft = currentIndex;
                indexRight = currentIndex + 1;

                isPoly(indexLeft, indexRight, currentIndex);

            }
        }

        function spliceOfIndex(startIndex, endIndex) {

            let interStr = str.slice(startIndex, endIndex);

            if (interStr.length > resultStr.length)
                resultStr = interStr;

        }

        return resultStr;
    }

}
