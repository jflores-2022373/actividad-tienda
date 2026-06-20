# Sistema de Facturación y Control de Caja Interactivo

Este es mi proyecto de sistema de facturación desarrollado en TypeScript y Node.js. La aplicación funciona de manera interactiva a través de la terminal de comandos para simular el proceso de cobro en una caja registradora, aplicando el cálculo del Impuesto al Valor Agregado (IVA) del 12% sobre las compras de forma automatizada y modular.

## Estructura de mi Proyecto

Organicé mi código siguiendo principios de modularidad para separar la lógica de los cálculos matemáticos de la interacción con el usuario en la consola:

* **src/calculos.ts**: En este archivo guardo mis funciones puras de procesamiento numérico (`calcularSubtotal`, `calcularIva`, `calcularTotal`). No realizan impresiones en pantalla para que puedan ser reutilizadas en el futuro.
* **src/main.ts**: Es el controlador principal. Aquí manejo el ciclo del menú de opciones y capturo las entradas de texto del usuario utilizando la librería `readline-sync`.

## Características del Sistema

* **Entrada de Datos 100% Manual**: Modifiqué la lógica para que el operador de caja tenga el control total de los flujos de venta, pudiendo ingresar los precios uno a uno mediante el teclado.
* **Estructura por Ramas (Git)**: El proyecto sigue un flujo de trabajo profesional, habiendo desarrollado los cambios en mi rama personal, integrándolos en la rama de desarrollo `develop` y consolidando la versión final en `main`.
* **Tipado Estricto**: Implementé tipos de datos específicos de TypeScript en todas mis variables y parámetros para asegurar que la aplicación sea robusta y no procese datos inválidos.

## Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación en cualquier computadora, se deben seguir los siguientes pasos en la terminal:

1. Instalar las dependencias necesarias:
```bash
npm install
