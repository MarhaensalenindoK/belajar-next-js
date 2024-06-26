"use client"
import React, { useEffect } from 'react'

export default function Error({
    error,
    reset
} : {
    error: Error,
    reset: () => void,
}) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    return (
        <div>
            <p>
                ada error brow
            </p>
            <button onClick={() => reset()}>
                Coba lagi
            </button>
        </div>
    )
}
