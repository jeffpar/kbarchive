---
layout: page
title: "Q223063: FIX: ADO AddNew After Trap for EOF Not Correct w/Data Binding"
permalink: /kb/223/Q223063/
---

## Q223063: FIX: ADO AddNew After Trap for EOF Not Correct w/Data Binding

{% raw %}

	Article: Q223063
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVBp600 kbVS600sp3 kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new row in the EndofRecordset Event of an ADO recordset, the
	first field updated in the recordset will not bind properly with its control.
	The control does not appear to get the new value.
	
	CAUSE
	=====
	
	This problem is caused by the Data Binding Manager not correctly tracking the
	current record in the recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The EndOfRecordset event is raised when there is an attempt to move to a row
	past the end of the recordset. You can add new records to a recordset in the
	EndOfRecordset event. Before EndOfRecordset returns, add your data, then set the
	fMoreData parameter to True to indicate that there is a new end to the
	Recordset.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 6.0.
	
	2. Select the Standard EXE Project.
	
	3. Set the following Project Reference:
	
	  Microsoft ActiveX Data Objects
	
	4. Add the following controls to the default form:
	
	  2 Text boxes
	  1 Command button
	
	5. Paste the following code into the default form:
	
	  Private WithEvents rs As ADODB.Recordset
	  Private counter As Integer
	
	  Private Sub Form_Load()
	     
	     'Create a new empty recordset, with 2 fields    
	     Set rs = New ADODB.Recordset
	      
	     rs.Fields.Append "Field0", adBSTR, 20
	     rs.Fields.Append "Field1", adBSTR, 20
	     rs.Open
	     
	     counter = 0
	     rs.MoveLast
	     
	     'Bind the 2 text boxes to the 2 recordset fields   
	     Text1.DataField = "Field0"
	     Text2.DataField = "Field1"
	     
	     Set Text1.DataSource = rs
	     Set Text2.DataSource = rs
	     
	  End Sub
	
	  Private Sub rs_EndOfRecordset(fMoreData As Boolean, _
	                                adStatus As ADODB.EventStatusEnum, _
	                                ByVal pRecordset As ADODB.Recordset)
	     
	     'The same counter value is assigned to both fields
	     counter = counter + 1
	     pRecordset.AddNew
	     pRecordset(0) = "Field 0 counter: " & CStr(counter)
	     pRecordset(1) = "Field 1 counter: " & CStr(counter)
	     pRecordset.Update
	       
	     'Set fMoreData to True, indicating a new end of the recordset     
	     fMoreData = True
	       
	  End Sub
	     
	  Private Sub Command1_Click()
	       
	      '  Although the same counter is assigned to Field0 and Field1,     
	      '     Text1 lags behind Text2
	      rs.MoveNext   
	       
	  End Sub
	
	6. Run the Project
	
	As you click Command1, note how the Text1 value lags the Text2 value.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Matthew Hofacker, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVBp600 kbVS600sp3 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
