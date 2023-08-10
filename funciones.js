let i=1
var total_acumulado=0
var ok1=0
var ok2=0
var ok_column1=0

let identificadorTiempoDeEspera;

const costo_acumulado=[]

function ver_precio() {
   var seleccion_material = document.getElementById("sel_materiales");
   var valor_hoja = seleccion_material.options[seleccion_material.selectedIndex].value;
   document.getElementById("preciohoja").value=valor_hoja
}

function precio_transporte() {
   var seleccion_transporte = document.getElementById("sel_transporte");
   let valor_transporte = Number(seleccion_transporte.options[seleccion_transporte.selectedIndex].value);
   document.getElementById("preciotransporte").value=Number(valor_transporte)
}

function obtener_presupuesto(){
   
   if(document.getElementById("ancho_pieza1").value>0 & document.getElementById("largo_pieza1").value>0)
   {
      if(ok1==0)
      {
        var seleccion_material = document.getElementById("sel_materiales");
        var valor_hoja = seleccion_material.options[seleccion_material.selectedIndex].value;

        var ancho_pieza1 = parseFloat(document.getElementById("ancho_pieza1").value)
        var largo_pieza1 = parseFloat(document.getElementById("largo_pieza1").value)
        var area_pieza= ancho_pieza1*largo_pieza1

        const area_hoja=29768
        var costo_pieza=((area_pieza*valor_hoja)/area_hoja)*1.25
        var piezas_hoja= area_hoja/area_pieza

        document.getElementById("areapieza").value = area_pieza
        document.getElementById("preciopieza").value =costo_pieza.toFixed(2)
        document.getElementById("piezasporhoja").value = Math.floor(piezas_hoja)

        total_acumulado=Number(costo_pieza.toFixed(2));
        document.getElementById("total").value=total_acumulado.toFixed(2);
        document.getElementById("total_venta2").value=(total_acumulado.toFixed(2))*2;
   
        let cambiar_class_colum1 = document.getElementById("uno");
        cambiar_class_colum1.className = "uno-ok";
   
        ok1=1
        ok_column1=1
      }
      else alert("Si desea recalcular seleccione *Limpiar todo*")
}
else alert("Introduce los valores solicitados")
}

function obtener_presupuesto2(){
if(document.getElementById("minutos_corte").value>0 & document.getElementById("mano_obra").value>0)
{
   if(ok_column1==1)
   {
   if(ok2==0)
   {
     var uso_hfresa = document.getElementById("tipo_fresa");
     var valor_uso_fresa = uso_hfresa.options[uso_hfresa.selectedIndex].value;
     var uso__fresa=parseFloat((valor_uso_fresa*document.getElementById("minutos_corte").value)/600)
     document.getElementById("muso_fresa").value=uso__fresa

     var seleccion_transporte = document.getElementById("sel_transporte");
     let valor_transporte = Number(seleccion_transporte.options[seleccion_transporte.selectedIndex].value);

     var manos_obras=parseFloat(document.getElementById("mano_obra").value)
     var comisiones_ventas=parseFloat(document.getElementById("comision_venta").value)

     total_acumulado=total_acumulado+comisiones_ventas+manos_obras+uso__fresa+valor_transporte
     document.getElementById("total").value=total_acumulado.toFixed(2)
     document.getElementById("total_venta2").value=(total_acumulado.toFixed(2))*2;

     let cambiar_class_colum2 = document.getElementById("dos");
     cambiar_class_colum2.className = "dos-ok";

     ok2=1
   }
   else alert("Si desea recalcular seleccione *Limpiar todo*")
   }
   else alert("Ingrese primero los valores de la primera columna")
}
else alert("Introduce los valores solicitados")
}

function limpiar_all(){ location.reload(); }

function funcionConRetraso() {
     cambiar_class_colum3 = document.getElementById("tres");
     cambiar_class_colum3.className = "tres";
      }

function temporizadorDeRetraso() {
      identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 100);
      }

function guardar(){
   if(ok1==1 & ok2==1)
   {

    var descripcion = document.getElementById("descripcion").value;
    var cantidad = document.getElementById("cantidad").value;
    var unidad = document.getElementById("unidad").value;
    var costo = document.getElementById("costo").value;
    
    if(document.getElementById("descripcion").value!="" & document.getElementById("cantidad").value!="" & document.getElementById("unidad").value!="" & document.getElementById("costo").value!="")
    {
        var fila="<tr><td id=\"descripcion"+i+"\">"+descripcion+"</td><td id=\"cantidad"+i+"\">"+cantidad+"</td><td id=\"unidad"+i+"\">"+unidad+"</td><td id=\"costo"+i+"\">$"+costo+"</td></tr>";
      
        costo_acumulado[i]=Number(costo)
  
        var iniciar_tabla = document.createElement("tr");
        iniciar_tabla.innerHTML=fila;

        document.getElementById("tabla_dinamica").appendChild( iniciar_tabla);
      
        total_acumulado=total_acumulado+costo_acumulado[i]
        document.getElementById("total").value=total_acumulado.toFixed(2)
        document.getElementById("total_venta2").value=(total_acumulado.toFixed(2))*2;

        let cambiar_class_colum3 = document.getElementById("tres");
        cambiar_class_colum3.className = "tres-ok";
        i=i+1

        temporizadorDeRetraso();
    }
    else alert("Introduce los valores solicitados")
  }
  else alert("Introduce los valores solicitados en las dos primeras secciones")
  }