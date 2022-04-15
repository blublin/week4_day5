function isAnagram(s1, s2) {
    if (s1.length !== s2.length){
        return false
    }
    s1Arr = s1.toLowerCase().split("").sort().join("")
    // console.log(s1Arr)
    s2Arr = s2.toLowerCase().split("").sort().join("")
    // console.log(s1Arr)
    return (s1Arr === s2Arr ? true:false )
}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))
