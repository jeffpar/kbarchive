---
layout: page
title: "Q129447: PRB: Can't Watch Properties or Fields Used in a WITH Statement"
permalink: /kb/129/Q129447/
---

## Q129447: PRB: Can't Watch Properties or Fields Used in a WITH Statement

	Article: Q129447
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
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
	
	While debugging, no value is displayed if you add properties of objects or
	fields of User Defined Types (UDTs) that are accessed by a WITH Statement to the
	Watch Window. Instead, the message "Expression not defined in context" is
	displayed.
	
	NOTE: You cannot use the WITH statement itself from inside the Debug Window.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Choose Module from the Insert menu, to add a new module. Module1 is created
	  by default.
	
	3. Add the following code to Module1:
	
	        Type test
	           x As Integer
	        End Type
	
	4. Add the following code to the Form1_Click event procedure:
	
	        Dim t As test
	        Dim y As Integer
	
	        With t
	           y = .x
	        End With
	
	5. Highlight .x in the code window of Form1, and choose Add Watch from the Tools
	  menu. Click the OK button of the Add Watch Dialog box.
	
	6. Create a Breakpoint at the line y = .x, by pressing the F9 key when the
	  pointer (cursor) is on that line.
	
	7. Press the F5 key to Run the program. Click Form1. Execution stops at the
	  breakpoint, but no value for x is displayed in the Debug Window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
