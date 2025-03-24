
import { useEffect, useState } from "react"

const TOAST_TIMEOUT = 5000

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = (options) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, ...options }
    
    setToasts((currentToasts) => [...currentToasts, newToast])
    
    return id
  }

  const dismiss = (id) => {
    setToasts((currentToasts) => 
      currentToasts.filter((toast) => toast.id !== id)
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setToasts((currentToasts) => {
        const now = new Date().getTime()
        return currentToasts.filter((toast) => {
          return !toast.createdAt || now - toast.createdAt < TOAST_TIMEOUT
        })
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return { toast, dismiss, toasts }
}

export const toast = (options) => {
  const event = new CustomEvent("toast", { detail: options })
  document.dispatchEvent(event)
}
