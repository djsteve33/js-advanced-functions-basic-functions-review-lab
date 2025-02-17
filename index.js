// Your code here
function saturdayFun(activity="roller-skate") {
return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(season="*") {
    return function(adjective="special") {
        return `You are ${season}${adjective}${season}!`
    }
}

const Calculator =  {
add: function(a,b) {
    return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(start, arr) {
    let a = start

    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a)
    }
    return a
}