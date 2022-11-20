import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { OrverLay, ModalBody, OrderDatails } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order| null;
}

export function OrderModal({ visible, order }: OrderModalProps) {

  // Se não tiver visivel ele da sequencia no codigo
  if (!visible || !order) {
    return null;
  }

  return (
    <OrverLay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button'>
            <img src={closeIcon} alt="icon  de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '⌚'}
              {order.status === 'IN-PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              <span>
                {order.status === 'WAITING' && 'Fila de Espera'}
                {order.status === 'IN-PRODUCTION' && 'Em preparação'}
                {order.status === 'DONE' && 'Pronto!'}
              </span>
            </strong>
          </div>
        </div>

        <OrderDatails>
          <strong>itens</strong>

          {order.products.map(({ _id, product, quantity}) => (
            <div className="item" key={_id}>
              <img src={`http://localhost:8080/uploads/${product.imagePath}`} alt={product.name} />
            </div>
          ))}
        </OrderDatails>
      </ModalBody>
    </OrverLay>
  );
}
