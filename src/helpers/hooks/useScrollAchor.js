// import React from 'react'
import { useLayoutEffect } from 'react'
// Custom Hooks
export default function useScrollAchor() {
    useLayoutEffect(() => {
        const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

        for (let anchor = 0; anchor < smoothScrollAnchor.length; anchor++) {
          const element = smoothScrollAnchor[anchor];
        
          element.addEventListener("click", function (e) {
            e.preventDefault();
            if (document.getElementById(this.getAttribute("href").replace("#", "")))
              document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
              });
              console.log(element)
          });

        }
        
    
      return () => {};
    })
}

