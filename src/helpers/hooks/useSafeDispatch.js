import {useRef, useLayoutEffect, useCallback} from 'react'


// dispatch adalah function yang kita lewatin
export default function useSafeDispatch(dispatch) {
  // beri nilai awal dengan false
  const mounted = useRef(false)

  // ketika udh dimounted kita ubah jadi true 
  useLayoutEffect(() => {
    mounted.current = true
  
    return () => {
      // dan diclean up kita ubah lagu nilainya jadi false
      mounted.current = false
    };
  }, [])

  return useCallback(
    // apapun arguman yang disisipin kita cek kondisi mountednya, kalo mounted kita lakukan dispatch dan sisipin semua arguman yang diterima. Dan kalau enggak kita lewatin dengan void 0
    (...args) => mounted.current ? dispatch(...args) : void 0,
    [dispatch]
  )
}