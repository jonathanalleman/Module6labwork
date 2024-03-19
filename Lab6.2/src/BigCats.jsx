import './BigCats.css'

const cats = [
{ id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cheetah_at_Working_with_Wildlife.jpg/2560px-Cheetah_at_Working_with_Wildlife.jpg' },
{ id: 2, name: 'Cougar', latinName: 'Puma concolor', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/440px-Mountain_Lion_in_Glacier_National_Park.jpg"},
{ id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/520px-Standing_jaguar.jpg"},
{ id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/440px-African_leopard_male_%28cropped%29.jpg"},
{ id: 5, name: 'Lion', latinName: 'Panthera leo', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/440px-Lion_waiting_in_Namibia.jpg"},
{ id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/440px-Irbis4.JPG"},
{ id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/440px-Walking_tiger_female.jpg'},
]
function SingleCat({name, latinName, image}) {
    return(
        <li>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <em>({latinName})</em>
        </li>
    )
}

function BigCats() {
    const catList = cats.map(cat => (
        <SingleCat name={cat.name} latinName={cat.latinName} key={cat.id} image={cat.image}/>

    ))
    return(
        <div className='BigCats'>
            <h2>Big Cats</h2>
            <ul>{catList}</ul>

        </div>
    )
}

export default BigCats