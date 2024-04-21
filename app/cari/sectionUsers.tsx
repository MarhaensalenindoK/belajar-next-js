import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(res => res.json())

export default function SectionUsers() {

    const { data, error } = useSWR(`https://api.github.com/users`, fetcher)
    var loading = !data && !error

    console.log(data)

return (
        <div>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {
                data && data.map((item:any, key:number) => (
                    <div key={item.id}
                    className={`${key % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                    style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        borderBottom: "1px solid #ccc"
                    }
                    }>
                        
                        <p style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <img src={item.avatar_url} alt={item.login} width="50" height="50" style={
                            {
                            borderRadius: "50%",
                            marginRight: "20px"
                            }
                        } />
                        
                        <Link href={`/cari/${item.login}`} style={
                            {
                            color: "#000",
                            textDecoration: "none",
                            cursor: "pointer"
                            }
                        }>
                            {item.login}
                        </Link>
                        </p>
                        <p>
                        <Link href={item.html_url} target="_blank" style={
                            {
                            color: "#007bff",
                            textDecoration: "none",
                            cursor: "pointer"
                            }
                        }>
                            Lihat Profil
                        </Link>
                        </p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
