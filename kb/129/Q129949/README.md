---
layout: page
title: "Q129949: PRB: Empty Sub Procedures Are Not Persistent"
permalink: kb/129/Q129949/
---

## Q129949: PRB: Empty Sub Procedures Are Not Persistent

	Article: Q129949
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
	
	You receive the "Sub or Function not defined" error when executing code that
	references an empty event procedure.
	
	CAUSE
	=====
	
	If you have an event procedure that is being called from another Sub procedure
	in the program, and you delete all the code in the event procedure, any
	references to that event procedure generate an error message at compile time.
	
	RESOLUTION
	==========
	
	Remove references to the empty event procedures or place a comment line into the
	procedure.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Visual Basic Help file lists the following possible reasons for the "Sub or
	Function not defined" error:
	
	- The specified procedure is not visible to the calling procedure. Procedures
	  in a form cannot be called from procedures outside the form. Use Find on the
	  Edit menu to locate the procedure.
	
	- You have declared a dynamic-link library, but the routine is not in the
	  specified library.
	
	- You have misspelled the name of your procedure.
	
	An additional possible cause for this error is that you have called an empty
	event procedure. Empty Sub procedures are not persistent in Visual Basic, that
	is, the compiler strips out empty event procedures before the binding tables are
	built such that a reference does not exist to the procedure in the compiled
	code, and as a result, it is undefined.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1_Click event procedure:
	
	     Private Form1_Click()
	        Command1_Click
	     End Sub
	
	3. Add a command button (Command1) to Form1.
	
	4. Run the program. When you click the form, the error is generated.
	
	5. Furthermore, if you nondestructively edit the line "Command1_Click" (that is,
	  retype a portion of the line) the error "Sub or Function not defined" is
	  generated at compile time.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
