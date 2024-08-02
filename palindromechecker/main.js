function isPalindrome(str){

    const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/,'');
    // console.log(cleanstr);
    const reversedStr = cleanstr.split('').reverse().join('');
    // console.log(reversedStr);

    return cleanstr === reversedStr;
}





function palindromechecker(){

    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a palindrome`;
    }else{
        result.textContent = `"${inputText.value}" is not a palindrome`;
    }

    result.classList.add('fadeIn')
    inputText.value = '';

}




document.getElementById('checkButton').
addEventListener("click",palindromechecker)