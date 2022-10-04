//SIMULADOR DE COMPRAS DE INSTRUMENTOS


const precioGuitarraElectrica = 70000;
const precioBajo = 40000;

function descuentoEfectivo(precioDescuento){
    let descuentoCash = (precioDescuento) - (precioDescuento * 0.15);
    return descuentoCash;
}

function ivaFactura(precioFactura) {
    let ivaSumado = precioFactura * 1.21;
    return ivaSumado
}



let compra = prompt("Bienvenido!\nPor favor seleccione el instrumento que desea comprar: \n1 - Guitarra Electrica \n2 - Bajo electrico")

if(compra == 1) {
    alert("Usted quiere comprar una guitarra electrica y su precio es: $" +precioGuitarraElectrica)
    let opcion = prompt("Por favor, elija el medio de pago \n1 - Efectivo \n2 - Tarjeta");
    if (opcion == 1) {
        let descuentoGuitarra = precioGuitarraElectrica;
        let descuento = descuentoEfectivo(descuentoGuitarra);
        alert("Usted tiene un descuento del 15% en efectivo y su total a pagar es de $" +descuento+ "\nAl hacerlo por este medio no le emitiremos factura.");
    }else{
        alert("Al pagar con tarjeta usted no cuenta con descuento y el total es $" +precioGuitarraElectrica)
        let opcionFactura = prompt("Desea que su compra sea facturada? Elija la opcion 1 si quiere factura o la opcion 2 si no lo desea. Tenga en cuenta que al facturarse se le debe sumar el IVA al importe original.")
        if (opcionFactura == 1) {
            let facturaGuitarra = precioGuitarraElectrica;
            let ivaGuitarra = ivaFactura(facturaGuitarra);
            alert("El precio de su producto facturado es de: $" +ivaGuitarra+ "\nMuchas gracias por su compra, vuelva pronto.")
        } else {
            alert("Gracias por su compra.")
        }
    
    
    }
    
}else if(compra == 2){
    alert("Usted quiere comprar Bajo y su precio es: $" +precioBajo)
    let opcion = prompt("Por favor, elija el medio de pago \n1 - Efectivo \n2 - Tarjeta");
    if (opcion == 1) {
        let descuentoBajo = precioBajo;
        let descuento = descuentoEfectivo(descuentoBajo);
        alert("Usted tiene un descuento del 15% en efectivo y su total a pagar es de $" +descuento);
    }else{
        alert("Al pagar con tarjeta usted no cuenta con descuento y el total es $" +precioBajo)
        let opcionFactura = prompt("Desea que su compra sea facturada? Elija la opcion 1 si quiere factura o la opcion 2 si no lo desea. Tenga en cuenta que al facturarse se le debe sumar el IVA al importe original.")
        if (opcionFactura == 1) {
            let facturaBajo = precioBajo;
            let ivaBajo = ivaFactura(facturaBajo);
            alert("El precio de su producto facturado es de: $" +ivaBajo+ "\nMuchas gracias por su compra, vuelva pronto.")
        } else {
            alert("Gracias por su compra.")
        }
    }
}else{
    alert("Usted no ha seleccionado nada, por favor recargue la pagina");
}
