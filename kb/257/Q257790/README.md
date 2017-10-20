---
layout: page
title: "Q257790: BUG: CancelUpdate After AddNew Causes Error If Datatype Invalid"
permalink: /kb/257/Q257790/
---

## Q257790: BUG: CancelUpdate After AddNew Causes Error If Datatype Invalid

{% raw %}

	Article: Q257790
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbVS600sp4bug kbMDAC260 kbATM kbm
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3 
	- ActiveX Data Objects (ADO), versions 2.0, 2.01, 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add a new record to an ADO recordset by calling the AddNew method, enter
	data of an invalid datatype in a control bound to this recordset, and then
	cancel the change by calling the CancelUpdate method, the CancelUpdate method
	appears to generate an error due to the invalid datatype, and displays the
	following run-time error message if you are using ADO 2.1 SP2 or earlier:
	
	  Run-time error '-2147217842 (80040e4e)':
	
	  The change was canceled during notification; no columns are changed
	
	If you are using ADO 2.5, then the error message may look like this:
	
	  Run-time error '-2147217842 (80040e4e)':
	
	  Operation was canceled.
	
	This data validation makes sense when calling the Update method, but should not
	occur when canceling any changes that have been made.
	
	RESOLUTION
	==========
	
	To work around this problem, make sure that you enter a valid datatype. For
	example, using the above-mentioned sample, this unexpected validation error
	occurs when a string value is entered in a bound control where the underlying
	database is expecting a numeric value. To work around the error, you only need
	to check and fix the values that are entered in controls that are bound to
	numeric fields. The simplest approach is use the IsNumeric function to check the
	value that is entered in the control and, if the result is False, change the
	string in the control to a number. Because the record is not saved, the number
	that is chosen is not important.
	
	To implement this workaround in the Visual Basic project that is described in the
	"Symptoms" section, add the following code to the CancelUpdate command button's
	Click procedure as follows:
	
	  Private Sub Command2_Click()
	    If Not IsNumeric(Text1.Text) Then
	      Text1.Text = 0   'Zero
	    End If
	    Adodc1.Recordset.CancelUpdate
	  End Sub
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This bug can be reproduced by following these steps:
	
	1. Open a new Visual Basic Standard EXE project and set a Reference to the
	  Microsoft ActiveX Data Objects library.
	
	2. Place an ADO Data control on the form, enter connection information for the
	  sample Northwind database (located by default in the Visual Basic 98 folder
	  as NWIND.MDB), and select the Orders table as its RecordSource property.
	
	3. Place a TextBox control on the form, set its DataSource to the ADO Data
	  control, and then select the numeric Freight field as the DataField property.
	
	4. Place a Command button on the form and enter the following line of code in
	  its click event:
	
	  ADODC1.Recordset.AddNew
	
	5. Place another Command button on the form and enter the following line of code
	  in its click event:
	
	  ADODC1.Recordset.CancelUpdate
	
	6. Run the project.
	
	7. Click the AddNew command button and enter a character (string) value in the
	  Freight textbox.
	
	8. Click the CancelUpdate command button and note that you see one of the the
	  error messages described in the "Symptoms" section.
	
	If you follow the same steps and enter a numeric value in the field, the error
	message does not appear, indicating that the data entered is being validated in
	spite of the fact that the update has been canceled.
	
	
	Additional query words: sp4 error -2147217842 (80040e4e)
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbVS600sp4bug kbMDAC260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO201 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbADO270
	Version           : :2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0,6.0 SP3
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
