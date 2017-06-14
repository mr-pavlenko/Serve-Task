function forSort(a, b) {
    if (a.s > b.s) return 1;
    if (a.s < b.s) return -1;
}
function triangle(mass) {
    var newMass=[];
    for(let i = 0; i<mass.length; i++){
        var a = mass[i].a;
        var b = mass[i].b;
        var c = mass[i].c;
        var p = (a*b*c)/2;
        var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));

        newMass[i]={};
            newMass[i].names= mass[i].vertices ;
            newMass[i].s=s;
    }
   var  result = newMass.sort(function(a, b){
        var c = a.s,
            d = b.s;

        if( c < d ){
            return -1;
        }else if( c > d ){
            return 1;
        }

        return 0;
    });
    return result;
}


masOfTriangle = [{
    vertices: 'ABC',
        a: 10,
        b: 20,
        c: 22
},
{vertices: 'CBA',
    a: 12,
    b: 24,
    c: 28
},
    {vertices: 'BCA',
    a: 17,
    b: 12,
    c: 21}
];
triangle(masOfTriangle);


//массив с именами, сортировка выбором




