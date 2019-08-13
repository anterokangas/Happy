
   

var happenings = {
    "": {
        "title": "Valitse tapahtuma",
        "description": ""
    },
    "Vuosijuhla": {
        "title": "TTOT:n 35-vuotisjuhla 30.4.2018",
        "description": "TTOT:n 35-vuotisjuhla"
    },
    "Lavatanssikurssi": {
        "title": "Lavatanssikurssi 15.10.2018",
        "description": "Fusku, hidas foksi ja rumba"
    },
    "Kevätkonsertti": {
        "title": "TTOT:n Kevätkonsertti 2019 - ilmoita ryhmäsi esiintyjäksi",
        "description": "Tanssiryhmien esiintyminen Sampolassa"
    },
    "Tanssimylly": {
        "title": "Tanssimylly - ilmoittaudu TTOT:n talkoolaiseksi",
        "description": "Nuoriseurat ry:n tanssitapahtuma Tampereella"
    },
    "Lohjan Purpuri": {
        "title": "Lohjan Purpuri - ilmoittaudu TTOT:n esiintyvään ryhmään",
        "description": "SKY:n ja KTNL:n kesäjuhlat 2019"
    },
    "Rieväkylän Rimppa": {
        "title": "Rieväkylän Rimppa - SKY:n kesajuhla 2015",
        "description": "SKY:n ja KTNL:n kesäjuhla Tampereella 2015<br>Osallistujan ilmoittautuminen", 
        "subtotal": "Välisumma",
        "total": "Kaikki yhteensä",
        "parts": [
            {"header": "Henkilötiedot",
                "products": [
                {"name": "Etunimi",
                "type": "text",
                "required": true},
                {"name": "Sukunimi",
                "type": "text",
                "required": true},
                {"name": "Puhelin",
                "type": "text",
                "required": true},
                {"name": "Sähköposti",
                "type": "email",
                "required": true},
                ]
            },
            {"header": "Ilmoittautumistiedot",
                "products": [
                {"name": "Yhdistys",
                    "type": "select",
                    "required": true,
                    "properties": [
                        "Ahjolan Tanhuajat",
                        "Helsingin Pitäjän Tanhuujat",
                        "Nokian Kansantanssin Ystävät",
                        "Tampereen Työväenopiston Tanhuajat",
                    ],
                    "extra": "onchange=\"makeChoices('selectGroups', this.value, groups, 'required')\"",
                    "comment": "Jos yhdistyksesi ei ole luettelossa, pyydä ryhmäsi vetäjää luomaan sellainen"
                },
                {"name": "Ryhmä",
                "type": "div",
                "required": true,
                "id": "selectGroups",
                "initial": "<p>Valitse ensin ryhmä</p>",
                "comment": "Jos ryhmäsi ei ole luettelossa, pyydä ryhmäsi vetäjää luomaan sellainen"
                }, 
                {"name": "Missä rool(e)issa osallistut",
                "type": "checkbox",
                "required": true,
                "properties": [
                    "Tanssija",
                    "Soittaja", 
                    "Ohjaaja", 
                    "Ryhmän yhteyshenkilö", 
                    "Muu"
                    ]
                },
                {"name": "Osallistun",
                    "type": "checkbox",
                    "properties": [
                    "Kulkueeseen",
                    "Kenttäohjelmaan"       
                    ]
                },
                {"name": "Osallistumismaksu",
                    "type": "subtotal",
                    "value": 80
                }, 
                ]
            },
            {"header": "Majoitus",
            "subtotal": "Majoitus yhteensä",
            "products": [
                {"name": "Valitse majoitustapasi",
                    "type": "radio",
                    "required": true,
                    "properties": [
                    "Koulumajoitus pe/la, la/su: 25 €",
                    "Koulumajoitus la/su: 20 €",
                    "Matkailuauto- tai matkailuvaunupaikka: 15 €",
                    "Järjestän itse majoitukseni: 0 €"
                    ]
                },
                {"name": "Majoitus yhteensä",
                    "type": "subtotal",
                    "value": 0
                }, 
             ]
            },
            {"header": "Ruokailu",
                "subtotal": "Ruokailu yhteensä",
                "products": [
                {"name": "Valitse ateriasi",
                    "type": "checkbox",
                    "properties": [
                    "Pe-iltapala: 5 €",
                    "La-aamupala: 7 €",                 
                    "La-lounas: 7 €",
                    "La-päivällinen: 10 €",
                    "La-iltapala: 5 €",
                    "Su-aamupala: 7 €",
                    "Su-lounas: 7 €",
                    ]
                },
                {"name": "Ruokailu yhteensä",
                    "type": "subtotal",
                    "value": 0
                }, 
                {"name": "Erityisruokavaliosi",
                    "type": "checkbox",
                    "properties": [
                    "Vähälaktoositon",
                    "Maidoton",
                    "Vilja-allergia"
                    ],
                    "comment": "Huom! Erityisruokavaliotietoasi käytetään vain erityisaterioiden tilaamiseksi. Henkilökohtaisia erityisruokavaliotietojasi ei välitetä eteenpäin."
                },
                {"name": "Henkilökohtainen erityisruokavaliosi",
                 "type": "textarea",
                 "rows": 3,
                 "cols": 72,
                 "comment": " Huom! Jos ilmoitat henkilökohtaisen ruokavaliosi, niin valitsemiesi ruokailujen yheydessä järjestetään sinulle nimelle varustettu ateria."
                }                   
                ]
            },
            {"header": "Aktiviteetit",
             "subtotal": "Aktiviteetit yhteensä",
             "products": [
                {"name": "Valitse aktiviteetit",
                 "type": "checkbox",
                 "properties": [
                    "Pe-pelimannitanssit: 5 €",
                    "La-Kansantanssikonsertti: 10 €",
                    "La-Opastettu puistokierros: 0 €",
                 ]
                },
                {"name": "Aktiviteetit yhteensä",
                 "type": "subtotal",
                 "value": 0
                }
                ],
            },
            {"header": "Ostokset",
             "subtotal": "Ostokset yhteensä",
             "products": [
                 {"name": "Pinssi: 5 €",
                  "type": "number",
                  "min": 0
                 },
                 {"name": "Juomapullo: 10 €",
                  "type": "number"
                 },
                 {"name": "Huivi: 15 €",
                  "type": "number"
                 },
                 {"name": "Ostokset yhteensä",
                  "type": "subtotal",
                  "value": 0
                 }
             ]
            }
        ]
    }
}
/*

                {"Ostokset": {       
                    "products": [
                        {"name": "Tapahtumapinssi",
                        "type": "number",
                        "min": 0,
                        "desc": "Metallia, emalipainatus, halkaisija 2,00 cm, tapahtuman logo ja päivämäärä",
                        "properties": ["Kappalehinta: 3 €, anna lukumäärä"],
                        },
                        {"name": "Naisten T-paita",
                        "type": "table",
                        "desc": "Elastaania, pyöreä kaula-aukko, ladyfit, tapahtuman logo hihassa",
                        "properties": ["Kappalehinta: 20 €"],
                        "cells": ["Väri", "Koko"],
                        "Väri": ["Punainen", "Vihreä", "Sininen", "Musta", "Pinkki", "Valkoinen"],
                        "Koko": ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
                        },
                        {"name":"Suora T-paita",
                        "type": "table",
                        "desc": "100 % puuvillaa, pyöreä kaula-aukko, suora unisex-malli, tapahtuman logo hihassa",
                        "properties": ["Kappalehinta: 20 €"],
                        "cells": ["Väri", "Koko"],
                        "Väri": ["Punainen", "Vihreä", "Sininen", "Musta"],
                        "Koko": ["S", "M", "L", "XL", "XXL"],
                        }
                    ]}
                }
            ]
        }
    ]
*/


var groups = {
    "Ahjolan Tanhuajat": ["Maanantai", "Tiistai", "Bygarit"],
    "Tampereen Työväenopiston Tanhuajat": ["Maanantai", "Tiistai", "Seniorit", "Torstai"]
   }

function makeChoices(target, selected, choices, extra="") {
    html = "<select " + extra + ">\n"
    if (choices[selected]) {
        for (let option of choices[selected]) {
            html += "<option value=\"" + option + "\">" + option + "</option>\n"
        }
    } else {
        html += "<option value=\"" + selected + "\">\n" + selected + "</option>\n"
    }
    html += "</select>\n"
    document.getElementById(target).innerHTML = html
}   

function printHappenings() {
    alert("printHappenings")
    let text = "##########\n"
    for (let key in happenings) {
        alert("-->happening.key="+key)
        happening = happenings[key]
        text += happening + ": " + printHappening(happening)
    }
    return text
}

function printHappening(happening) {
    let text = "*********\n"
    for (let key in happening) {
        alert("-->happening.key="+key)
        if (key != "parts") {
            text += key + ": " + happening[key] + "\n"
        } else {
            let parts = happening["parts"]
            text += key + ": " + printParts(parts)
        }
    }
    return text
}

function printParts(parts) {
    let text = "========"
    for (let part of parts) {
        text += "   " + printPart(part)
    }
    return text
}

function printPart(part) {
    let text = "+++++++"
    for (let key in part) {
        if (key != "products") {
            text += "      " + key + ": " + part[key] + "\n"
        } else {
            let products = part["products"]
            text += "      " + key + ": " + printProducts(products)
        }
    }
    return text
}

function printProducts(products) {
    let text = "------"
    for (let product of products) {
        text += "         " + printProduct(product)
    }
    return text
}

function printProduct(product) {
    let text = "......."
    for (let key in product) {
        text += key + ": " + product[key] + "\n"
    }
    return text
}

function makeHappenings(happenings=happenings, target="happening") {
    let html = ""
    html += "<select onchange=\"html=makeHappening(this.value);\n"
    html += "                  document.getElementById('" + target + "').innerHTML=html\"\n"
    html += "        required\n"
    html += ">\n"
    for (let happening in happenings) {
        html += "    <option value=\"" + happening +"\">" + happenings[happening].title + "</option>\n"
    }
    html += "</select>\n"
    return html
}

function makeHappening(happeningTitle) {
    let happening = happenings[happeningTitle]
    let html = "<h1>" + happeningTitle + "</h1>\n"
    for (let key in happening) {
        if (key == "description") {
            html += "<h2>" + happening[key] + "</h2>\n"
        } else if (key == "total") {
            // skip
        } else if (key == "subtotal") {
            // skip
        } else if (key == "textarea") {
            // skip
        } else if (key != "parts") {
            html += "<h2>" + key + ": " + happening[key] + "</h2>\n"
        } else if (key != "total") {
            let parts = happening["parts"]
            html += makeParts(parts, happening)
        }
    }
    if (happening.total) {
        html += "<h3>" + happening.total +" <input type=\"number\" readonly"
        html += " id=\"" + happening.total +"\""
        html += " value=\"0\"/> €"
        html += "<h3></br />"
    }
    return html
}

function makeParts(parts, happening) {
    let html = ""
    for (let part of parts) {
        html += "<fieldset>\n"
        html += makePart(part, parts, happening)
        html += "</fieldset><br />\n"
    }
    return html
}

function makePart(part, parts, happening) {
    let html = ""
    for (let key in part) {
        if (key == "header") {
            html = "<legend>" + part[key] + "</legend>\n"
        } else if (key == "subtotal") {
            // skip, used in the end of the part
        } else if (key != "products") {
            html += "<h3>" + key + ": " + part[key] + "</h3>\n"
        } else {
            let products = part["products"]
            html += makeProducts(products, part, parts, happening)
        }
    }
    return html
}

function makeProducts(products, part, parts, happening) {  
    let html = ""
    let i = 0
    for (let product of products) {
        html += makeProduct(i++, product, products, part, parts, happening)
    }
    return html
}


function makeProduct(i, product, products, part, parts, happening) {
    let html = ""
    html += "<div class=\"form-group\">"
    switch (product.type) {
        case "checkbox":
        case "radio":
        case "textarea":
        //case "subtotal":
        if (i > 0) {
            html += "<br />"
        }
    }
    /*
     * CReate label before product
     */
    switch (product.type) {
        case "subtotal":
            break
        case "number": //number of products to order
            if (i > 0) {
                html += "<br />"
            }  
        default:
            html += "<label class=\"large-label\" for=\"" + product.name +"\">"
            html += product.name
            html += "</label>\n" 
            if (product.required) {
                html += "<span class=\"required\">*</span>\n"
            }
    }
    html += "<br />\n"
    
    switch (product.type) {
        case "text":
        case "email":
            html += makeText(product)
            break
        case "number":
            html += makeNumber(product, products, part, parts, happening)
            break
            
        case "select":
            html += makeSelect(product)
            break

        case "div":
            html += makeDiv(product)
            break
            
        case "checkbox":
            html += makeCheckbox(product, products, part, parts, happening)
            break
        case "subtotal":
            html += makeSubtotal(product, products, part, parts, happening)
            break
        case "radio":
            html += makeRadio(product, part)
            break
        case "textarea":
            html += makeTextarea(product)
            break
        default:
            html += "<p>" + product.name + "</p>\n"
    }
    if (product.comment) {
        html += "<br>" + product.comment + "<br><br>\n"
    }
    html += "</div>"
    return html
}

function makeText(product) {
    let html = ""
    
    html += "<input type=\"" + product.type + "\"\n"
    html += "       id=\"" + product.name + "\"\n" 
    html += "       name=\"data[" + product.name + "]\"\n" 
    if (product.required) {
        html += "       required\n"
    }
    html += "       class=\"form-control\"\n"
    html += "</input>\n"
    
    return html
}

function makeNumber(product, products, part, parts, happening) {
    let html = ""
    html += "<span>Lukumäärä: </span>\n"
    html += "<input type=\"" + product.type + "\"\n"
    html += "       id=\"" + product.name + "Number\"\n"
    html += "       onchange=\"let price = getPrice('" + product.name + "');\n"
    html += "                 let orderPrice = price * this.value;\n"
    html += "                 document.getElementById('" + product.name + "OrderPrice').value=orderPrice;\n"
    html += "                 document.getElementById('" + product.name + "OrderPrice').onchange();\n"
    
    
    html += "                 \"\n"

    if (!product.min) {
        product.min = 0
    }
    html += "       min=\"" + product.min +"\"\n"
    
    if (product.required) {
        html += "       required\n"
    }
    html += "       class=\"form-control\"\n"
    html += "/>\n"

    html += "<span> yhteensä: </span>\n"
    html += "<input type=\"number\"\n"
    html += "       id=\"" + product.name + "OrderPrice\"\n"
    html += "       name=\"" + part.subtotal + "\"\n"
    html += "       readonly\n"
    
    html += "       onchange=\"sumGroupAndTrig(this.name, '" + part.subtotal + "')\"\n"
    html += "value=\"" + "0" + "\"\n"
    html += "/> €"
    return html
}

function makeSelect(product) {
    let html = ""
    
    html += "<select name=\"" + product.name + "\"\n"
            
    if (product.required) {
        html += "       required\n"
    }
    if (product.extra) {
        html += "       " + product.extra + "\n"
    }
    html += ">\n"
    product.properties.unshift("")
    for (let property of product.properties) {
        html += "<option value=\"" 
        html += property 
        html += "\">"
        html += property
        html += "</option>\n"
    }
    html += "</select>\n"
    return html
}

function makeDiv(product) {
    let html = ""
    html += "<div "
    if (product.id) {
        html += "id=\"" + product.id + "\""
    }
    html += ">\n"
    if (product.initial) {
        html += product.initial
    }
    html += "</div>\n"
    return html
}

function makeCheckbox(product, products, part, parts, happening) {
    let html = ""
    for (let property of product.properties) {                
        html += "<input type=\"checkbox\"\n"
        html += "       name=\"" + product.name + "\"\n"
        if (product.required) {
            html += "       required\n"
        }
        if (part.subtotal) {
            html += "      onchange=\"sumGroupAndTrig(this.name, '" + part.subtotal + "');\"\n"
        }
        html += "       value=\"" + property +"\">\n"  
        html += property + "<br />\n"
        
    }
    return html
}

function makeSubtotal(product, products, part, parts, happening) {
    let html = ""
    html += "<h4>"
    html += product.name + ": "
    html += "<input type=\"number\"\n"
    html += "       id=\"" + part.header + " yhteensä\"\n"
    html += "       name=\"subtotal\"\n"
    html += "       readonly\n"
    html += "       onchange=\"sumGroupAndTrig(this.name, '" 
            + happening.total + "')\"\n"
    html += "value=\"" + product.value + "\"> €"
    html += "</h4>\n"
    return html
}

function makeRadio(product, part) {
    let html = ""
    for (let property of product.properties) {
        html += "<input type=\"radio\"\n"
        html += "       name=\"" + product.name + "\"\n"
        if (product.required) {
            html += "       required\n"
        }
        if (part.subtotal) {
            html += updateSubtotal(part)
        }
        html += "       value=\"" + property +"\">\n"  
        html += property + "<br />\n"
    }
    return html
}

function makeTextarea(product) {
    let html = ""
    html += "<textarea name=\"" + product.name + "\"\n"
    if (product.rows) {
        html += "          rows=\"" + product.rows + "\"\n"
    }
    if (product.cols) {
        html += "          cols=\"" + product.cols + "\"\n"
    }
    html += ">\n"
    html += "</textarea>\n" 
    return html
}

function updateSubtotal(part) {
    let html = ""
    html += "       onchange=\""
    html += "document.getElementById('" + part.subtotal + "').value=getPrice(this.value);\n"
    html += "document.getElementById('" + part.subtotal + "').onchange()\n"
    html += "\"\n"
    return html
}

function getPrice(text, startingString=":", endingString="€") {
    /*
     * Return float value between starting and ending strings
     * Notice: the first ending striung bust be after the last starting string
     */
    let start = text.lastIndexOf(startingString) + 1
    let end = text.indexOf(endingString) - 1
    let subText = ""
    if (start > -1 && end > start) {
        subText = text.substring(start, end)
    } else {
        subText = text
    }
    let price = parseFloat(subText.trim())
    if (isNaN(price)) {
        price = 0
    }
    return price
}

function sumUp(name) {
    /*
     * Sum values having name attribute name
     */
    let list = document.getElementsByName(name)
    let sum = 0
    for (let i=0; i <list.length; i++) {
        if (list[i].type == "checkbox" && list[i].checked || list[i].type !="checkbox") { 
            sum += getPrice(list[i].value)
        }
    }
    return sum
}

function sumGroupAndTrig(name, id) {
    /*
     * sum values having name attribute name and trig onchange event for element-id id
     */
    let sum = sumUp(name)
    let destination = document.getElementById(id)
    destination.value = sum
    destination.onchange()
}

function multiply(numberId, priceId) {
    /*
     * count total price (= number times price per piece)
     */
    let number = document.getElementById(numberId).value
    let price = getPrice(document.getElementById(priceId).innerHTML)
    return number * price
}

/*

             
*/
