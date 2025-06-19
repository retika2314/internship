function grade(m1,m2,m3,m4,m5)
{
    let avg=(m1+m2+m3+m4+m5)/5;
    if (avg>=90){
        console.log("O grade");
    }
    else if(avg>=80){
        console.log("A grade");
    }
    else if(avg>=70){
        console.log("B grade");
    }
    else if(avg>=45){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
}
let m1=10;
let m2=20;
let m3=90;
let m4=90;
let m5=90;
grade(m1,m2,m3,m4,m5);