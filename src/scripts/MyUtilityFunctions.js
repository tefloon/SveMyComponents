export function capitalize(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createGroups(arr, numGroups)
{
    const perGroup = Math.ceil(arr.length / numGroups);
    return new Array(numGroups)
        .fill('')
        .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}
