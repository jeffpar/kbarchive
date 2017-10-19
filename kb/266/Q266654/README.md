---
layout: page
title: "Q266654: HOWTO: Implement Dynamic Search Functionality to Locate Records"
permalink: /kb/266/Q266654/
---

## Q266654: HOWTO: Implement Dynamic Search Functionality to Locate Records

	Article: Q266654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,2.1 SP1,2.1 SP2,2.5,6.0
	Operating System(s): 
	Keyword(s): kbADO210 kbVBp kbVBp600 kbGrpDSVBDB kbADO250 kbMDAC260 kbADO260 kbATM kbmdac270 kbado27
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many Visual Basic database applications require that you locate record(s) that
	match a specified criteria in a DataGrid control that is bound to a large
	ActiveX Data Objects (ADO) recordset. To simplify the process of scrolling
	through the grid to locate the necessary record(s), you can sort the bound
	recordset by a lookup field rather than searching through an unsorted
	recordset.
	
	A more sophisticated method to address this requirement is to dynamically
	restrict the records that are displayed in the bound DataGrid to those records
	that contain a lookup value that the user types for a chosen filter column in
	the recordset. The code sample in this article demonstrates how to enforce a
	filter on the recordset to restrict the records according to this method.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	This example uses the data from the SQL Server PUBS sample database. You can also
	bind the DataGrid to a recordset based on one of your own databases if SQL
	Server is not installed or if you do not have the PUBS sample database.
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Reference, and then click "Microsoft ActiveX
	  Data Objects Library".
	
	3. From the Project menu, click Components. Add the ADO DataControl control and
	  the OLE DB DataGrid control to the toolbox.
	
	4. Drag a TextBox control, an OLE DB DataGrid, and an ADO DataControl, and drop
	  these controls onto Form1.
	
	5. Set the properties of the ADO DataControl to bind it to the Authors table in
	  the SQL Server PUBS sample database.
	
	6. Set the properties of the OLE DB DataGrid to bind it to the ADO DataControl,
	  and size it to display no more than five records at a time.
	
	7. Set the Text property of the TextBox to a blank string, and name the control
	  "txtLName" (without the quotation marks).
	
	  NOTE This example uses the au_lname column in the Authors table as the lookup
	  field to locate matching records in the DataGrid. At run time, the user can
	  type a lookup value for the au_lname column in the TextBox. As the user types
	  a string of characters to specify an author's last name, this value is used
	  to dynamically filter and display the matching records in the DataGrid. Each
	  key stroke is trapped and used to construct a string, which is used as the
	  filter pattern to locate matching records.
	
	8. To implement this functionality, copy and paste the following code in the
	  Change event of txtLName:
	
	  Dim mname As String
	  mname = Trim(txtLName.Text)
	  If mname <> "" Then
	      Adodc1.Recordset.Filter = "au_lname like '" & mname & "%'"
	  Else
	      Adodc1.Recordset.Filter = "au_lname <> '123'"
	  End If
	
	9. Save the project. Press the F5 key to run the project. Initially, all the
	  records in the Authors table are displayed in the DataGrid.
	
	10. To test the dynamic search functionality, type a string of characters into
	  the TextBox txtLName to locate matching records. As you type each character,
	  the grid is updated to display only the records whose au_lname begins with
	  the string that you type in the TextBox.
	
	A string pattern that does not have any matching records results in a blank grid.
	If an entry is blank in the TextBox, the grid is restored to its initial state,
	which displays all the records in the Authors table. Notice the filter criterion
	that is used to restore the grid to its initial state. The adFilterNone constant
	is not used because the OLE DB DataGrid does not refresh correctly when one of
	the ADO FilterGroupEnum constants are specified as the filter criteria for the
	bound recordset. For additional information about this limitation of the
	DataGrid control, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q191919 BUG: DataGrid Doesn't Handle Special Filter Constants Correctly
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO210 kbVBp kbVBp600 kbGrpDSVBDB kbADO250 kbMDAC260 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.1,2.1 SP1,2.1 SP2,2.5,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
