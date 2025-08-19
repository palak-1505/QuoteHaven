import React from 'react'

function TrendyQuotes() {
    return (
        <div className="flex flex-col my-12 max-w-4xl mx-auto px-4 mt-32">
            <div className='text-3xl font-serif font-bold text-gray-800 text-center mb-8'>
                <h1>-- Trendy Quotes --</h1>
            </div>
            <div className='text-xl text-orange-500 text-center mb-8'>
                <p>
                    Join the trend, feel the vibe—discover the quotes that are setting hearts and timelines on fire today.
                    Stay connected with the freshest quotes shaping today’s conversations
                </p>
            </div>
            <div className='flex justify-center'>
                <div className=' grid grid-cols-3 gap-4'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>

        </div>
        
    )
}

export default TrendyQuotes
