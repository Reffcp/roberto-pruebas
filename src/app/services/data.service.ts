import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Lotes = [
        {
          "nivel": "1",
          "nombre": "AGUACATE",
          "total1": "3,000",
          "total2": "3,000",
          "total3": "3,000",
          "total4": "3,000",
          "totalFinal": "12,000",
          "valvulas": [
            {
              "nivel": "2",
              "nombre": "AGUACATE 19-20",
              "total1": "200",
              "total2": "200",
              "total3": "200",
              "total4": "200",
              "totalFinal": "800",
              "familia": [
                {
                  "nivel": "3",
                  "nombre": "AGROQUIMICOS",
                  "total1": "30",
                  "total2": "30",
                  "total3": "30",
                  "total4": "30",
                  "totalFinal": "120",
                  "subfamilia": [
                    {
                      "nivel": "4",
                      "nombre": "FUNGICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    },
                    {
                      "nivel": "4",
                      "nombre": "HERBICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    }
                  ]
                },
                {
                  "nivel": "3",
                  "nombre": "FERTILIZANTES",
                  "total1": "30",
                  "total2": "30",
                  "total3": "30",
                  "total4": "30",
                  "totalFinal": "120",
                  "subfamilia": [
                    {
                      "nivel": "4",
                      "nombre": "FUNGICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    },
                    {
                      "nivel": "4",
                      "nombre": "HERBICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    }
                  ]
                }
              ]
            },
            { 
              "nivel": "2",
              "nombre": "AGUACATE 20-21",
              "total1": "200",
              "total2": "200",
              "total3": "200",
              "total4": "200",
              "totalFinal": "800",
              "familia": [
                {
                  "nivel": "3",
                  "nombre": "AGROQUIMICOS",
                  "total1": "30",
                  "total2": "30",
                  "total3": "30",
                  "total4": "30",
                  "totalFinal": "120",
                  "subfamilia": [
                    {
                      "nivel": "4",
                      "nombre": "FUNGICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    },
                    {
                      "nivel": "4",
                      "nombre": "HERBICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    }
                  ]
                },
                {
                  "nivel": "3",
                  "nombre": "FERTILIZANTES",
                  "total1": "30",
                  "total2": "30",
                  "total3": "30",
                  "total4": "30",
                  "totalFinal": "120",
                  "subfamilia": [
                    {
                      "nivel": "4",
                      "nombre": "FUNGICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    },
                    {
                      "nivel": "4",
                      "nombre": "HERBICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "nivel": "1",
          "nombre": "BIOPARQUES I 20-21",
          "total1": "3,000",
          "total2": "3,000",
          "total3": "3,000",
          "total4": "3,000",
          "totalFinal": "12,000",
          "valvulas": [
            {
              "nivel": "2",
              "nombre": "BIO I TOMATE BOLA 80 HAS",
              "total1": "200",
              "total2": "200",
              "total3": "200",
              "total4": "200",
              "totalFinal": "800",
              "familia": [
                {
                  "nivel": "3",
                  "nombre": "AGROQUIMICOS",
                  "total1": "30",
                  "total2": "30",
                  "total3": "30",
                  "total4": "30",
                  "totalFinal": "120",
                  "subfamilia": [
                    {
                      "nivel": "4",
                      "nombre": "FUNGICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    },
                    {
                      "nivel": "4",
                      "nombre": "HERBICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    }
                  ]
                },
                {
                  "nivel": "3",
                  "nombre": "FERTILIZANTES",
                  "total1": "30",
                  "total2": "30",
                  "total3": "30",
                  "total4": "30",
                  "totalFinal": "120",
                  "subfamilia": [
                    {
                      "nivel": "4",
                      "nombre": "FUNGICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    },
                    {
                      "nivel": "4",
                      "nombre": "HERBICIDA",
                      "total1": "30",
                      "total2": "30",
                      "total3": "30",
                      "total4": "30",
                      "totalFinal": "120"
                    }
                  ]
                }
              ]
            }
          ]
        }
  ];
  constructor() { }

  getData() {
    return this.Lotes;
  }
}
