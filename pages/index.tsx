import Homepage from './homepage'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

const Index = () => {
  // const router = useRouter()

  // useEffect(() => {
  //   const { REALM } = process.env
  //   const mainUrl = REALM ? `/dao/${REALM}` : '/homepage'
  //   router.replace('/homepage')
  // }, [])

  return <Homepage />
}

export default Index
