import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css'],
})
export class ReserverComponent {
  myvar: number = 2;
  onButtonClick() {
    $('#dynamic').append(
      '<span><br><div id="part2"><p style="margin-left:1.5cm; color:greenyellow; font-weight:500; white-space:nowrap;">Informations Passager ' +
        this.myvar +
        ':</p><div class="col-md-12" style="width:9cm;"><p style="color:white; margin-left:1.5cm;">Numéro du passeport</p>'
        +'<input style="width: 75%; padding: 9px 20px;text-align: left; border: 0; outline: 0; border-radius: 6px; background-color: #fff;font-size: 15px;font-weight: 300;color: #8D8D8D; -webkit-transition: all 0.3s ease; transition: all 0.3s ease; margin-top: 10px; margin-left:1.5cm;" class="form-control" type="text" name="pass"  style="color:black;" required></div>'+
        ' <div class="col-md-12" style="width:9cm;">'
        +'<p style="color:white; margin-left:1.5cm;" >Nom</p>'
        +'<input style="width: 75%; padding: 9px 20px;text-align: left; border: 0; outline: 0; border-radius: 6px; background-color: #fff;font-size: 15px;font-weight: 300;color: #8D8D8D; -webkit-transition: all 0.3s ease; transition: all 0.3s ease; margin-top: 10px; margin-left:1.5cm;" class="form-control" type="text" name="lastName"  style="color:black;" required></div>'+
        '<div class="col-md-12" style="width:9cm;"><p style="color:white; margin-left:1.5cm;">Prénom</p>'
        +'<input style="width: 75%; padding: 9px 20px;text-align: left; border: 0; outline: 0; border-radius: 6px; background-color: #fff;font-size: 15px;font-weight: 300;color: #8D8D8D; -webkit-transition: all 0.3s ease; transition: all 0.3s ease; margin-top: 10px; margin-left:1.5cm;" class="form-control" type="text" name="firstName" style="color:black;" required></div>'
        +'<div class="col-md-12">'+
                                    '<p>Date de naissance</p>'+
                                    '<input class="form-control" type="date" name="bithday" style="color:black;" required>'+
                               ' </d<div class="col-md-12">'
                                  +  '<p>Date de naissance</p>'+
                                   ' <input class="form-control" type="date" name="bithday" style="color:black;" required>'+
                                '</div>'+
                                '<div class="col-md-12">'+
                                        '<p>Nationnalité:</p> '+
                                       '<select class="selectpicker countrypicker"  style="color: black; width:7.8cm;">'+
                                           '<option>AUS</option>'+
                                            '<option>BE</option>'+
                                            '<option>BG</option>'+
                                            '<option>HR</option>'+
                                           '<option>CY</option>'+
                                            '<option>CZ</option>'+
                                            '<option>DK</option>'+
                                            '<option>EE</option>'+
                                            '<option>FR</option>'+
                                            '<option>GR</option>'+
                                            '<option>HU</option>'+
                                            '<option>IT</option>'+
                                            '<option>LV</option>'+
                                            '<option>MA</option>'+
                                            '<option>MEX</option>'+
                                            '<option>POR</option>'+
                                            '<option>SP</option>'+
                                            '<option>US</option>'+
                                        '</select>'+
                                    '</div>'+
                                    '<div class="col-md-12 mt-3">'+
                                    '<p style="color:white; ">Classe: </p>'+
                                    '<input type="radio" class="btn-check" name="classe" id="Economique" autocomplete="off" style="color:black;" value="Economique" required>'+
                                    '<label class="btn btn-sm btn-outline-secondary" >Economique</label>'+
                                    '<input type="radio" class="btn-check" name="classe" id="Premium" autocomplete="off" style="color:black;" value="Premium" required>'+
                                    '<label class="btn btn-sm btn-outline-secondary" >Premium</label>'+
                                    '<input type="radio" class="btn-check" name="classe" id="Business" autocomplete="off" style="color:black;"  value="Business" required>'+
                                    '<label class="btn btn-sm btn-outline-secondary" >Business</label>'+
                                
                            '</div>   '             
    
        +'<div class="col-md-12" style="width:9cm;"><p style="color:white; margin-left:1.5cm;">Numéro de téléphone</p><input style="width: 75%; padding: 9px 20px;text-align: left; border: 0; outline: 0; border-radius: 6px; background-color: #fff;font-size: 15px;font-weight: 300;color: #8D8D8D; -webkit-transition: all 0.3s ease; transition: all 0.3s ease; margin-top: 10px; margin-left:1.5cm;" class="form-control" type="text" name="telephone" placeholder="Ex: +212 xx xx xx" style="color:black;" required></div><div class="col-md-12" style="width:9cm;"><p style="color:white; margin-left:1.5cm;">Adresse Email</p> <input style="width: 75%; padding: 9px 20px;text-align: left; border: 0; outline: 0; border-radius: 6px; background-color: #fff;font-size: 15px;font-weight: 300;color: #8D8D8D; -webkit-transition: all 0.3s ease; transition: all 0.3s ease; margin-top: 10px; margin-left:1.5cm;" class="form-control" type="text" name="email" placeholder="Ex: xxxx@xx.net" style="color:black;" required></div><div style="margin-left:1.5cm; color: white;" class="col-md-12 mt-3"><p style="color:white; ">Classe: </p><input type="radio" class="btn-check" name="classe" id="Economique" autocomplete="off" style="color:black;" value="Economique" required><label class="btn btn-sm btn-outline-secondary" >Economique</label><input type="radio" class="btn-check" name="classe" id="Premium" autocomplete="off" style="color:black;" value="Premium" required>  <label class="btn btn-sm btn-outline-secondary" >Premium</label><input type="radio" class="btn-check" name="classe" id="Business" autocomplete="off" style="color:black;"  value="Business" required> <label class="btn btn-sm btn-outline-secondary" >Business</label></div><br><a (click)="Remove()" style="color:red; margin-left:1.5cm;"   id="remove_passager" ><i class="fa fa-plus"></i> Supprimer ce passager</a> <br> </div></span>'
    );
    this.myvar++;
    $(document).on('click', '#remove_passager', function () {
      $(this).parents('span').remove();
      this.myvar--;
    });
  }

  /* 
//<button style=" border:0px; border-radius: 5px; background-color: #006dcb; font-size:large; font-weight:600; color:white; width: 3cm; height:1.3cm;" (click)="printPage()" >Print</button>  
printPage(){
 
    // Get the header and footer elements
    const header = document.getElementsByTagName('app-aside-fix')[0] as HTMLElement;
    const button = document.getElementsByTagName('button')[1] as HTMLElement;

    // Set the display property of the header and footer to none
    header.style.display = 'none';
    button.style.display = 'none';
   
   
   
  
    // Open the print preview dialog
    window.print();
   
    // Set the display property of the header and footer back to block after printing
    header.style.display = 'block';
    button.style.display = 'block';
    
  }*/
}
