---
layout: page
title: "Q140899: BUG: GPF When RecordSource Property is Blank at Design-Time"
permalink: kb/140/Q140899/
---

## Q140899: BUG: GPF When RecordSource Property is Blank at Design-Time

	Article: Q140899
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A data control causes an application error at runtime if the data control
	contains with a blank RecordSource property at design time and the
	UpdateControls method is executed. The application error ends Visual Basic.
	
	WORKAROUND
	==========
	
	To work around this bug, at design time, set the data control's DatabaseName
	property to a database and the RecordSource property to a table in the database.
	Other controls that are bound to the data control, such as a text box, should
	also have a value in the control's DataSource property
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic 4.0, or if it is already running, click New Project on the
	  File menu.
	
	2. Add a data control to the Form1 form but don't set any of the data control's
	  properties.
	
	3. Copy the following code sample to the Form1 code window:
	
	        Private Sub Form_Click()
	           Data1.updatecontrols
	        End Sub
	
	4. Press the F5 key or click Start on the Run menu to start the program.
	
	5. Click on the form. The application error occurs with one of the following
	  error messages and Visual Basic ends.
	
	
	  32-bit edition of Visual Basic 4.0:
	
	  
	
	  
	
	     Windows NT: An application error has occurred and an application
	                 error log is being generated. VB32.exe, Exception: Access
	                 violation (0xc0000005), Address: 0x0047929e
	
	  
	
	     Windows 95: VB32 caused an invalid page fault in module VB32.EXE at
	                 0137:0047929e.
	
	  
	
	     16-bit edition of Visual Basic 4.0 in all operation systems:
	                 VB caused a general protection fault in module VB.EXE at
	                 0028:000026b9.
	
	Additional query words: kbVBp400bug kbDSupport
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
