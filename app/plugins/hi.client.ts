export default defineNuxtPlugin(() => {
  const sayHello = () => {
    const args = [
      '\n %c Made with ❤️ by JustSerdar.Dev. %c\n',
      'border: 1px solid #000;color: #fff; background: #171717; padding:5px 0; animate-pulse rounded-sm',
      'color: #fff; background: #1c1c1c; padding:5px 0;'
    ]
    console.log(...args)
  }

  sayHello()
})
