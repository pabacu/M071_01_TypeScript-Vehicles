"use strict";
var mycar = new Array();
function createCar(form) {
    var elements = form.elements;
    var plate;
    var color;
    var brand;
    if (elements) {
        plate = elements.car_plate.value;
        color = elements.car_color.value;
        brand = elements.car_brand.value;
        mycar.push(new Car(plate, color, brand));
        if (mycar) {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
        }
    }
}
function createWheels(form) {
    var elements = form.elements;
    var idx;
    var htmlobj;
    if (mycar) {
        idx = mycar.length - 1;
        if (elements) {
            var r = 0; //wheel number error
            var msg_err = '';
            // Iterate over the form controls
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].nodeName === "INPUT" && elements[i].getAttribute("type") === "number") {
                    r++;
                    var value = elements[i].value;
                    //check validate  0.4 <> 2
                    if (parseFloat(value) >= 0.4 && parseFloat(value) <= 2)
                        true;
                    else
                        msg_err = msg_err + "El diámetro de la rueda " + r + " no es correcto." + "\r\n";
                }
            }
            if (msg_err != '') {
                alert(msg_err);
                return;
            }
            //are valid? (continue)
            mycar[idx].addWheel(new Wheel(parseInt(elements.car_dr1.value), elements.car_mr1.value));
            mycar[idx].addWheel(new Wheel(parseInt(elements.car_dr2.value), elements.car_mr2.value));
            mycar[idx].addWheel(new Wheel(parseInt(elements.car_dr3.value), elements.car_mr3.value));
            mycar[idx].addWheel(new Wheel(parseInt(elements.car_dr4.value), elements.car_mr4.value));
        }
        var info_1 = document.getElementById('carInfo');
        if (info_1)
            htmlobj = '';
        idx = 0;
        mycar.forEach(function (car_element) {
            idx++;
            if (idx == mycar.length) {
                //set last focus on last car added
                htmlobj = htmlobj + "<div style='background-color: lightgray;'>";
            }
            htmlobj = htmlobj + "<b>Car " + (idx) + ": </b><br/> "
                + " Plate: " + car_element.plate + "   "
                + " Brand: " + car_element.brand + "  "
                + " Color: " + car_element.color + "   "
                + "<BR/><BR/>"
                + "<b> Wheels: </b><BR/>";
            var txtwheels = "";
            var txtbrands = "";
            var i = 1;
            car_element.wheels.forEach(function (element) {
                txtwheels = txtwheels + "Wheel " + i + ":        " + element.brand + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                txtbrands = txtbrands + "DLC diameter " + i + ": " + element.diameter + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                i++;
            });
            htmlobj = htmlobj
                + txtwheels + "<BR/>"
                + txtbrands;
            if (idx == mycar.length) {
                htmlobj = htmlobj + "</div>";
            }
            htmlobj = htmlobj + "<hr>";
            if (info_1) {
                info_1.innerHTML = htmlobj;
            }
        });
        document.getElementById('step2').style.display = 'none';
        document.getElementById('btnrestart').classList.add('d-block');
        document.getElementById('btnrestart').classList.remove('d-none');
    }
}
function restart() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('carInfo').innerHTML = '';
    document.getElementById('btnrestart').classList.remove('d-block');
    document.getElementById('btnrestart').classList.add('d-none');
    document.getElementById('formCar').reset();
    document.getElementById('formCar').classList.remove('was-validated');
    document.getElementById('carWheels').reset();
    document.getElementById('carWheels').classList.remove('was-validated');
}
