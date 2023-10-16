import { useState } from "react"

export const useLoginHandler = () => {
    const [submitting, setSubmitting] = useState(false)

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const handleLogin = async (email: string, password: string) => {
        setSubmitting(true)
    }

    return {
        submitting,
        handleLogin
    }
}