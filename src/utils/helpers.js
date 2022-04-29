export const cls = (input) =>
    input
        .replace(/\s+/gm, ' ')
        .split(' ')
        .filter((cond) => typeof cond === 'string')
        .join(' ')
        .trim();

export const numberRange = (from, to, step = 1) => {
    if (to < from) to = from;
    const res = [];
    for (let i = from; i <= to; i += step) res.push(i);
    return res;
};
