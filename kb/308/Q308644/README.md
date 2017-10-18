---
layout: page
title: "Q308644: BUG: Memory Leak When You Bind Recordset to VB Intrinsic Control"
permalink: kb/308/Q308644/
---

## Q308644: BUG: Memory Leak When You Bind Recordset to VB Intrinsic Control

	Article: Q308644
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Visual Basic application includes Visual Basic intrinsic controls (such
	as TextBox controls) on the form, when the code repeatedly binds a Recordset
	object to the control with the DataSource property of the control, you may
	notice that memory usage grows while the application runs.
	
	CAUSE
	=====
	
	This problem occurs because the Recordset object is not released even if you set
	DataSource to Nothing.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time  Version      Size     File name
	  ----------------------------------------------------
	  25-Sep-2001 8:03  6.0.93.63    1.33 MB  MSVBVM60.dll  
	  25-Sep-2001 8:03  6.0.93.63    1.79 MB  VB6.exe 
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE application in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click References. Select the "Microsoft ActiveX Data
	  Objects 2.x Library" check box, and then click OK.
	
	3. Place a TextBox control and a CommandButton control on Form1. Keep the
	  default names for these two controls.
	
	4. Add the following code to the code window of Form1:
	
	  Option Explicit
	
	  Private mRecordset  As ADODB.Recordset
	
	  Private Sub ClearDataSource()
	      Text1.DataField = vbNullString
	      Set Text1.DataSource = Nothing
	      Set mRecordset = Nothing
	  End Sub
	
	  Private Sub Command1_Click()
	
	      Dim lOffset As Integer
	      
	      For lOffset = 1 To 100 Step 1
	          ClearDataSource
	          CreateADO
	          Text1.DataField = "firstname"
	          Set Text1.DataSource = mRecordset
	      Next lOffset
	  End Sub
	
	  Private Sub CreateADO()
	      Set mRecordset = New Recordset
	      mRecordset.CursorLocation = adUseClient
	      mRecordset.LockType = adLockBatchOptimistic
	      Set mRecordset.ActiveConnection = Nothing
	
	      mRecordset.Fields.Append "firstname", adVarChar, 10
	      mRecordset.Open 
	      mRecordset.AddNew
	      mRecordset(0) = "Joe"
	      mRecordset.MoveFirst
	  End Sub
	
	5. Build and run the application.
	
	6. Click the command button repeatedly. Use Performance Monitor or Task Manager
	  to monitor the memory usage.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
