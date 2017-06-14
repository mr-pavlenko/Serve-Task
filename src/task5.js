function ticket (context) {
    var min=context.minimum;
    var max=context.maximum;
    var tickets = 0;
    var num='';
    for(var i = min; i<=max; i++){

       if(i>=1000) {
           var num='';
           num += i;

           switch (num.length) {
               case 4:
                   num = '00' + num;
                   break;
               case 5:
                   num = '0' + num;
                   break;
               default:
                   break;
           }
           if((num[0]+num[1]+num[2]) == (num[3]+num[4]+num[5]))
           {
               tickets++;
           }
       }


}
    return tickets;
}

obj = {
    minimum: 998,
    maximum: 1001

};

alert(ticket(obj));

//мин<='xxxxxx'<=max , max=>min