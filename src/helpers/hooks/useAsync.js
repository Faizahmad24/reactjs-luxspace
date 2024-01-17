import React from 'react'
// useCallback hooks untuk memoized funtion yang kita bikin
import {useCallback, useReducer, useRef } from 'react'
// import { useState, useCallback } from 'react'
import useSafeDispatch from './useSafeDispatch'

const defaultState =  {
    data : null, status: "idle", error: null
}
export default function useAsync(initialState) {
  // console.log("ini dia si jali jali : ", initialState)
    // const [{data, status, error}, setState] = useState({...defaultState, ...initialState})
    const initialStateRef = useRef({
        ...defaultState, ... initialState
    })

    const [{data, status, error}, setState] = useReducer((state, action) => {
        return {...state, ...action}
    }, initialStateRef.current)

    const safeSetState = useSafeDispatch(setState)
    // const run = useCallback(
    //     (promise) => {
    //         if(!promise || !promise.then)
    //         throw Error(`The argument passed to useAsync().run must be a promise`)
    //         setState({status : "pending"})
    //         return promise.then( data => {
    //             setState({data, status: "resolved"})

    //             return data
    //         }, 
    //         (error) => {
    //             setState({status: "rejected", error: JSON.parse(error.message)})
    //         })
    //     },
    //     [setState]
    // )

    const run = useCallback(
        (ahuy) => {
            if(!ahuy || !ahuy.then)
            throw Error(`The argument passed to useAsync().run must be a promise`)
            safeSetState({status : "pending"})
            return ahuy.then( data => {
                safeSetState({data, status: "resolved"})

                return data
            }, 
            (error) => {
                safeSetState({status: "rejected", error: JSON.parse(error.message)})
            })
        },
        [safeSetState]
    )

    const setData =  useCallback(
      (data) => {
        safeSetState({data})
      },
      [safeSetState],
    )

    const setError = useCallback(
      (error) => {
        safeSetState({error})
      },
      [safeSetState],
    )

    const reset = useCallback(
      () => {
        safeSetState(initialStateRef.current)
      },
      [safeSetState],
    )
    
    
    
  return {
    data, status, error, run, setData, setError, reset, isIddle: status === "idle", isLoading: status === "idle" || status === "pending", isError: status === "rejected", isSuccess: status === "resolved" 
  }
}
