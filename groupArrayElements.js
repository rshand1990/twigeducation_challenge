export default (arr, split) => {
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
