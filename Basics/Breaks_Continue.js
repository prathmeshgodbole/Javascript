for (i = 0; i < 10; i++) {
    if (i === 5 || i === 3) {
        continue;
    }
    console.log(i);
    if (i === 7) {
        break;
    }
}
console.log("We breaked loop successfully...");