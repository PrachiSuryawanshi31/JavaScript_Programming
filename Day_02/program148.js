function DisplayFactor(iNo)
{
    let iCnt = 0;
    
    console.log("Factors of :",iNo)

    for(let iCnt = 1; iCnt <= iNo/2; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

function main()
{
   let iValue = 12;
   DisplayFactor(iValue);
}

main();