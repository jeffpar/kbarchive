---
layout: page
title: "Q257947: PRB: Runtime Error 7 : Out of Memory Error Message"
permalink: /kb/257/Q257947/
---

## Q257947: PRB: Runtime Error 7 : Out of Memory Error Message

	Article: Q257947
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB
	Last Modified: 24-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to access the BoundText property of a Data Combo control in Visual
	Basic code after you scroll down the list of elements in its list portion until
	the currently selected element is no longer visible in the list, the following
	error message is displayed:
	
	  Runtime Error '7': Out of Memory
	
	CAUSE
	=====
	
	The cause of this behavior is unknown.
	
	RESOLUTION
	==========
	
	Write code in the Click event of the Data Combo to store the value of the its
	BoundText property in a form-level variable. Use the form-level variable to
	access the value of the Data Combo's BoundText property.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps reproduce this error:
	
	1. Open a new Data project in Visual Basic. Drag-and-drop a Data Combo control,
	  two ADO Data controls, and a CommandButton onto the form that is added to the
	  project (frmDataEnv).
	
	2. Set the Style property of the Data Combo to one of the following:
	
	   - dbcDropdownCombo
	   - dbcDropdownList
	
	3. Set the ConnectionString property of the first ADO Data control (ADODC1) to
	  connect to the Nwind.mdb database that is located in the Visual Basic 98
	  folder. Specify the Products table in the Nwind.mdb database as its
	  RecordSource.
	
	4. Set the ConnectionString property of the second ADO Data control (ADODC2) to
	  also connect to the Nwind.mdb database that is located in the Visual Basic 98
	  folder. Specify the Suppliers table in the Nwind.mdb database as its
	  RecordSource.
	
	5. Set the following properties of the Data combo as specified below:
	
	   - DataSource - ADODC1
	   - DataField - SupplierID
	   - RowSource - ADODC2
	   - ListField - CompanyName
	   - BoundColumn - SupplierID
	
	6. Cut-and-paste the following line of code into the Click event of the
	  CommandButton:
	
	     MsgBox DataCombo1.BoundText
	
	7. Save and run the Visual Basic project, and note that the Data Combo displays
	  a List of CompanyNames from the Suppliers table.
	
	8. Click the drop-down button on the Data Combo to display the list portion of
	  the control, and then scroll down the list of items by using the vertical
	  scroll bar until the currently selected element in the Data Combo is no
	  longer visible in the elements that are displayed in the list portion of the
	  control.
	
	9. Click the CommandButton, and note that this collapses the list portion of the
	  Data Combo control and generates the run-time error message noted in the
	  "Summary" section of this article. Stop the execution of the project and
	  return to the Visual Basic environment.
	
	10. Declare a string variable by the name of BoundText in the form's General
	  Declarations section. Cut-and-paste the following line of code in the Click
	  event procedure of the Data Combo:
	
	      BoundText = DataCombo1.BoundText
	
	11. Modify the MsgBox statement in the Click event procedure of the Command
	  Button to display the value of the BoundText variable instead of the
	  BoundText property of the Data Combo.
	
	12. Repeat steps 8 through 11, and note that the error message does not occur
	  and that the value of the variable that is displayed reflects the value in
	  the BoundText property of the Data Combo control.
	
	Additional query words: DataGrid Runtime 7
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4
	Version           : :6.0,6.0 SP3,6.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
