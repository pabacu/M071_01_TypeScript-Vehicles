var mycar: Car[] = new Array();

interface FormCar extends HTMLFormElement {
    car_plate: HTMLInputElement;
    car_brand: HTMLInputElement;
    car_color: HTMLInputElement;
}

interface FormWheels extends HTMLFormElement {
    car_mr1: HTMLInputElement;
    car_dr1: HTMLInputElement;
    car_mr2: HTMLInputElement;
    car_dr2: HTMLInputElement;
    car_mr3: HTMLInputElement;
    car_dr3: HTMLInputElement;
    car_mr4: HTMLInputElement;
    car_dr4: HTMLInputElement;
}

function createCar(form: HTMLFormElement) {
    var elements: FormCar = <FormCar>(<any>form.elements);
    let plate: string;
    let color: string;
    let brand: string;

    if (elements) {
        plate = elements.car_plate.value;
        color = elements.car_color.value;
        brand = elements.car_brand.value;

        mycar.push(new Car(plate, color, brand));

        if (mycar) {
            (document.getElementById('step1') as HTMLDivElement).style.display = 'none';
            (document.getElementById('step2') as HTMLDivElement).style.display = 'block';

        }

    }
}


function createWheels(form: HTMLFormElement) {
    var elements: FormWheels = <FormWheels>(<any>form.elements);
    let idx: number;
    let htmlobj: string;

    if (mycar) {
        idx = mycar.length - 1;
        if (elements) {
            let r = 0; //wheel number error
            let msg_err = '';


            // Iterate over the form controls
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].nodeName === "INPUT" && elements[i].getAttribute("type") === "number") {
                    r++;
                    var value = (<HTMLInputElement>elements[i]).value;
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

        let info = document.getElementById('carInfo');
        if (info)
            htmlobj = '';
        idx = 0;
        mycar.forEach(car_element => {
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

            let txtwheels = "";
            let txtbrands = "";
            let i = 1;
            car_element.wheels.forEach(element => {
                txtwheels = txtwheels + "Wheel " + i + ":        " + element.brand + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                txtbrands = txtbrands + "DLC diameter " + i + ": " + element.diameter + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                i++;
            });
            htmlobj = htmlobj
                + txtwheels + "<BR/>"
                + txtbrands;

            if (idx == mycar.length) {
                htmlobj = htmlobj + "</div>";
            }

            htmlobj = htmlobj + "<hr>";
            if (info) {
                info.innerHTML = htmlobj;
            }
        });
        (document.getElementById('step2') as HTMLDivElement).style.display = 'none';
        (document.getElementById('btnrestart') as HTMLButtonElement).classList.add('d-block');
        (document.getElementById('btnrestart') as HTMLButtonElement).classList.remove('d-none');
    }
}

function restart() {
    (document.getElementById('step1') as HTMLDivElement).style.display = 'block';
    (document.getElementById('step2') as HTMLDivElement).style.display = 'none';
    (document.getElementById('carInfo') as HTMLDivElement).innerHTML = '';
    (document.getElementById('btnrestart') as HTMLButtonElement).classList.remove('d-block');
    (document.getElementById('btnrestart') as HTMLButtonElement).classList.add('d-none');
    (document.getElementById('formCar') as HTMLFormElement).reset();
    (document.getElementById('formCar') as HTMLFormElement).classList.remove('was-validated');
    (document.getElementById('carWheels') as HTMLFormElement).reset();
    (document.getElementById('carWheels') as HTMLFormElement).classList.remove('was-validated');

}


