import ItemList from "../componets/ItemList"
import CategoryList from "../componets/CategoryList"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Home(){

    const [isLoading, setIsLoading] = useState(true)
    const [loadedItems, setLoadedItems] = useState([])
    const [loadedCategories, setLoadedCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json()
        }).then(data =>{
            console.log(data)
            setLoadedItems(data)
        })
    }, [])

    useEffect(()=>{
        fetch('http://localhost:8080/categories').then(res => {
            return res.json()
        }).then(data =>{
            console.log(data)
            setIsLoading(false)
            setLoadedCategories(data)
        })
    }, [])
    
    if (isLoading) {
        return(<div>Laeb...</div>)
    }
    return (
        <div class="homePage">
            <br />
            <Link to="add-item">
                <button id="insertNew">Lisa uus</button>
            </Link>

            <h2 class="tooted">Lisatud tooted</h2>

            <ItemList items={loadedItems}/>

            <h2 class="tooted">Kategooriad</h2>
            
            <CategoryList category={loadedCategories}/>
        </div>
    )
}

export default Home;