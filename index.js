
const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let wordsnew="";
let randwords="";
let words=['python','java','apple','javascript','programming','sparrow','express',
'train','computer','monitor','sleep','cooking','crystal','andriod',
'orange','kalyan','penguin' , ' painting','tiger','physics','raining',
'textbook','winner','mobile','calculator','television','mobilenumber',
'laptop','products','teacup','planting','chemistry','mother','parrot'];
const newwords=()=>
{
    let randNum=Math.floor(Math.random()*words.length);
    //console.log(randNum);
    let newTempwords=words[randNum];
    //console.log(newTempwords);
    return(newTempwords);


}
const scramblewords=(arr)=>
{
    for(let i=arr.length-1;i>=0;i--)
    {
        let temp=arr[i];
        //console.log(temp);
        let j=Math.floor(Math.random()*(i+1));
        //console.log(i);
        //console.log(j);
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}
btn.addEventListener('click',function()
{
if(!play)
{
    play=true;
    btn.innerHTML="Guess";
    guess.classList.toggle('hidden');
    wordsnew= newwords();
    randwords=scramblewords(wordsnew.split("")).join("");
    //console.log(randwords.join(""));
    msg.innerHTML=`Guess the Word : ${randwords}`;
    //msg.innerHTML=randwords;
}
else{
    let tempword=guess.value;
    if(tempword==wordsnew)
    {
   // console.log('correct');
   play=false;
   
   msg.innerHTML=`Awesome Its correct🥳🥳🥳🥳.It is ${wordsnew}`;
   btn.innerHTML="Start Again!!";
   guess.classList.toggle('hidden');
   guess.value="";
    }
    else
    {
        //console.log('incorrect');
        msg.innerHTML=`Sorry Boss It is incorrect.😌Plz try again😎😎 ${randwords}`;
    }
}
})