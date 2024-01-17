import React, {useRef, useState,useCallback, useLayoutEffect} from 'react'

export default function Carousel({children, refContainer}) {
    const refDragHandler = useRef(null)
    // const containerClientRect = refContainer.current.getBoundingClientRect()
    const [index, setIndex] = useState(0)

    const threshold = 100
    const itemToShow = window.inerWidth < 767 ? 1 : 4
    const DIRECTION_LEFT = "DIRECTION_LEFT"
    const DIRECTION_RIGHT = "DIRECTION_RIGHT"

    const posInitial = useRef(false)
    const posX1 = useRef(false)
    const posX2 = useRef(false)
    const posFinal = useRef(false)
    // untuk ngecek apakah posisinya udh boleh digeser atau gak
    const isAllowShift = useRef(true)
    const cards = useRef(false)
    const cardCount = cards.current?.length || 0
    const cardSize = cards.current?.[0] || 0

    const fnCheckIndex = useCallback(
      (e) => {
        if (e.propertyName === "left") {
            setTimeout(() => {
                refDragHandler.current.classList.remove("transition-all duration-200")
            }, 200)
    
            const isMobile = window.innerWidth < 767 ? 0 : -1
            if (index <= 0 ) {
                refDragHandler.current.style.left = 0
                setIndex(0)
            } else if(index >= cardCount - itemToShow) {
                refDragHandler.current.style.left = `${-((cardCount - itemToShow + isMobile ) * cardSize)}px`
                setIndex(cardCount - itemToShow)
            } else if(index === cardCount || index === cardCount - 1) {
                refDragHandler.current.style.left = `${(cardCount-1) * cardSize}px`
                setIndex(cardCount - 1)
            }
        }
        
        isAllowShift.current = true
        
      },[cardCount, cardSize, itemToShow],)
    

    const fnShiftItem = useCallback(
      (direction) => {
        console.log(direction)
        refDragHandler.current.classList.add("transition-all duration-200")
        refDragHandler.current.classList.add("transition-all duration-200")

        if(isAllowShift.current) {
            if(direction === "DIRECTION_LEFT") {
                setIndex(prev => prev + 1)
                refDragHandler.current.style.left = `${posInitial.current - cardSize}px`
            } else if(direction === "DIRECTION_RIGHT") {
                setIndex(prev => prev - 1)
                refDragHandler.current.style.left = `${posInitial.current - cardSize}px`
            }
        }

        isAllowShift.current  = false
      },
      [cardSize],
    )
    

    const onDragMove = useCallback(
      (e) => {
        e = e || window.event
        e.preventDefault()
        console.log(e)

        if (e.type === "touchmove") {
            posX2.current = posX1.current - e.touches[0].clientX
            posX1.current = e.touches[0].clientX 
        } else {
            posX2.current = posX1.current - e.clientX
            posX1.current = e.clientX      
        }

        refDragHandler.current.style.left = `${refDragHandler.current.style.offsetLeft - posX2.current}px`
      },
      [posX1, posX2],
    )

    const onDragEnd = useCallback(
        (e) => {
          e = e || window.event
          e.preventDefault()
          console.log(e)
          posFinal.current = refDragHandler.current.offsetLeft

          if (posFinal - posInitial.current < -threshold) {
            fnShiftItem(DIRECTION_LEFT)
          } else if (posFinal.current - posInitial.current > threshold) {
            fnShiftItem(DIRECTION_RIGHT)
          } else {
            refDragHandler.current.style.left = `${posInitial.current}px`
          }
          document.onmouseup = null
          document.onmousemove = null
        },
        [],
      )

      const onDragStart = useCallback(
        (e) => {
          e = e || window.event
          e.preventDefault()
          console.log(e)

          posInitial.current = refDragHandler.current.offsetLeft

          if(e.type === "touchstart") {
            // ini jika ditouch ukuran mobile
            posX1.current = e.touches[0].clientX
          } else {
            // jika tampilan di pc
            posX1.current = e.clientX
            // ketika klik nya dilepas dimana pun
            document.onmouseup = onDragEnd
            // ketika posisi mouse pindah
            document.onmousemove = onDragMove
          }
        },
        [onDragEnd, onDragMove],
      )

      const onClick = useCallback(
        (e) => {
          e = e || window.event;
          !isAllowShift.current && e.preventDefault()
        },
        [],
      )
      
      useLayoutEffect(() => {
        const refForwardDragHandler = refDragHandler.current

        // ketika mouse diklik kiri
        refForwardDragHandler.onmousedown = onDragStart
        // 
        refForwardDragHandler.addEventListener("touchstart", onDragStart)
        refForwardDragHandler.addEventListener("touchmove", onDragEnd)
        refForwardDragHandler.addEventListener("touchstart", onDragMove)
        refForwardDragHandler.addEventListener("click", onClick)
        refForwardDragHandler.addEventListener("transitionend", fnCheckIndex)
        return () => {
            refForwardDragHandler.removeEventListener("touchstart", onDragStart)
            refForwardDragHandler.removeEventListener("touchmove", onDragEnd)
            refForwardDragHandler.removeEventListener("touchstart", onDragMove)
            refForwardDragHandler.addEventListener("click", onClick)
            refForwardDragHandler.addEventListener("transitionend", fnCheckIndex)
        };

        // karena dalam useLayoutEffect ini kita akan manggil function onDragStart, onDragEnd, onDragMove maka nama functionnya kita panggi dan dijadiin dependencie nya
      }, [onDragStart, onDragEnd, onDragMove, onClick, fnCheckIndex])
    
      useLayoutEffect(() => {
        if (refDragHandler.current) {
            cards.current = refDragHandler.current.getElementsByClassName("card")
        }
        
      }, [])
    return (
        <div ref={refDragHandler} className="flex -mx-4 flex-row relative">
            {children}
        </div>
  )
}
