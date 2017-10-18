---
layout: page
title: "Q106561: FIX: Debug: Single-Step Fails with Emulated Float Intructions"
permalink: kb/106/Q106561/
---

## Q106561: FIX: Debug: Single-Step Fails with Emulated Float Intructions

	Article: Q106561
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the debugger, attempting to use the Step Into (F8) or Step Over (F10)
	function causes execution to the next breakpoint (or to the end of the program
	if no breakpoints are encountered).
	
	CAUSE
	=====
	
	The debugger treats the Step commands similar to the Go (F5) command when
	stepping into or over an assembler floating-point instruction. This error occurs
	only when using floating-point emulation and does not occur when using a math
	coprocessor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	To demonstrate the problem:
	
	1. Disable the PowerStation's use of the coprocessor (if present). This is done
	  by typing the following command before starting Windows:
	
	  " set tnt=-fpem " (without the quotation marks)
	
	2. Start Windows and the FORTRAN Visual Workbench.
	
	3. Build a project with F32\DEBUGME
	
	
	4. Set breakpoints at lines 22 and 26 of F32\DEBUGME\DEBUGME.FOR:
	
	        MyReal4 = MyInt4 * 3.14159
	
	  -and-
	
	        If ((MyInt4 * MyReal4) .EQ. MyReal8) Then
	
	5. Press F5 to "GO"; the current line will be 22.
	
	6. Single-step (press F8 or F10); the next line (24) is skipped and the debugger
	  will go to the breakpoint on line 26.
	
	To see what is happening in more detail, after step 5, turn on display of mixed
	source and assembly from the View menu (or with the command CTRL+F7).
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
