
<scrip>


//Reverse a String

function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello");

//factorialize a number

function factorialize(num) {
  var answer = 1;
  while (num > 1){
    answer *= num;
    num--;
  }
  return answer;
}
factorialize(5);


// Find is word is the same forwards and backwards

function palindrome(str) {
  
  //remove non letters and lowercase
  var removeExtra = str.replace( /[\W_]/g, "" ).toLowerCase();
  
  //flip it new variable
  var newStr = removeExtra.split("").reverse().join("");

  
  //if old and new same return true 
 if( removeExtra === newStr ){
   return true;
  }else{
 return false;
 }
 
}
palindrome("A man, a plan, a canal. Panama");



// Longest Word

function findLongestWord(str) {
  // make array of strings
  var arr = str.split(" ");
  // create variable to put things into
  var maxLength = 0;
  // for each word on arr get length
  for(i = 0; i < arr.length; i++){
    // if the words lenght is larger than your variable, make that variable the words length
    if(arr[i].length > maxLength){
      maxLength = arr[i].length;
    }
    
  }
  // return that length
 return maxLength;

}
findLongestWord("The quick brown fox jumped over the lazy dog");




//First letter capital

function titleCase(str) {
  
  var word = str.toLowerCase().split(" ");
  var myWord = [];
 
  for(var i = 0; i < word.length; i++ ){
   var res = word[i].charAt(0).toUpperCase() + word[i].slice(1);
   myWord.push(res);
  }
   return myWord.join (" ");
}
titleCase("I'm a little tea pot");


//largest number in each array

function largestOfFour(arr) {
  // You can do this!
  var answer = [];
  var largeNum = 0;
  
  
  
  
 for( i = 0; i < arr.length; i++){
     
    answer.push(
        Math.max.apply(null, arr[i]));
    
 }
 return answer;
}
 

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//endsWith

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}


truncateString("A-tisket a-tasket A green and yellow basket", 11);


//Repeat string

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0){ 
      return "";
 } else {
  return str.repeat(num);
 }
}

repeatStringNumTimes("abc", 6);



//clear out extra frome string

function truncateString(str, num) {
  // Clear out that junk in your trunk
  // if str is <== num return str
  var diff = str.length - num;
  
  if(str.length <= num){
      return str;
  }else if(num < 4){
      var short = str.slice(0, num);
      var oth = short.concat("...");
      return oth;
  }else if( str.length > num || num > 4){
      var long = str.slice(0, num-3);
      var ext = long.concat("...");
      return ext;
  
  }
  // if str is > num slice str num-3 add ...
  // if num <== 3 slice str num add ...
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 10);


//find the difference between num and str.length


</script>