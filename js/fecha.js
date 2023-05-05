var DiaD = "Domingo"
var DiaL = "Lunes"
var DiaM = "Martes"
var DiaMi = "Miercoles"
var DiaJ = "Jueves"
var DiaV = "Viernes"
var DiaS = "Sabado"
var Anio = prompt("Ingresa el Año: ")
var Mes = prompt("Ingresa el Mes del Año: ")
var Dia = prompt("Ingresa el Dia del Mes: ")
var Fecha = `${Mes}` + " " + `${Dia}` + " " + `${Anio}`
document.write(Fecha)
alert(Fecha)
var Xmas95 = new Date(Fecha);
var weekday = Xmas95.getDay();
switch (weekday) {
    case 0: // Sunday
    console.log(DiaD);
    document.write( " " + DiaD)
    CalcularDiaLaborable()
    break;
    case 1: // Monday
    console.log(DiaL);
    document.write(  " " + DiaL)
    CalcularDiaLaborable()
    break;
    case 2: // Tuesday
    console.log( " " + DiaM);
    document.write(DiaM)
    CalcularDiaLaborable()
    break;
    case 3: // Wend
    console.log( DiaMi);
    document.write(" " + DiaMi)
    CalcularDiaLaborable()
    break;
    case 4: // Sunday
    console.log(DiaJ);
    document.write( " " + DiaJ)
    CalcularDiaLaborable()
    break;
    case 5: // Sunday
    console.log(DiaV);
    document.write( " " + DiaV)
    CalcularDiaLaborable()
    break;
    case 6: // Sunday
    console.log(DiaS);
    document.write( " " + DiaS)
    CalcularDiaLaborable()
    break;
    default:
        console.log("Dato Incorecto");
}
 function CalcularDiaLaborable(){
    if (weekday == 0 || weekday == 6){
        alert(`Los dias ${DiaD} y ${DiaS} no se trabaja`)
    }else{
        alert("Hoy si se Trabaja, que lastima por ti")
    }
 }
 