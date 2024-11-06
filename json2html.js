

export default function json2html(data) {
    
    let html = '<table data-user="prachijangra.pshi8@gmail.com">';
    
 
    html += '<thead><tr>';
    html += '<th>Name</th><th>Age</th><th>Gender</th>';
    html += '</tr></thead>';
    
  
    html += '<tbody>';
    
    
    data.forEach(item => {
      html += '<tr>';
      html += `<td>${item.Name || ''}</td>`;
      html += `<td>${item.Age || ''}</td>`;
      html += `<td>${item.Gender || ''}</td>`;
      html += '</tr>';
    });
    
   
    html += '</tbody></table>';
    
    return html;
  }
  