//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.
function printNumbers(a, b) {
  let timerId = setInterval(function () {
    console.log(a);
    if (a === b) {
      clearInterval(timerId);
    }
    a += 1;
  }, 1000);
}

printNumbers(1, 5);
