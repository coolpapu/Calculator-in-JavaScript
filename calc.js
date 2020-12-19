var result = 0;
function calc(idVal) {
    switch (idVal) {
        case "num0":
            result += "0";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num1":
            result += "1";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num2":
            result += "2";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num3":
            result += "3";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num4":
            result += "4";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num5":
            result += "5";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num6":
            result += "6";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num7":
            result += "7";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num0":
            result += "0";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num8":
            result += "8";
            document.getElementById("calc_op").innerText = result;
            break;
        case "num9":
            result += "9";
            document.getElementById("calc_op").innerText = result;
            break;
        case "addOp":
            result += "+";
            document.getElementById("calc_op").innerText = result;
            break;
        case "subOp":
            result += "-";
            document.getElementById("calc_op").innerText = result;
            break;
        case "mulOp":
            result += "*";
            document.getElementById("calc_op").innerText = result;
            break;
        case "divOp":
            result += "/";
            document.getElementById("calc_op").innerText = result;
            break;
        case "dec":
            result += ".";
            document.getElementById("calc_op").innerText = result;
            break;
        case "eqlOp":
            result = eval(result);
            document.getElementById("calc_op").innerText = result;
            break;
        case "clr":
            result = "";
            document.getElementById("calc_op").innerText = result;
            break;
        case "del":
            result = result.substring(0, result.length - 1);
            document.getElementById("calc_op").innerText = result;
            break;
        default:
            alert("Wrong Operation");
            break;
    }
}

var clk = setInterval(dyc, 1000);
function dyc() {
    var dt = new Date();
    var ti = dt.toLocaleTimeString();
    document.getElementById("dy_clock").innerText = ti;
    // console.log(ti);
}
