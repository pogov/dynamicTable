import { tableData } from "./data.js";
function tableCreate(data, selector) {
    // const isDataAnArray:boolean = Array.isArray(data);
    // const isdataArrayNotEmpty:boolean = data.length > 0;
    // if(!isDataAnArray) throw new  Error('Provided data must be an array')
    // if(!isdataArrayNotEmpty) throw new Error('No data to populate table');
    const tableContainer = document.querySelector(selector);
    const table = document.createElement("table");
    const tableHead = table.createTHead();
    const tableBody = table.createTBody();
    const sourceObjectForTableHead = data[0];
    function createTableHeadRow(key) {
        const headElement = document.createElement("th");
        headElement.textContent = key;
        return headElement;
    }
    function createTableDataRow(rowData) {
        const row = document.createElement("tr");
        rowData.forEach((rowItem) => {
            const td = document.createElement("td");
            td.textContent = typeof rowItem === "string" ? rowItem : rowItem.toString();
            row.append(td);
        });
        return row;
    }
    Object.keys(sourceObjectForTableHead).forEach((key) => {
        tableHead.append(createTableHeadRow(key));
    });
    data.forEach((dataObject) => {
        const dataObjectValuesArray = Object.values(dataObject);
        tableBody.append(createTableDataRow(dataObjectValuesArray));
    });
    tableContainer.append(table);
}
tableCreate(tableData, '.dynamic-table');
