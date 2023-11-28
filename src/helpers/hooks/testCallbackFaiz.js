// import React from 'react'

export function getProduct(){
    const request = new Request("https://c1236sdsdb20-d180-45ae-bbb7-2f5d4421ff2e.mock.pstmn.io/api/categories/?page=1&limit=4", {
        method: "GET"
    })
    
    const response = fetch(request);

    return response.then((response) => response.json());
}



// import React from 'react'
// // useCallback hooks untuk memoized funtion yang kita bikin
// // import {useCallback, useReducer, useRef } from 'react'
// import { useState, useCallback } from 'react'
// import useSafeDispatch from './useSafeDispatch'

// const defaultState =  {
//     data : null, status: "idle", error: null
// }
// export default function useAsyncTest(initialState) {
//     const [{data, status, error}, setState] = useState({...defaultState, ...initialState})
//     // const initialStateRef = useRef({
//     //     ...defaultState, ... initialState
//     // })

//     // const [{data, status, error}, setState] = useReducer((state, action) => {
//     //     return {...state, ...action}
//     // }, initialStateRef.current)

//     // const safeSetState = useSafeDispatch(setState)
//     // const run = useCallback(
//     //     (promise) => {
//     //         if(!promise || !promise.then)
//     //         throw Error(`The argument passed to useAsync().run must be a promise`)
//     //         setState({status : "pending"})
//     //         return promise.then( data => {
//     //             setState({data, status: "resolved"})

//     //             return data
//     //         }, 
//     //         (error) => {
//     //             setState({status: "rejected", error: JSON.parse(error.message)})
//     //         })
//     //     },
//     //     [setState]
//     // )

//     const run = useCallback(
//         (ahuy) => {
//             if(!ahuy || !ahuy.then)
//             throw Error(`The argument passed to useAsync().run must be a promise`)
//             setState({status : "pending"})
//             return ahuy.then( data => {
//                 setState({data, status: "resolved"})

//                 return data
//             }, 
//             (error) => {
//                 setState({status: "rejected", error: JSON.parse(error.message)})
//             })

//         },
//         [setState]
//     )

//     // const setData =  useCallback(
//     //   (data) => {
//     //     setState({data})
//     //   },
//     //   [setState],
//     // )

//     // const setError = useCallback(
//     //   () => {
//     //     setState({error})
//     //   },
//     //   [setState],
//     // )

//     // const reset = useCallback(
//     //   () => {
//     //     setState(initialStateRef.current)
//     //   },
//     //   [setState],
//     // )
    
    
    
//   return {
//     data, status, error, run
//     // data, status, error, run, setData, setError, reset, isIddle: status == "idle", isLoading: status === "idle" || status === "pending", isError: status === "rejected", isSuccess: status === "resolved" 
//   }
// }
