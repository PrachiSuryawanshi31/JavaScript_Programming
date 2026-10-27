function SumFactor(iNo)
{
    let iCnt = 0;
    let iSum = 0;

    for(let iCnt = 1; iCnt <= iNo/2; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            iSum = iSum + iCnt;
        }
    }

    return iSum;
}

function main()
{
   let iValue = 12;
   let iRet = 0;
   
   iRet =SumFactor(iValue);

   console.log("Summation of Factors: ",iRet);
}

main();