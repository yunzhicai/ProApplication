import React, { useState, useCallback, useEffect, useRef, useImperativeHandle } from 'react'
import debounce from 'lodash/debounce'
import { observerDomResize } from './../observerDomResize'
export default function useAutoResize(ref: React.Ref<any>) {
  const [state, setState] = useState({ width: 0, height: 0 })

  const domRef = useRef<HTMLDivElement>(null)

  const setWH = useCallback(() => {
    const { clientWidth, clientHeight } = domRef.current || { clientWidth: 0, clientHeight: 0 }

    setState({ width: clientWidth, height: clientHeight })

    if (!domRef.current) {
      console.warn('DataV: Failed to get dom node, component rendering may be abnormal!')
    } else if (!clientWidth || !clientHeight) {
      console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!')
    }
  }, [])

  useImperativeHandle(ref, () => ({ setWH }), [])

  useEffect(() => {
    const debounceSetWHFun = debounce(setWH, 100)

    debounceSetWHFun()
    if(!domRef.current) return 
    const domObserver = observerDomResize(domRef.current, debounceSetWHFun)

    window.addEventListener('resize', debounceSetWHFun)

    return () => {
      window.removeEventListener('resize', debounceSetWHFun)

      if (!domObserver) {
        return
      }

      domObserver.disconnect()
      domObserver.takeRecords()
    }
  }, [])

  return { ...state, domRef, setWH }
}
