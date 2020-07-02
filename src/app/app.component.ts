import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
// const mammoth = require("mammoth");
import * as mammoth from 'mammoth';
import * as process from 'process';
window['process'] = process;

import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,  AfterViewInit {
  title = 'word2html';
  docxData;
 
  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.docxToHtml();
    // (document.querySelector('p')).style.fontSize = '50px';
    // (document.querySelectorAll('p')).forEach(pp => {
    //   pp.style.fontSize = '21px';
    // })

  }
  
 
  ngAfterViewInit() {
 
    setTimeout(() => {

      // const toc = document.querySelector('.toc');
      // (document.querySelectorAll('h3')).forEach(h => {
      //   const newHeader = document.createElement("li");
      //   newHeader.innerText = h.innerText;
      //   newHeader.style.color = 'blue';
      //   toc.appendChild(newHeader);
      // });


      (document.querySelectorAll('h1')).forEach(header => {
        header.style.fontSize = '26px';
        header.style.color = 'red';
      });

      (document.querySelectorAll('h2')).forEach(header => {
        header.style.fontSize = '18px';
        header.style.color = 'orange';
      });

      (document.querySelectorAll('h3')).forEach(header => {
        header.style.fontSize = '16px';
        header.style.color = 'yellow';
      });

      (document.querySelectorAll('p')).forEach(header => {
        header.style.fontSize = '12px';
        header.style.color = '#000';
      });

      (document.querySelectorAll('td')).forEach(td => {
        td.style.border = '2px solid #ddd';
      });




    }, 1000);

    




  }

  docxToHtml() {
    this.http.get('../assets/c120.docx', {responseType: 'arraybuffer'}).subscribe(response => {
      mammoth.convertToHtml({arrayBuffer: response})
        .then(result => {
          this.docxData = result.value;
        }).done();
      }); 
  }

}
