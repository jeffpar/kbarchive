---
layout: page
title: "Q129930: PRB: Compile-Time Error Occurs Instead of Run-Time Error"
permalink: kb/129/Q129930/
---

## Q129930: PRB: Compile-Time Error Occurs Instead of Run-Time Error

	Article: Q129930
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
	
	Setting a read-only property gives you a compile-time error instead of a
	run-time error. This behavior represents a new feature in Visual Basic version
	4.0.
	
	CAUSE
	=====
	
	Visual Basic version 4.0 checks to see if read-only properties are being written
	to at compile time. That is why Visual Basic version 4.0 checks for this type of
	error when you select Make EXE File from the file menu, as opposed to just
	reporting the error at run time.
	
	This also occurs when Running the program in the Design Environment (with Compile
	On Demand turned off). By using this new feature, the compiler prevents
	accidental writes to read-only properties. Having the compiler catch this type
	of error also stops the error from crashing a program during run time.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Combo Box on Form1.
	
	3. Add the following code to the click event of Form1:
	
	     Combo1.Style = 2
	
	4. Choose Make EXE File from the File menu.
	
	5. In the Make EXE dialog box, enter a name for your executable, and click OK.
	  This results in the following error:
	
	  Function call on left-hand side of assignment must return Variant or Object
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
