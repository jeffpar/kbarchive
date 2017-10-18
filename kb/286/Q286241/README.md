---
layout: page
title: "Q286241: PRB: Error Saving NULL Value w/ ADODC and Bound Controls"
permalink: kb/286/Q286241/
---

## Q286241: PRB: Error Saving NULL Value w/ ADODC and Bound Controls

	Article: Q286241
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.5 SP1,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbmdac270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.5 SP1, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ActiveX Data Object (ADO) Data Control with a text box that is
	bound to certain data types, such as Integer or Date, you receive the following
	error message:
	
	  Operation was canceled.
	
	The error message occurs when you move to a different record or update the
	record.
	
	CAUSE
	=====
	
	The data control is sending a NULL string to an ADO field that is defined as a
	number or other non-character field.
	
	RESOLUTION
	==========
	
	The following code demonstrates a workaround for the problem. In the WillMove
	event of the ADO Data Control, set the DataChanged property of the text box to
	False, and then assign the value NULL to the field:
	
	  Private Sub Adodc1_WillMove(ByVal adReason As ADODB.EventReasonEnum, adStatus As ADODB.EventStatusEnum, ByVal pRecordset As ADODB.Recordset)
	
	  If txtIntegerField.Text = "" Then
	       If txtIntegerField.DataChanged Then
	            txtIntegerField.DataChanged = False
	            Adodc1.Recordset.Fields("IntegerField") = Null
	       End If
	  End If
	
	  End Sub
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create a new Standard EXE Project. Form1 is created by
	  default.
	
	2. On the Project menu, click Components, and then select Microsoft ADO
	  DataControl 6.0 (OLE DB).
	
	3. Add an ADO Data Control and two TextBox controls to Form1. ADODC1, Text1, and
	  Text2 are created by default.
	
	4. Connect the ADO Data Control to the Employees table in the Nwind.mdb database
	  that comes with Visual Basic by setting the following property values:
	
	  +--------------------------------------------------------------------------------------------------------------------------+
	  | ConnectionString | Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:\Program Files\Microsoft Visual Studio\VB98\NWIND.MDB; | 
	  +--------------------------------------------------------------------------------------------------------------------------+
	  | RecordSource     | Employees                                                                                             | 
	  +--------------------------------------------------------------------------------------------------------------------------+
	
	5. Bind the Text1 TextBox control to the EmployeeID field of the Employees table
	  by setting the following properties:
	
	  +-------------------------+
	  | DataSource | ADODC1     | 
	  +-------------------------+
	  | DataField  | EmployeeID | 
	  +-------------------------+
	
	6. Bind the Text2 TextBox control to the HireDate field of the Employees table
	  by setting the following properties:
	
	  +-----------------------+
	  | DataSource | ADODC1   | 
	  +-----------------------+
	  | DataField  | HireDate | 
	  +-----------------------+
	
	7. Press the F5 key to run the test application, and then delete the value in
	  the text box that contains the HireDate so that the text box is blank. When
	  you attempt to move off the record, note that you receive the following error
	  message:
	
	  Operation was canceled.
	
	8. Click OK to restore the original value.
	
	9. Click the Close button (X) to stop the test application.
	
	10. Open the Code window for the ADO Data Control, and paste the following code
	  into the WillMove event procedure of the ADO Data Control:
	
	     If Text2.Text = "" Then
	       If Text2.DataChanged Then
	            Text2.DataChanged = False
	            Adodc1.Recordset.Fields("HireDate") = Null
	       End If
	  End If
	
	11. Test the application again, and note that you can now delete the HireDate
	  from the text box and reposition it without the error message occurring.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbmdac270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC250SP1 kbMDAC250 kbMDAC260 kbMDAC270
	Version           : :2.5,2.5 SP1,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
