---
layout: page
title: "Q129446: PRB: Can't Have Multiple Declare Statements for Same Function"
permalink: /kb/129/Q129446/
---

## Q129446: PRB: Can't Have Multiple Declare Statements for Same Function

{% raw %}

	Article: Q129446
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
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
	
	Visual Basic version 4.0 generates a compile error if there are two Declare
	statements with the same name in the project when the Declare statement takes a
	UDT (User Defined Type) or object as a parameter. However, there is no problem
	if none of the parameters are UDTs or Objects.
	
	RESOLUTION
	==========
	
	Put the Private keyword in front of one of the Declare statements.
	
	STATUS
	======
	
	This behaviour is by design. This behavior was allowed in Visual Basic version
	3.0, but is no longer allowed in Visual Basic version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add two new Modules (Module1 and Module2) by choosing Module from the Insert
	  menu.
	
	3. Add the following code to the General Declarations section of Module1:
	
	     Type POINT
	        X As Long
	        Y As Long
	     End Type
	
	     Declare Sub GetCursorPos Lib "user32" (lpPoint As POINT)
	
	4. Add the following code to the General Declarations section of Module2:
	
	     Declare Sub GetCursorPos Lib "user32" (lpPoint As POINT)
	
	5. In the Form_Click event for Form1, add the following code:
	
	     Dim pt As POINT
	     GetCursorPos pt
	     Print pt.X, pt.Y
	
	6. Choose Make EXE File from the File menu to compile the program. You will
	  receive the error, "Ambiguous Name Detected: GetCursorPos."
	
	Additional query words: incompatibility 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
