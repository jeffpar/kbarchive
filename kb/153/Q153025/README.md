---
layout: page
title: "Q153025: FIX: Microsoft Excel 95 Doesn't Respond Correctly to GetObject"
permalink: /kb/153/Q153025/
---

## Q153025: FIX: Microsoft Excel 95 Doesn't Respond Correctly to GetObject

	Article: Q153025
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Excel for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use the GetObject function to return a reference to a running
	instance of Microsoft Excel 95 results in the error 429:
	
	  "OLE Automation server can't create object."
	
	The identical code works correctly with a running instance of Microsoft Excel
	5.0.
	
	CAUSE
	=====
	
	Microsoft Excel 95 fails to correctly register itself in the Running Object
	Table. The GetObject function can be used with the correct syntax to obtain a
	currently running instance of Microsoft Excel 95 for use with OLE automation.
	
	Microsoft Excel 95 requires one additional step to ensure that it will respond to
	the OLE request. The code outlined below uses the SendMessage API to tell
	Microsoft Excel 95 to listen for requests for objects.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Add a single code module to the current project. Alternatively, if a code
	  module already exists, it can be used instead.
	
	2. Add the following code to the code module referred to in step 1: Const
	  WM_USER = 1024
	
	        Declare Function FindWindow Lib "user32" Alias "FindWindowA"_
	        (ByVal lpClassName As String, ByVal lpWindowName As Long) As Long
	        Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	        (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, _
	        lParam As Long)
	        As Long
	
	        Sub WakeExcel()
	             Dim hwnd As Long
	
	             hwnd = FindWindow("XLMAIN", 0)
	             If hwnd = 0 Then
	                'no instances running
	                Exit Sub
	             End If
	             SendMessage hwnd, WM_USER + 18, 0, 0
	        End Sub
	
	3. Add a call to the WakeExcel function so that it is called after a user may
	  have started Microsoft Excel, but before the call to GetObject is made.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Excel 95. This bug has
	been fixed in Microsoft Excel 97.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new instance of Visual Basic 4.0. Form1 is created by default.
	
	2. Add the following code to the Form_Click event of Form1:
	
	        Private Sub Form_Click()
	            Dim o As Object
	
	            Set o = GetObject(, "Excel.Application")
	            Set o = Nothing
	        End Sub
	
	3. Ensure that Microsoft Excel 95 is running.
	
	4. Press the F5 key to run the application. Click the form once, and note the
	  error outlined above.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q288902 INFO: GetObject and CreateObject Behavior of Office Automation
	  Servers
	
	  Q138723 XL7: Code to Access MS Excel Does Not Work in Version 7.0
	
	Additional query words: GetActiveObject
	
	======================================================================
	Keywords          : kberrmsg kbprogramming 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbExcel700 kbExcel95Search kbVB400Search kbVB400
	Version           : :4.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
