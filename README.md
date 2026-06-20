# Sistema de Facturación y Control de Caja Interactivo

Este es mi proyecto de sistema de facturación desarrollado en TypeScript y Node.js. La aplicación funciona de manera interactiva a través de la terminal de comandos para simular el proceso de cobro en una caja registradora, aplicando el cálculo del Impuesto al Valor Agregado (IVA) del 12% sobre las compras de forma automatizada y modular.

## Estructura de mi Proyecto

Organicé mi código siguiendo principios de modularidad para separar la lógica de los cálculos matemáticos de la interacción con el usuario en la consola:

* **src/calculos.ts**: En este archivo guardo mis funciones puras de procesamiento numérico (`calcularSubtotal`, `calcularIva`, `calcularTotal`). No realizan impresiones en pantalla para que puedan ser reutilizadas en el futuro.
* **src/main.ts**: Es el controlador principal. Aquí manejo el ciclo del menú de opciones y capturo las entradas de texto del usuario utilizando la librería `readline-sync`.

---

## Documentación Técnica de las Funciones

A continuación, detallo el comportamiento, los tipos de datos y la lógica que implementé para cada una de las funciones de mi archivo `src/calculos.ts`:

### 1. Función `calcularSubtotal`
* **Propósito**: Sumar todos los precios de los artículos registrados en una venta antes de aplicar impuestos.
* **Parámetros**: Recibe un arreglo (array) de números que representan los precios individuales de los productos.
* **Tipo de Retorno**: `number` (un único valor numérico con la suma total).
* **Cómo lo hice**: Utilicé un bucle para recorrer el arreglo e ir acumulando el costo de cada artículo en una variable común, asegurando que el resultado sea exacto y no se altere por valores externos.

### 2. Función `calcularIva`
* **Propósito**: Calcular de manera exacta el valor del Impuesto al Valor Agregado (IVA) correspondiente a la compra.
* **Parámetros**: Recibe un `number` que representa el subtotal obtenido previamente.
* **Tipo de Retorno**: `number` (el valor neto del impuesto).
* **Cómo lo hice**: Multipliqué el subtotal ingresado por la constante `0.12` (que equivale al 12% requerido por la ley comercial). Esta función es completamente independiente para facilitar cambios futuros en la tasa impositiva si fuera necesario.

### 3. Función `calcularTotal`
* **Propósito**: Obtener el monto final que el cliente debe pagar en caja.
* **Parámetros**: Recibe dos valores numéricos: el subtotal de la compra y el IVA calculado.
* **Tipo de Retorno**: `number` (el monto final facturado).
* **Cómo lo hice**: Programé una operación aritmética simple que suma directamente el subtotal y el IVA. El resultado de esta función es el que se le muestra al usuario en el ticket final por consola.

---

## Características del Sistema

* **Entrada de Datos 100% Manual**: Modifiqué la lógica para que el operador de caja tenga el control total de los flujos de venta, pudiendo ingresar los precios uno a uno mediante el teclado.
* **Estructura por Ramas (Git)**: El proyecto sigue un flujo de trabajo profesional, habiendo desarrollado los cambios en mi rama personal, integrándolos en la rama de desarrollo `develop` y consolidando la versión final en `main`.
* **Tipado Estricto**: Implementé tipos de datos específicos de TypeScript en todas mis variables y parámetros para asegurar que la aplicación sea robusta y no procese datos inválidos.

## Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación en cualquier computadora, se deben seguir los siguientes pasos en la terminal:

1. Instalar las dependencias necesarias:
```bash
npm install
