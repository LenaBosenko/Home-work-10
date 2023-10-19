

const usersNameArr = ['Lena', 'Kira', 'Olya', 'Karina', 'Ira', 'Julia', 'Polina']
/* console.log(usersNameArr)
console.log(usersNameArr[0]);
console.log(usersNameArr[1]);
console.log(usersNameArr[2]);
console.log(usersNameArr[3]);
console.log(usersNameArr[4]);
console.log(usersNameArr[5]); */

 for (let i = 0; i<usersNameArr.length; i++) {
    console.log(i);
    console.log(usersNameArr[i]);
    alert(i);
    alert(usersNameArr[i]);
} 


/* const usersNameArr2 = ['Lena', 'Kira', 'Olya', 'Karina', 'Ira', 'Julia', 'Polina'];
for (const userNameArr2 of usersNameArr2) {
    console.log(userNameArr2)
} */

const changesUsersNameArr = usersNameArr.splice (2,2);
console.log(usersNameArr)
alert('We have changes in the Array!')

 console.log(usersNameArr)

 for (let b = 0; b < usersNameArr.length; b++) {
    console.log(usersNameArr[b])
    alert(usersNameArr[b])
 } 



