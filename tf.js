function addRow()
{
    
    var ename = document.getElementById('ename').value;
     var Position = document.getElementById('Position').value;
      var eid = document.getElementById('eid').value;
      
      
      var table = document.getElementsByTagName('table')[0];
      
      
      var newRow = table.insertRow(1);
      
     
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      
      
      cel1.innerHTML = ename;
      cel2.innerHTML = Position;
      cel3.innerHTML = eid;
}