export const convertTime = (time) =>
  new Date(Date(time)).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
