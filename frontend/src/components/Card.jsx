import React from 'react'

const Card = ({title, subtitle, chips}) => {
  return(
      <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}

      {/* Interest tags */}
      {chips && chips.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {chips.map((chip, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card