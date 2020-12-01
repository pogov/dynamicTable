import { tableData } from "./data.js";

// const emptyArr: Data[] = []

interface Data {
  _id: string;
  name: string;
  age: number;
  gender: string;
  company: string;
  email: string;
  phone: string;
  tags: string[];
}

type RowItemElement = string|number;

function tableCreate(data: Data[], selector:string):void {
  
  // const isDataAnArray:boolean = Array.isArray(data);
  // const isdataArrayNotEmpty:boolean = data.length > 0;

  // if(!isDataAnArray) throw new  Error('Provided data must be an array')
  // if(!isdataArrayNotEmpty) throw new Error('No data to populate table');

  const tableContainer:Element = document.querySelector(selector)!;
  const table: HTMLTableElement = document.createElement("table");
  const tableHead: HTMLTableSectionElement = table.createTHead();
  const tableBody:HTMLTableSectionElement = table.createTBody();
  const sourceObjectForTableHead: Data = data[0];

  function createTableHeadRow(key: string):HTMLTableHeaderCellElement {
    const headElement:HTMLTableHeaderCellElement = document.createElement("th");
    headElement.textContent = key;
    return headElement;
  }

  function createTableDataRow(rowData: RowItemElement[]): HTMLTableRowElement {
    const row:HTMLTableRowElement = document.createElement("tr");
    rowData.forEach((rowItem: RowItemElement) => {
      const td:HTMLTableDataCellElement = document.createElement("td");
      td.textContent = typeof rowItem === "string" ? rowItem : rowItem.toString();
      row.append(td);
    });
    return row;
  }

  Object.keys(sourceObjectForTableHead).forEach((key: string) => {
    tableHead.append(createTableHeadRow(key));
  });

  data.forEach((dataObject: Data) => {
    const dataObjectValuesArray = Object.values(dataObject);
    tableBody.append(createTableDataRow(dataObjectValuesArray));
  });

  tableContainer.append(table);
}

function init(){
  const btn: HTMLElement = document.getElementById('initBtn')!;
  btn.addEventListener('click', () => {
    tableCreate(tableData, '.dynamic-table')
    btn.setAttribute('disabled', 'true');
})
}

init();