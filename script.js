(function(){

    console.log("refresh ver - " + Math.floor(Math.random()*100));
    
    let elemBeforeStockValue = document.querySelector('#beforeStockValue');
    let elemBeforeStockNum =document.querySelector('#beforeStockNum');
    let elemPreStockValue = document.querySelector('#preStockValue');
    let elemPreStockNum =document.querySelector('#preStockNum');
    let elemResultOutput = document.querySelector('#outputResult');
    let elemBtnCalc = document.querySelector('#btnCalc');

    if(elemBtnCalc != null)
    {   
        elemBtnCalc.onclick = (e)=>{
            console.log("계산");
 
            SimpleCalcAndOut();
            CalcEvent();
        };

    }
    else{
        console.log("찾지 못했습니다.");
    }

    window.onkeydown = (e)=>{
        if(e.key == "Enter")
        {
            SimpleCalcAndOut();
            CalcEvent();
        }
    };




    function calculator(beforePrice,beforeNum,prePrice,preNum){

        let bPrice = Number(beforePrice);
        let bNum = Number(beforeNum);
        let pPrice = Number(prePrice);
        let pNum = Number(preNum);

        console.log(`
        기존 구매 주식 : ${bPrice} x ${bNum}\n
        예정 구매 주식 : ${pPrice} x ${pNum}\n`);

        let result = (bPrice*bNum+pPrice*pNum)/(pNum+bNum);

        if(pNum === 0 && bNum ===0)
        {
            return 0;
        }

        return result;
    }

    function SimpleCalcAndOut(){
        let resultValue = calculator(elemBeforeStockValue.value,elemBeforeStockNum.value,elemPreStockValue.value,elemPreStockNum.value);
            
        if(resultValue == undefined | resultValue ==NaN | resultValue == null)
        {
            console.log(resultValue);
            elemResultOutput.textContent = "올바른 값이 아닙니다";
        }
        else{
            elemResultOutput.textContent = resultValue.toFixed(2) + "원";
        }        
    }

    function CalcEvent(){
        console.log("event");
    }
})();