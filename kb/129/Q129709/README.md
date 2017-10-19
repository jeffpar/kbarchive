---
layout: page
title: "Q129709: PRB: Run-Time Overflow Error w/Byte-Type Counter in For Loop"
permalink: /kb/129/Q129709/
---

## Q129709: PRB: Run-Time Overflow Error w/Byte-Type Counter in For Loop

	Article: Q129709
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
	
	Using a byte variable as a counter in a For loop with a negative Step value
	causes an Overflow error at run-time.
	
	CAUSE
	=====
	
	In a For loop in Visual Basic for Windows, the Start, Limit and Step values are
	all coerced to the type of the For loop counter. Since the byte data type cannot
	be negative, it cannot have a negative step value.
	
	RESOLUTION
	==========
	
	This is a limitation of the implementation of the byte datatype and For loop.
	The solution is to never use byte type variables in For loops where the step is
	negative or a variable (since the variable may contain a negative number at some
	future time.)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior in Visual Basic Version 4.0
	-------------------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Command1_Click procedure:
	
	        Dim ByteVar As Byte
	
	        For ByteVar = 10 To 5 Step -1
	           Debug.Print ByteVar
	        Next
	
	Additional query words: increment decrement counter
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
