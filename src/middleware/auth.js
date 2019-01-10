export default function auth ({ next, router }) {
  console.log(localStorage.getItem('token'))
  if (!localStorage.getItem('token')) {
    return router.push({ name: 'login' })
  }
  return next()
}
