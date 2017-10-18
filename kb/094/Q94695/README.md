---
layout: page
title: "Q94695: Error: Executable code not allowed in module level of a form"
permalink: kb/094/Q94695/
---

## Q94695: Error: Executable code not allowed in module level of a form

	Article: Q94695
	Product(s): Microsoft Visual Basic for Windows
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can't use the On Error Goto and On Event Gosub statements in a form because
	they require an event handler at the module level, and you can't enter code at
	the module level of a form.
	
	Attempting to enter code at the module level of a form results in an error:
	
	  Executable code not allowed in module level of a form
	
	Line labels and line numbers are allowed in the module level of a form module,
	but they are useless.
	
	To work around this limitation, use On Error and On Event statements only in code
	(.BAS) modules or use the On Local Error statement for error trapping.
	
	MORE INFORMATION
	================
	
	This limitation applies to the following statements:
	
	  On Error       On Com
	  On Key         On Pen
	  On Play        On Strig
	  On Timer       On UEvent
	
	Additional query words: VBmsdos 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword3 kbVB100DOS
	Version           : MS-DOS:1.0
	
	=============================================================================
	
