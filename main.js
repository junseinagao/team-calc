const plus = document.getElementById('button-plus');
const minus = document.getElementById('button-minus');
const multiply = document.getElementById("button-multiply");
const divide = document.getElementById("button-divide");
const equal = document.getElementById('button-equal');
const allClear = document.getElementById("button-AC");

const one = document.getElementById("button-one");
const two = document.getElementById("button-two");
const three = document.getElementById("button-three");
const four = document.getElementById("button-four");
const five = document.getElementById("button-five");
const six = document.getElementById("button-six");
const seven = document.getElementById("button-seven");
const eight = document.getElementById("button-eight");
const nine = document.getElementById("button-nine");
const zero = document.getElementById("button-zero");

const display = document.getElementById('textview');

//入力1を保存するための変数
let input1 = 0;
//記号を保存するための変数
let mark = "";
//入力2を保存するための変数
let input2 = 0;

plus.onclick = function(){
  if (isBefore() == 'beforeMark'){
    storeToInput1();
    putMark("+")
    display.textContent = 0;
  }
}

minus.onclick = function(){
  if (isBefore() == 'beforeMark'){
    storeToInput1();
    putMark("-")
    display.textContent = 0;
  }
}

multiply.onclick = function(){
  if (isBefore() == 'beforeMark'){
    storeToInput1();
    putMark("*")
    display.textContent = 0;
  }
}

divide.onclick = function(){
  if (isBefore() == 'beforeMark'){
    storeToInput1();
    putMark('/');
    display.textContent = 0;
  }
}

equal.onclick = function(){
  storeToInput2();
  updateDisplay();
}

allClear.onclick = function(){
  display.textContent = "";
  input1 = 0;
  input2 = 0;
}

//いまは入力1か 今はどこの入力かで書き換えます。
/**
 * @return {String} beforeMark' or 'afterMark'
 */
const isBefore = function() {
  if (mark == '') {
    return 'beforeMark';
  } else {
    return 'afterMark'
  }
}


//markに記号を代入する
const putMark = function(kigou) {
  mark = kigou;
  console.log('mark',mark)
  // return mark
}

//入力1が保存ずみで入力2に保存する処理
const storeToInput2 = function() {
  if(mark != ""){
    input2 = Number(display.textContent);
  }
}


//入力1の次は、記号の入力かどうかを判断する処理


// buttonから数字の入力を読み取って保存する
one.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 1
	display.textContent = newNum
}
two.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 2
	display.textContent = newNum
}
three.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 3
	display.textContent = newNum
}
four.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 4
	display.textContent = newNum
}
five.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 5
	display.textContent = newNum
}
six.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 6
	display.textContent = newNum
}
seven.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 7
	display.textContent = newNum
}
eight.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 8
	display.textContent = newNum
}
nine.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 9
	display.textContent = newNum
}
zero.onclick = function () {
	let oldNum = Number(display.textContent)
	const newNum = 10*oldNum + 0
	display.textContent = newNum
}

//0から入力して入力1に保存する処理
const storeToInput1 = function () {
  input1 = Number(display.textContent);
}

// buttonから記号の入力を読み取って保存する


// 保存されてる値を使って計算する.
const calc = function() {
  let result = 0;
  console.log("input1,mark,input2",input1,mark,input2);
	switch(mark){
		case "+":
      result = input1 + input2
      break;
		case "-":
			result = input1 - input2
			break;
		case "*":
			result = input1 * input2
			break;
		case "/":
			result = input1 / input2
			break;
	}
  return result
}

// 結果を表示する。
const updateDisplay = function() {
  if (isBefore() == 'beforeMark') {
    console.log("記号を押してください");
  } else {
    const result = calc();
    console.log(result)
    display.textContent = result;
    input1 = calc();
    mark = ''; 
    input2 = 0;
  }
}