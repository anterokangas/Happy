
    // function getPrice(text, startingString=":", endingString="€") {
    //     /*
    //      * Return float value between starting and ending strings
    //      * Notice: the first ending striung bust be after the last starting string
    //      */
    //     let start = text.lastIndexOf(startingString) + 1
    //     let end = text.indexOf(endingString) - 1
    //     if (start > -1 && end > start) {
    //         text = text.substring(start, end)
    //     }
    //     return parseFloat(text.trim())
    // }

    // function sumUp(name) {
    //     /*
    //      * Sum values having name attribute name
    //      */
    //     let list = document.getElementsByName(name)
    //     let sum = 0
    //     for (let i=0; i <list.length; i++) {
    //         if (list[i].type == "checkbox" && list[i].checked || list[i].type !="checkbox") { 
    //             sum += getPrice(list[i].value)
    //         }
    //     }
    //     return sum
    // }

    // function sumGroupAndTrig(name, id) {
    //     /*
    //      * sum values having name attribute name and trig onchange event for element-id id
    //      */
    //     let sum = sumUp(name)
    //     let destination = document.getElementById(id)
    //     destination.value = sum
    //     destination.onchange()
    // }

    // function multiply(numberId, priceId) {
    //     /*
    //      * count total price (= number times price per piece)
    //      */
    //     let number = document.getElementById(numberId).value
    //     let price = getPrice(document.getElementById(priceId).innerHTML)
    //     return number * price
    // }
    
    function makeHappening(happening) {
        let html = ""
        let theHappening = happenings[happening]
        html += "<h1>" + theProduct.title + "</h1>\n"

        return html
    }
   
    /*
    var uniqueValue = 0

    function getUniqueValue(width=10) {
        let theValue = uniqueValue
        uniqueValue++
        return String(theValue).padStart(width, '0')
    }

    function makeProduct(product) {
        let productSection = "<"

    }

    function makeProductHeader(product) {
        let header = "<th>\n"
    }
    */
    function makeProductRow(product) {
        alert("makeProductRow: product="+product)
        let theProduct = products[product]
        return 
        
        // selectable properties
        
        let name = product + " " + getUniqueValue
        for (let icell=0; icell < theProduct.properties.length; icell++) {
            let property = theProduct.properties[icell]
            let values = theProduct[property]
            alert("icell=" icell+" property="+property+"values")
            values.push("")
            let id = product + " " + property + " " + getUniqueValue
            row += "<td>\n"
            row += "<select name=\"" + name + "\" required>\n"
            for (let ivalue=0; values.length; ivalue++) {
                row += "<option value=\"" + values[i] + "\">" + values[i] + "</option>\n"
            }
            row += "</select>\n"
            row += "</td>\n"     
        }
        return "<tr>/n" + row + "</tr>\n"
        // number
        row += "<td>\n"
        let id = product + " " + number + " " + getUniqueValue
        row += "<input type=\"number \"\n" +
               "       id=\"" + id + "\"\n" +
               "       value=\"0\"\n" +
               "       min=\"0\"/>\n" 
        row += "</td>\n"
        // subprice
        
        row += "<td>\n"
        let id = product + " " + subprice + " " + getUniqueValue
        row += "<input type=\"number \"\n" +
               "       id=\"" + id + "\"\n" +
               "       readonly />\n"
        row += "</td>\n"

        //add-button
        row += "<td>\n"
        let id = product + " " + add + " " + getUniqueValue
        row += "<button id=\"" + id + "\">+</button\n"
        row += "</td>\n"

        //add-button
        row += "<td>\n"
        id = product + " " + remove + " " + getUniqueValue
        row += "<button id=\"" + id + "\">-</button\n"
        row += "</td>\n"
        row += "</tr>\n"
        return row
    }
