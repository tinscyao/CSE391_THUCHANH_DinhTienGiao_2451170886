function PriceTag({ originalPrice, salePrice }) {
    return (
        <div>
            <span style={{ textDecoration: "line-through", color: "gray" }}>{originalPrice}đ</span>
            <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}>{salePrice}đ</span>
        </div>
    );
}
export default PriceTag;