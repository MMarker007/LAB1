function convertTemperature(value, direction){
    if (direction=='toC'){
        return `${((value - 32) * 5 / 9).toFixed(1)} C`;
    }
    else if  (direction=='toF'){
        return `${((value * 9 /5) + 32).toFixed(1)} F`;
    }
    else {return 'Ошибка: некорректное направление преобразования';}    
}
console.log(convertTemperature(20,'toC'))

function treug(st1,st2,st3){
    if (st1+st2>st3 && st2+st3>st1 && st3+st1>st2){
        let perimetr = st1+st2+st3;
            
        let polup_Perimetr = 1/2*perimetr;
        let ploshad =Math.sqrt(polup_Perimetr*(polup_Perimetr-st1)*(polup_Perimetr-st2)*(polup_Perimetr-st3));

        let sootnsh=perimetr/ploshad;
        return  `Периметр = ${perimetr} \n` +  `Площадь = ${ploshad.toFixed(1)} \n` +  `Соотношение = ${sootnsh.toFixed(1)} \n`;
    }

    else{return 'треугольника не существует';}
}
console.log(treug(3,4,5));

function fizz_buzz(num){
    for (let i=0;i<=num; i++){
        if (i%2==0){
            console.log(`${i}, buzz`)}
        else if (i%5==0){
            console.log(`${i}, fizz buzz`)}
        else{console.log(`${i}, fizz`)}
    }
}
fizz_buzz(15)   


function elka(n){
    for (let i=1; i<=n; i++){
        if (i==n){
            console.log(`||`)
        }
        
        else if  (i%2==1){
            console.log(`*`.repeat(i))
        }
        else {console.log(`#`.repeat(i))
        }
    }
}
elka(15)


function delnie(n,x,y){
    if (n%x==0 && n%y==0){
        console.log(`n=${n}, x=${x}, y=${y} => true`)
    }
    else {console.log(`n=${n}, x=${x}, y=${y} => false`)}
    }
delnie(30,3,10)


function sandwich_with_cheese(bread,chesse){
    let itog=0
    while (bread>=2 && chesse>=1){
        itog+=1
        bread-=2
        chesse-=1
    }
    console.log(itog)
}
sandwich_with_cheese(90,30)


function absValue(n){
    if (n>=0){console.log(n)}
    else{
        let c=0
        while (c!=n*2){
            n+=1
            c+=1
        }
        console.log(n)
    }
}
absValue(-63920430)


function RN(z1,z2){
    let massiv=[]
    let last_chiclo=z1
    if (z1<=z2){
        while (last_chiclo!=z2){
            massiv.push(last_chiclo)
            last_chiclo+=1
        }
        for (let i =massiv.length -1; i>0; i--){
            const j= Math.floor(Math.random()*(i+1));
            [massiv[i], massiv[j]]=[massiv[j], massiv[i]];
        }
        console.log(massiv[0])
    }
    else{
    console.log(false)
    }
}
RN(-10,10)


function RNFS(massiv,znach){
    if (znach>(massiv).length){
        console.log(false)
    }
    else{
        for (let i =massiv.length -1; i>0; i--){
            const j= Math.floor(Math.random()*(i+1));
            [massiv[i], massiv[j]]=[massiv[j], massiv[i]];
        }
        console.log((massiv).slice(0,znach))
    }
}
RNFS([1111,32,432,123,2143,12312,43,1,31,656,2,3,4], 10)



function isFirstV(name){
    if (name[0]=='V'){return name}
    else{return false}
}

function myFilterArray(massiv, filter){
    if (filter==isFirstV){
        let itog=[]     
        for (let i=0; i<massiv.length; i++){
            if (isFirstV(massiv[i])!=false){
                itog.push(massiv[i])
            }
        }
        console.log(itog)
    }
}
myFilterArray(['Short', 'VeryLong'], isFirstV)



function toBeCloseTo(num1,num2){
    if (num1.toFixed(1)==num2.toFixed(1)){
        console.log(true)
    }
    else{
        console.log(false)
    }

}
toBeCloseTo(2312.32132,2312.439999)
