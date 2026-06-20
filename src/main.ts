/**
 * Módulo: main.ts
 * Ubicación: ./src/main.ts
 * Descripción: Maneja el menú interactivo en consola, solicita los datos 
 * al usuario paso a paso y presenta los resultados.
 */

import * as readline from 'readline-sync';
import { calcularSubtotal, calcularIva, calcularTotal } from './calculos';

const TASA_IVA: number = 0.12; // Tasa del 12% para el cálculo del impuesto

/**
 * Muestra el desglose del comprobante en la pantalla con los datos ingresados.
 */
function mostrarTicketFinal(nombreCompra: string, precios: number[], subtotal: number, iva: number, total: number): void {
    console.log("\n=========================================");
    console.log(`       TICKET: ${nombreCompra.toUpperCase()} `);
    console.log("=========================================");
    console.log(`Productos: [${precios.map(p => `Q${p.toFixed(2)}`).join(', ')}]`);
    console.log("-----------------------------------------");
    console.log(`Subtotal base:     Q${subtotal.toFixed(2)}`);
    console.log(`IVA (12%):         Q${iva.toFixed(2)}`);
    console.log("-----------------------------------------");
    console.log(`TOTAL NETO:        Q${total.toFixed(2)}`);
    console.log("=========================================\n");
}

/**
 * Solicita de forma iterativa los precios para llenar la lista de productos.
 */
function llenarCarritoManual(): number[] {
    const carrito: number[] = [];
    let pidiendoPrecios = true;

    while (pidiendoPrecios) {
        const entrada = readline.question("-> Ingresa el precio del producto (o escribe 'fin' para terminar): ");
        
        if (entrada.toLowerCase() === 'fin') {
            pidiendoPrecios = false;
        } else {
            const precio = parseFloat(entrada);
            if (!isNaN(precio) && precio > 0) {
                carrito.push(precio);
            } else {
                console.log("Aviso: Precio no valido. Intenta de nuevo.");
            }
        }
    }
    return carrito;
}

/**
 * Controla el ciclo de vida y las opciones del menú de usuario.
 */
function iniciarMenuInteractivo(): void {
    let continuar = true;

    while (continuar) {
        console.log("=== APP DE VENTAS (CONTROL TOTAL MANUAL) ===");
        console.log("1. Registrar Compra de Supermercado (Varios productos)");
        console.log("2. Registrar Compra de Tecnologia (Un solo articulo caro)");
        console.log("3. Registrar Factura Libre (Nombre personalizado)");
        console.log("4. Apagar sistema");
        
        const seleccion = readline.question("Elige una opcion (1-4): ");

        switch (seleccion) {
            case '1': {
                console.log("\n--- MODO: SUPERMERCADO MANUAL ---");
                console.log("Ingresa los precios de los abarrotes uno por uno:");
                const productos = llenarCarritoManual();

                if (productos.length > 0) {
                    const subtotal = calcularSubtotal(productos);
                    const iva = calcularIva(subtotal, TASA_IVA);
                    const total = calcularTotal(subtotal, iva);
                    mostrarTicketFinal("Compra de Supermercado", productos, subtotal, iva, total);
                } else {
                    console.log("Error: No se agregaron productos.\n");
                }
                break;
            }
            case '2': {
                console.log("\n--- MODO: TECNOLOGIA MANUAL ---");
                const entrada = readline.question("Ingresa el precio de la Laptop o Celular: ");
                const precioUnico = parseFloat(entrada);

                if (!isNaN(precioUnico) && precioUnico > 0) {
                    const productos = [precioUnico];
                    const subtotal = calcularSubtotal(productos);
                    const iva = calcularIva(subtotal, TASA_IVA);
                    const total = calcularTotal(subtotal, iva);
                    mostrarTicketFinal("Articulo Tecnologico", productos, subtotal, iva, total);
                } else {
                    console.log("Error: Precio invalido.\n");
                }
                break;
            }
            case '3': {
                console.log("\n--- MODO: FACTURA LIBRE ---");
                const nombreFactura = readline.question("¿Que nombre le quieres poner a esta venta?: ");
                console.log(`Ingresa los precios para: ${nombreFactura}`);
                const productos = llenarCarritoManual();

                if (productos.length > 0) {
                    const subtotal = calcularSubtotal(productos);
                    const iva = calcularIva(subtotal, TASA_IVA);
                    const total = calcularTotal(subtotal, iva);
                    mostrarTicketFinal(nombreFactura, productos, subtotal, iva, total);
                } else {
                    console.log("Error: No se agregaron productos.\n");
                }
                break;
            }
            case '4':
                console.log("\nApagando sistema... Operacion finalizada.");
                continuar = false;
                break;
            default:
                console.log("Error: Opcion no valida.\n");
        }
    }
}

iniciarMenuInteractivo();