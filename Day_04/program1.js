function Addition( iNo1 , iNo2)
{
    var iAns = 0;

    iAns = iNo1 + iNo2;

    return iAns;
}

function main()
{
    var iValue1 = 10;
    var iValue2 = 11;
    var iRet = 0;

    iRet = Addition(iValue1, iValue2);

    console.log("Addition is "+iRet);

}

main();