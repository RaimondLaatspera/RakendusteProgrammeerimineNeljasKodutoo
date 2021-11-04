import Category from "../componets/Category";

function CategoryList(props){
    return(
        <div>
            {props.category.map(item=>(
                <Category 
                key={item.id} 
                name={item.name}></Category>
    ))}
            
        </div>
    )
}

export default CategoryList