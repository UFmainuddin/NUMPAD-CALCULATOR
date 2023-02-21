function solve() {
    
    let output = document.querySelector('#expressionOutput')
    let result = document.querySelector('#resultOutput')
    const clearBtn = document.querySelector('.clear')
    clearBtn.addEventListener('click', (e)=>{
        result.innerText = '';
        output.innerText = '';
    })

    let operator = ['+', '-', '*', '/'];

    const btns = Array.from(document.querySelectorAll('.keys button'));

    btns.forEach(button=>{
        button.addEventListener('click', (e)=>{
            
            let btnValue = button.value;
                if(btnValue ==='='){

                (!operator.includes(output.innerText.replace(/x/g, '*').slice(-1))) ?
                 result.innerText = eval(output.innerText.replace(/x/g, '*')) : result.innerText = NaN;
                
                }else{
                    
                    if(btnValue ==='*'){
                        btnValue = 'x'
                    }
                    output.innerText += btnValue
                }

        })
    })
   
}
