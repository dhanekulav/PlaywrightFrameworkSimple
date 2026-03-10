import * as XLSX from 'xlsx';
import * as path from 'path';

export function readExcelData(filePath: string, sheetName: string): any[] {
  const absolutePath = path.resolve(filePath);
  const workbook = XLSX.readFile(absolutePath);
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}