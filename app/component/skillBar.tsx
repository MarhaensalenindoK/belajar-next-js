import React from 'react'
interface props {
    skill: string,
    level: number,
}

export default function SkillBar({skill, level}: props) {
  return (
    <div>
        <li className="grid grid-cols-2 py-2">
            <p className="text-lg text-cream">
                {skill}
            </p>
            <div className="bg-gradient-to-r from-cream to-red-300" style={{ 
                width: `${level}%`,
            }}></div>
        </li>
    </div>
  )
}
