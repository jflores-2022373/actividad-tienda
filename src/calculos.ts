/**
 * Módulo: calculos.ts
 * Ubicación: ./src/calculos.ts
 * Descripción: Contiene las funciones matemáticas encargadas de procesar los montos de la venta.
 */

/**
 * Calcula el subtotal sumando cada uno de los montos base de los productos.
 * @param precios - Un arreglo numérico que representa el costo de cada artículo.
 * @returns La suma total acumulada de la lista de precios.
 */
export function calcularSubtotal(precios: number[]): number {
    return precios.reduce((acumulado, precioActual) => acumulado + precioActual, 0);
}

/**
 * Calcula el valor del impuesto correspondiente a partir de un subtotal dado.
 * @param subtotal - El monto base de la transacción sobre el cual se aplica el impuesto.
 * @param tasaIva - El porcentaje del impuesto expresado en formato decimal.
 * @returns El valor exacto del impuesto a pagar.
 */
export function calcularIva(subtotal: number, tasaIva: number): number {
    return subtotal * tasaIva;
}

/**
 * Une el subtotal y el IVA para determinar el monto total definitivo a cobrar.
 * @param subtotal - El costo total de los productos sin impuestos.
 * @param iva - El valor del impuesto calculado previamente.
 * @returns El monto total neto de la compra.
 */
export function calcularTotal(subtotal: number, iva: number): number {
    return subtotal + iva;
}