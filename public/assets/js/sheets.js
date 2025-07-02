// src/sheets.js

// TODO: Replace with your actual Sheet ID and API key
const SHEET_ID = '1Jc6DreVMpsJkkNY3tc9MboKnQI1srysTA2Ku39y2XLs';
const API_KEY = 'AIzaSyDJCnWlqV4MXAfBAVDO1jF3wI_Ygysvyr0';
const RANGE = 'A3:B'; // Adjust as needed

export async function fetchSalesData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch sales data');
  const data = await res.json();
  return data.values || [];
}

// Fetch users from the 'usuarios' sheet
export async function fetchUsers() {
  const userRange = 'usuarios!A2:B';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${userRange}?key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch users');
  const data = await res.json();
  // data.values is an array of [username, password]
  return (data.values || []).map(([username, password]) => ({ username, password }));
} 