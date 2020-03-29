export const deliveryStatus = (delivery) => {
  if (!delivery.cancelled_at && delivery.start_date && delivery.end_date) {
    return 'Entregue';
  }

  if (delivery.cancelled_at) {
    return 'Cancelada';
  }

  if (!delivery.cancelled_at && delivery.start_date && !delivery.end_date) {
    return 'Retirada';
  }

  if (!delivery.cancelled_at && !delivery.start_date && !delivery.end_date) {
    return 'Pendente';
  }

  return {};
};
