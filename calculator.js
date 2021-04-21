var result_value = "";
var input_numeric_exp = "";
var count_decimal = 0;
var input_number = "", input_operator = "";
var mod_percent = "";
var zero = document.getElementById("0");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var divide = document.getElementById("/");
var multiply = document.getElementById("*");
var add = document.getElementById("+");
var minus = document.getElementById("-");
var equal = document.getElementById("=");
var clear = document.getElementById("ac");
var decimal = document.getElementById(".");
var percent = document.getElementById("%");

zero.onclick = function () {
    input_number = 0;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
one.onclick = function () {
    input_number = 1;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
two.onclick = function () {
    input_number = 2;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
three.onclick = function () {
    input_number = 3;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
four.onclick = function () {
    input_number = 4;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
five.onclick = function () {
    input_number = 5;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
six.onclick = function () {
    input_number = 6;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
seven.onclick = function () {
    input_number = 7;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
eight.onclick = function () {
    input_number = 8;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
nine.onclick = function () {
    input_number = 9;
    if (result_value != "") {
        result_value = "";
    }
    input_numeric_exp += input_number;
    mod_percent += input_number;
    document.getElementById("result").value = input_numeric_exp;
}
divide.onclick = function () {
    input_operator = "/";
    if (result_value != "") {
        input_numeric_exp += result_value;
        result_value = "";
    }
    if (count_decimal == 1)
        count_decimal = 0;
    input_numeric_exp += input_operator;
    mod_percent = "";
    document.getElementById("result").value = input_numeric_exp;
}
multiply.onclick = function () {
    input_operator = "*";
    if (result_value != "") {
        input_numeric_exp += result_value;
        result_value = "";
    }
    if (count_decimal == 1)
        count_decimal = 0;
    input_numeric_exp += input_operator;
    mod_percent = "";
    document.getElementById("result").value = input_numeric_exp;
}
add.onclick = function () {
    input_operator = "+";
    if (result_value != "") {
        input_numeric_exp += result_value;
        result_value = "";
    }
    if (count_decimal == 1)
        count_decimal = 0;
    input_numeric_exp += input_operator;
    mod_percent = "";
    document.getElementById("result").value = input_numeric_exp;
}
minus.onclick = function () {
    input_operator = "-";
    if (result_value != "") {
        input_numeric_exp += result_value;
        result_value = "";
    }
    if (count_decimal == 1)
        count_decimal = 0;
    input_numeric_exp += input_operator;
    mod_percent = "";
    document.getElementById("result").value = input_numeric_exp;
}
equal.onclick = function () {
    if (count_decimal == 1)
        count_decimal = 0;
    if (input_numeric_exp == "") {
        document.getElementById("result").value = "ERROR";
    }
    else {
        result_value = eval(input_numeric_exp);
        document.getElementById("result").value = result_value;
        document.getElementById("history").value = input_numeric_exp;
        mod_percent = result_value;
        input_numeric_exp = "";
    }
}
clear.onclick = function () {
    if (count_decimal == 1)
        count_decimal = 0;
    input_numeric_exp = result_value = mod_percent = "";
    document.getElementById("result").value = input_numeric_exp;
    document.getElementById("history").value = input_numeric_exp;
}
decimal.onclick = function () {
    if (count_decimal == 0) {
        count_decimal = 1;
        input_number = ".";
        input_numeric_exp += input_number;
        mod_percent += input_number;
        document.getElementById("result").value = input_numeric_exp;
    }
}
percent.onclick = function () {
    var mod_replace = mod_percent / 100;
    input_numeric_exp = input_numeric_exp.replace(mod_percent, mod_replace);
    document.getElementById("result").value = input_numeric_exp;
    mod_percent = mod_replace; //Changing the replacing value to the calculated percent value.
}