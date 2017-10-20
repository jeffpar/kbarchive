---
layout: page
title: "Q216666: PRB: DataBound Controls Not Refreshed With DataEnvironment"
permalink: /kb/216/Q216666/
---

## Q216666: PRB: DataBound Controls Not Refreshed With DataEnvironment

{% raw %}

	Article: Q216666
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDataBinding kbVBp600 kbDataEnv
	Last Modified: 16-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DataCombo and DataGrid controls are not refreshed when using the Refresh
	method. This behavior is exhibited when using the DataEnvironment.
	
	RESOLUTION
	==========
	
	There are several workarounds. One is to use the ADO Data Control instead of the
	DataEnvironment. Another is to rebind the controls to the DataEnvironment.
	
	The following code rebinds the controls. Replace the code in the Refresh Click
	event in the Steps to Reproduce Behavior section with the following:
	
	  Set DataGrid1.DataSource = DataEnvironment1
	  Set DataCombo1.DataSource = DataEnvironment1
	  Set DataCombo1.RowSource = DataEnvironment1
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When running an application and then adding or updating data, the user may want
	to see the changes reflected in the DataCombo. However, when using the
	DataEnvironment, these changes are not seen without re-binding the control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE Project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, select Add Data Environment.
	
	3. Alternate-click Connection1 and choose Properties. Select Microsoft Jet 3.51
	  OLE DB Provider, click Next, and choose the Nwind.mdb database. Click OK.
	
	4. Alternate-click Connection1, and select Add Command. Next, alternate-click
	  Command1 and select Properties. In the Database Object drop-down box, select
	  Table, and, under Object name, select Customers. Click OK and the
	  DataEnvironment is created.
	
	5. From the Project/Components menu, add the Microsoft DataGrid Control 6.0 and
	  the Microsoft DataList Controls 6.0.
	
	6. On Form1, place a DataCombo control, a DataGrid control, and a Command
	  Button. Rename the command button Refresh.
	
	7. Set the DataSource and RowSource properties of the DataCombo to
	  DataEnvironment1. Set the RowMember to Command1, and ListField property to
	  CustomerID.
	
	8. Set the DataGrid Datasource to DataEnvironment1 and the DataMember to
	  Command1. In the Refresh command button Click event, place the following
	  code:
	
	  ' Updates the recordset with the added data.
	    DataEnvironment1.rscommand1.Requery
	
	  ' Supposed to Refresh new data in the Datagrid
	    DataGrid1.Refresh
	
	  ' Should have updated the Combobox with the new data
	    DataCombo1.ReFill
	    DataCombo1.Refresh
	
	9. Press the F5 key to run the code and look at the data in both the DataGrid
	  and DataCombo. Pause the code and open the Nwind.mdb Customers table in
	  Access and add a new CustomerID "ZZZZZ." Close the table and resume running
	  the application in Visual Basic. Click the Refresh button to update, and note
	  the DataGrid and the DataCombo do not show the new record.
	
	REFERENCES
	==========
	
	For additional information about binding data controls, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q191457 PRB: DataEnvironment Recordset Requery Does Not Refresh Controls
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDataBinding kbVBp600 kbDataEnv 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
