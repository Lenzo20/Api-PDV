import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function  OrderBoard({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ selectedOrder, setSelectedOrder ] = useState<null | Order>(null);

  function handlOpenModel(order: Order) {
    setIsModalVisible(true);
    console.log(order);
    setSelectedOrder(order);
  }

  return (
    <Board >

      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}

      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>

      </header>

      {orders.length > 0 && (
        <OrdersContainer >
          {orders.map(order => (
            <button type='button' key={order._id} onClick={() => handlOpenModel(order)}>
              <strong>{icon} Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
