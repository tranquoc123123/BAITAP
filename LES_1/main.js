
function createTable()
{

row = document.getElementById('row');
column = document.getElementById('column');
 for(let r=0;r<parseInt(row.value);r++)
  {
   let x=document.getElementById('thetable').insertRow(r);
   for(let c=0;c<parseInt(column.value);c++)  
    {
     let y=  x.insertCell(c);
     y.innerHTML="Default value"; 
    }
   }
}

listSNT

function listSNT(){    
    let sttNum;
    let endNum;
    let rtn =[];
    let text ="";
    a = document.getElementById('a');
    b = document.getElementById('b');
    if (a <= b) 
    {
        sttNum = a.value;
        endNum = b.value;
    }    
    else
    {
        sttNum = b.value;
        endNum = a.value;
    }
    let first = true;
    for (let i = sttNum; i <= endNum ; i++) {
       if (Check(i)) 
        {   
            rtn.push(i);
            if (first)
                {
                    text = i;
                }
            else
                {
                    text = text + ", " +i;
                } 
                first = false;          
        }
    }
    let result = document.getElementById('Result');
    result.innerHTML = text;
}
function Check(num)
{   
    if (num < 2) {
        return false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num%i == 0) return false;
        }
    }
    return true;
}
