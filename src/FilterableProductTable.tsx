/**https://react.dev/learn/thinking-in-react */
import './FilterableProductTable.css'
import {useState} from 'react';

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
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div className='filterableProductTable'>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}  />
            <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <form className='searchBar'>
            <input type="text" value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
            placeholder="Search..." />
            <div>
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
            </div>
        </form>
    );
}

function ProductTable({ products, filterText, inStockOnly}) {
    // Get unique categories from the products array
    const filteredProducts = products.filter((product) => 
        product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
          ) != -1 && (!inStockOnly || product.stocked)
    );
    const categories = [...new Set(filteredProducts.map((product) => product.category))];
    const productTableSections = categories.map((category) => {
        const categoryProducts = filteredProducts.filter((product) => product.category === category)
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