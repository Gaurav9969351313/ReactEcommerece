import React from 'react'
import { ProductConsumer } from '../context'

export default function HomePage() {
    return (
        <div>
            <ProductConsumer>
                { value => {
                        return <h1> {value.title} </h1>
                    }
                }
            </ProductConsumer>
        </div>
    )
}
