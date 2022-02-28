// ------------ FOR EACH ------------------

function newForEach(callBack) {

    for (let index = 0; index < this.length; index++) {
        const currentValue = this[index];
        callBack(currentValue, index, this)
    }
}

Array.prototype.newForEach = newForEach;

// ------------ MAP ------------------

function newMap(callBack, array) {
    let output = [];
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index];
        output[index] = callBack(currentValue, index, array)
    }
    return output;
}
Array.prototype.newMap = newMap;

// ------------ FILTER ------------------

function newFilter(callBack, array) {
    let output = [];
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index];
        const result = callBack(currentValue);
        if (result) output[output.length] = currentValue;
    }
    return output;
}
Array.prototype.newFilter = newFilter;



// ------------ FIND ------------------

function newFind(callBack) {
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined;
}
Array.prototype.newFind = newFind;

// ------------ FIND INDEX -----------------
function newFindIndex(callBack) {
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i, this)) {
            return i
        }
    }
    return -1;
}
Array.prototype.newFindIndex = newFindIndex;


// ------------ REDUCE -----------------
function newReduce(callBack) {

    let acc = 0;
    for (let index = 0; index < this.length; index++) {
        let current = this[index];
        acc += current;
    }
    return acc;

}
Array.prototype.newReduce = newReduce;

// ------------ SOME -----------------
function newSome(callBack) {
    let counter = 0;
    for (let index = 0; index < this.length; index++) {
        let currentValue = this[index];
        let output = callBack(currentValue);
        if (output === true) {
            counter++;
        }
    }
    if (counter >= 1) {
        return true;
    } else {
        return false;
    }
}
Array.prototype.newSome = newSome;


// ------------ EVERY -----------------
function newEvery(callBack) {
    for (let index = 0; index < this.length; index++) {
        if (!callBack(this[index], index, this)) {
            return false;
        }
    }
    return true
}
Array.prototype.newEvery = newEvery;

// ------------ FILL -----------------
function newFill(valor) {
    let output = [];
    for (let index = 0; index < this.length; index++) {
        output[index] = valor;
    }
    return output;
}

Array.prototype.newFill = newFill;


// ------------ INCLUDES -----------------
function newIncludes(value) {
    for (let index = 0; index < this.length; index++) {
        if (this[index] === value) {
            return true;
        }
    }
    return false;

}
Array.prototype.newIncludes = newIncludes;


// ------------ INDEX OF -----------------
function newIndexOf(valor, vInicial = 0) {
    if (vInicial < 0) {
        return -1;
    }

    for (let index = vInicial; index < this.length; index++) {
        let current = this[index];

        if (current === valor) {
            return index;

        }
    }
    return -1;
}
Array.prototype.newIndexOf = newIndexOf;

// ------------ CONCAT -----------------

function newConcat(addArray = []) {
    return [...this, ...addArray];
}
Array.prototype.newConcat = newConcat;

// ------------ JOIN -----------------
function newJoin(separador = ",") {
    let output = "";
    for (let index = 0; index < this.length; index++) {
        output += this[index] + separador;

    }

    output = output.substring(0, output.length - 1);
    return output;

}
Array.prototype.newJoin = newJoin;

// // ------------ BONUS -----------------


// // ------------ SLICE -----------------
// function newSlice() {

// }
// Array.prototype.newSlice = newSlice;
// // ------------ FLAT -----------------
// function newFlat() {

// }
// Array.prototype.newFlat = newFlat;
// // ------------ FLAT MAP -----------------
// function newFlatMap() {

// }
// Array.prototype.newFlatMap = newFlatMap;