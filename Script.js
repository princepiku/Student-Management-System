    var selectedRow = null
    function onFormSubmit()
    {
        if (validate())
        {
            var formData = readFormData();
            if (selectedRow == null) insertNewRecord(formData);
                else
                    updateRecord(formData);
                    resetForm();
        }
    }
    function readFormData()
    {
        var formData = {};
        formData["Fullname"] = document.getElementById("Fullname").value;
        formData["SRNno"] = document.getElementById("SRNno").value;
        formData["Phoneno"] = document.getElementById("Phoneno").value;
        formData["Emailid"] = document.getElementById("Emailid").value;
        return formData;
    }
    function insertNewRecord(data)
    {
        var table = document.getElementById("StudentList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.Fullname;
        cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.SRNno;
        cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.Phoneno;
        cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.Emailid;
        cell4 = newRow.insertCell(4);
            cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    }
    function resetForm()
    {
        document.getElementById("Fullname").value = "";
        document.getElementById("SRNno").value = "";
        document.getElementById("Phoneno").value = "";
        document.getElementById("Emailid").value = "";
        selectedRow = null;
    }
    function onEdit(td)
    {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("Fullname").value = selectedRow.cells[0].innerHTML;
        document.getElementById("SRNno").value = selectedRow.cells[1].innerHTML;
        document.getElementById("phoneno").value = selectedRow.cells[2].innerHTML;
        document.getElementById("Emailid").value = selectedRow.cells[3].innerHTML;
    }
    function updateRecord(formData)
    {
        selectedRow.cells[0].innerHTML = formData.Fullname;
        selectedRow.cells[1].innerHTML = formData.SRNno;
        selectedRow.cells[2].innerHTML = formData.Phoneno;
        selectedRow.cells[3].innerHTML = formData.Emailid;
    }
    function onDelete(td)
    {
        if (confirm('Are you sure to delete this record ?'))
        {
            row = td.parentElement.parentElement; 
            document.getElementById("StudentList").deleteRow(row.rowIndex);
            resetForm();
        }
    }
    function validate()
    {
        isValid = true;
        if (document.getElementById("Fullname").value == "")
        {
            isValid = false;
            document.getElementById("FullnameValidationError").classList.remove("hide");
        }
        else
        {
            isValid = true;
            if (!document.getElementById("FullnameValidationError").classList.contains("hide"))
            document.getElementById("FullnameValidationError").classList.add("hide");
        }
        return isValid;  
    }
