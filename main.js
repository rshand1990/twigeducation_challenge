const groupArrayElements = (arr, split) => {
    if (split > 0) {
        const groupSize = Math.round(arr.length / split);

        let groupedArrays = [];

        for (let i = 0; (i < arr.length); i += groupSize) {
            groupedArrays.push(arr.slice(i, i + groupSize));
        }

        return groupedArrays;
    }
    return arr;
}

const testSplittingArrayInto3 = () => {
    if (JSON.stringify(groupArrayElements([1, 2, 3, 4, 5], 3)) === JSON.stringify([ [ 1, 2 ], [ 3, 4 ], [ 5 ] ])) {
        console.log('testSplittingArrayInto3 : pass');
    } else {
        throw new Error('testSplittingArrayInto3 failed');
    }
}

const testSplittingArrayInto2 = () => {
    if (JSON.stringify(groupArrayElements([1, 2, 3, 4, 5], 2)) === JSON.stringify([ [ 1, 2, 3 ], [ 4, 5 ] ])) {
        console.log('testSplittingArrayInto2 : pass');
    } else {
        throw new Error('testSplittingArrayInto2 failed');
    }
}

const testSplittingLongerArrayInto2 = () => {
    if (JSON.stringify(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)) === JSON.stringify([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ])) {
        console.log('testSplittingLongerArrayInto2 : pass');
    } else {
        throw new Error('testSplittingLongerArrayInto2 failed');
    }
}

const handlesEmptyArray = () => {
    if (JSON.stringify(groupArrayElements([], 2)) === JSON.stringify([ ])) {
        console.log('handlesEmptyArray : pass');
    } else {
        throw new Error('handlesEmptyArray failed');
    }
}

const handlesSplitIntoZeroElements = () => {
    if (JSON.stringify(groupArrayElements([1, 2, 3, 4, 5], 0)) === JSON.stringify([ 1, 2, 3, 4, 5 ])) {
        console.log('handlesSplitIntoZeroElements : pass');
    } else {
        throw new Error('handlesSplitIntoZeroElements failed');
    }
}

testSplittingArrayInto3();
testSplittingArrayInto2();
testSplittingLongerArrayInto2();
handlesEmptyArray();
handlesSplitIntoZeroElements();