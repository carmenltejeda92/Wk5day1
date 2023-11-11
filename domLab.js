/*  Author: C. Tejeda
    Date: 10.30.23
    Purpose: Week5 day1 homework */

const body = document.querySelector('body')
/* Task 1.0 - Select and cache the <main>element in a variable named mainEl. */
const mainEl = document.querySelector('#main')

/* Task 1.1 - Set the background color of mainElto the value stored in the --main-bgCSS custom property. */
mainEl.style.backgroundColor = '#4a4e4d'

/* Task 1.2 - Set the content of mainElto <h1>SEI Rocks!</h1>. */
const h1 = document.createElement('h1')
h1.innerHTML = 'SEI Rocks!'
mainEl.appendChild(h1)

/* Task 1.3 - Add a class of flex-ctr to mainEl. */
mainEl.className = "flex-ctr"

/* Task 2.0 - Select and cache the <nav id="top-menu">element in a variable named topMenuEl. */
const topMenuEl = document.querySelector('#top-menu')

/* Task 2.1 - Set the height topMenuElelement to be 100%. */
topMenuEl.style.height = '100%'

/* Task 2.2 - Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property. */
topMenuEl.style.backgroundColor = '#0e9aa7'










