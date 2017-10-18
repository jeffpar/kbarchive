---
layout: page
title: "Q129872: PRB: Wrong Number of Arguments Error When Call Math Functions"
permalink: kb/129/Q129872/
---

## Q129872: PRB: Wrong Number of Arguments Error When Call Math Functions

	Article: Q129872
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbVBp400
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
	
	Adding a reference to Microsoft Excel's Type Library from Visual Basic version
	4.0 and then early binding an instance of Microsoft Excel's Application Object
	results in the following error message, when calling a Math function on that
	object:
	
	  Wrong number of arguments or invalid property assignment.
	
	CAUSE
	=====
	
	All the math functions in the Microsoft Excel Type Library are typed as
	receiving no arguments, but most of them do have arguments. This is displayed in
	the help string for the corresponding math function in Visual Basic's Object
	Browser.
	
	RESOLUTION
	==========
	
	Use late binding with a generic object. For example, use the following code in
	the Form_Click event in the "Steps to Reproduce Behavior" section of this
	article:
	
	     Dim XLApp As Object
	     Set XLApp = CreateObject("excel.application")
	     z = XLApp.Atan2(3, 4)
	     MsgBox Str$(z)
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form_Click event:
	
	        Dim XLApp As Excel.Application
	        Set XLApp = CreateObject("excel.application")
	        z = XLApp.Atan2(3, 4)  ' Get an error here on wrong number of args.
	        MsgBox Str$(z)
	
	3. Choose References from the Tools menu. Select the reference for Microsoft
	  Excel 5.0 Object Library, and then click the OK button.
	
	4. Press the F5 key to Run the program. You will get an error message on the
	  line that calls the Atan2 function.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
