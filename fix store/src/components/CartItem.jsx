function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-name">{item.name}</span>
        <span className="cart-item-price">${item.price.toFixed(2)}</span>
      </div>

      <div className="cart-item-quantity">
        <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </div>

      <button type="button" className="cart-item-remove" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
