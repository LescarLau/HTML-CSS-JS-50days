const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    // 它可以添加类名，删除类名或者在类名存在时删除它，不存在时添加它，通俗点讲就是，使用该方法时，元素有该类名就移除，没有就添加。
    search.classList.toggle('active')
    input.focus()
})