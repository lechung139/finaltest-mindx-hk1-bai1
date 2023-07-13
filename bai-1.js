let submit = document.querySelector('#submit');
function addNumber() {
    let a = parseInt(document.querySelector('#a').value);
    let b = parseInt(document.querySelector('#b').value);
    let result = document.querySelector('#sum-result');
    console.log(a,b);

    function soNguyenTo(n){
        let num = 1;
        if (n<2) 
            return num = 0;
        let i = 2;
        while (i<n){
            if( n%i==0 ) {
                num = 0;
                break; 
            }
            i++;
        }
        return num;
    }
    
    let array = [];
    for (let i=a; i<=b; i++) {
        array.push(i);
    }
    
    let sum = 0;
    for (let i=0; i<array.length; i++){
        if (soNguyenTo(array[i]) == 1)  
            sum += array[i];
    }

    result.innerHTML = sum;
}
submit.addEventListener('click', addNumber);