/**https://react.dev/learn/thinking-in-react */
import './FilterableProductTable.css'

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "DryFruits", price: "$1", stocked: true, name: "Almond" }
];

export function FilterableProductTable() {
    return (
        <div className='filterableProductTable'>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </div>
    );
}

function SearchBar() {
    return (
        <form className='searchBar'>
            <input type="text" placeholder="Search..." />
            <div>
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
            </div>
        </form>
    );
}

function ProductTable({ products }) {
    // Get unique categories from the products array
    const categories = [...new Set(products.map((product) => product.category))];
    const productTableSections = categories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category)
        return (<ProductTableSection category={category} products={categoryProducts} />);
    });

    return (
        <table>
            <ProductTableHeader />
            <tbody>{productTableSections}</tbody>
        </table>
    )
}

function ProductTableHeader() {
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
        </thead>
    );
}

function ProductTableSection({ category, products }) {
    const productRows = products.map((product) => (
        <ProductRow key={product.name} product={product} />
    ));
    return (
        <>
            <tr><th colSpan={2}>{category}</th></tr>
            {productRows}
        </>
    )
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}