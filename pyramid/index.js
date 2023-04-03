/**

Print a pyramid!

    *
   ***
  *****
 *******
*********

ACCEPTANCE CRITERIA:

Write a script to output pyramid of given size to the console (with leading spaces).

*/

function pyramid(size = 5) {
  console.log("A beautiful pyramid")

  for (let i = 1; i <= size; i++) {
    let spaces = " ".repeat(size - i)
    let stars = "*".repeat(i * 2 - 1)
    let str = spaces + stars
    console.log(str)
  }
}

pyramid(5)
