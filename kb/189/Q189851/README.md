---
layout: page
title: "Q189851: PRB: &quot;This Action was Cancelled by an Associated Object.(3426)&quot;"
permalink: /kb/189/Q189851/
---

## Q189851: PRB: &quot;This Action was Cancelled by an Associated Object.(3426)&quot;

	Article: Q189851
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article discusses the error message "This action was cancelled by an
	associated object." that Visual Basic generates when working with Access
	databases and the Data control. This article does not apply to the ADO data
	control.
	
	CAUSE
	=====
	
	This error is being generated because the AddNew command of a bound recordset
	causes Visual Basic to try to save the current record if the data has changed.
	Because the data control is currently pointing to a NULL record and not an empty
	record, the data cannot be saved so the "action was cancelled by an associated
	object" error is reported. This is commonly seen when using the data form wizard
	in Visual Basic versions 4.0 and 5.0. The data form wizard in Visual Basic 6.0
	generates code for the ADO data control so this error is less likely to occur.
	
	RESOLUTION
	==========
	
	Check the underlying recordset to see if either the BOF or EOF properties are
	True before allowing an implicit save to occur. An implicit save occurs either
	when using the data control to navigate off of a record where the information
	has changed or adding a record to a bound recordset.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add the following controls to Form1:
	
	     Control Type        Control Name         Caption
	     ------------        ------------         -------
	     Data                datDataCtl
	     Text Box            txtCategory
	     Command Button      cmdAddNew            Add
	     Command Button      cmdMoveVeryLast      Move Very Last
	
	3. Cut and paste the following code into the code window of the form:
	
	        Option Explicit
	
	        Private Sub cmdAddNew_Click()
	
	            'Uncomment this block to avoid 3426 error message
	            ' Check to see you are on NULL Pointer
	            'If datDataCtl.Recordset.EOF Or datDataCtl.Recordset.BOF Then
	
	                'Dim strBuffer As String
	
	                ' Save what was typed into the text box into memory
	                'strBuffer = txtCategory.Text
	
	                ' Restore text box value to the original record contents
	                ' in this case, that is NULL
	                'datDataCtl.UpdateControls
	
	                ' Add a new blank record
	                'datDataCtl.Recordset.AddNew
	
	                ' Restore what has been typed from memory to text box
	                'txtCategory.Text = strBuffer
	
	                ' Save the current record we are on and Add a new blank
	                ' record
	                'datDataCtl.Recordset.AddNew
	
	            'End If
	
	            ' be sure to comment below line when uncommenting above block of
	            ' code to avoid an additional record added to the recordset.
	            datDataCtl.Recordset.AddNew
	
	        End Sub
	
	        Private Sub cmdMoveVeryLast_Click()
	
	          If Not (datDataCtl.Recordset.BOF Or datDataCtl.Recordset.EOF) Then
	            datDataCtl.Recordset.MoveLast
	            datDataCtl.Recordset.MoveNext
	          End If
	
	        End Sub
	
	        Private Sub Form_Load()
	
	            With datDataCtl
	              .DatabaseName = App.Path & "\NWIND.MDB"
	              .RecordSource = "Categories"
	            End With
	
	            txtCategory.DataField = "CategoryName"
	
	        End Sub
	
	4. While in the form's design view, set txtCategory's DataSource property equal
	  to datDataCtl.
	
	5. Run the form. To reproduce the data, click on the Move Very Last
	  CommanButton, type any data into the text box, and then click on the Add
	  CommandButton.
	
	6. Note error: uncomment the above code sample to avoid the error.
	
	Additional query words: kbVBp kbVBp500 kbVBp600 kbdss kbDSupport kbVBp400 kbDatabase kbDAO
	
	======================================================================
	Keywords          : kbGrpDSVB kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
