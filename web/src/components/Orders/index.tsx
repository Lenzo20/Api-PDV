import { Container } from './styles';
import { OrderBoard } from '../OrdersBord';
import { Order } from '../../types/Order';

const orders: Order[] = [
  {
    '_id': '6376e529f4b40f5e28bc2feb',
    'table': '5',
    'status': 'IN-PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'PIzza quatro queijos',
          'imagePath': '1668736023380-quatro-queijos',
          'price': 80,
        },
        'quantity': 1,
        '_id': '6376e529f4b40f5e28bc2fec'
      },
    ]
  }
];

export function Orders() {
  return (
    <Container >
      <OrderBoard
        icon = '⌚'
        title = 'Fila de espera'
        orders= {orders}
      />
      <OrderBoard
        icon = '🧑‍🍳'
        title = 'Em preparação'
        orders= {[]}

      />
      <OrderBoard
        icon = '✅'
        title = 'Pronto!'
        orders= {[]}

      />

    </Container>
  );
}
