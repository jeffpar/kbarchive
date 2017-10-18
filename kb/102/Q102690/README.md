---
layout: page
title: "Q102690: FIX: No Include Dependencies for &#36;INCLUDE Metacommand Contents"
permalink: kb/102/Q102690/
---

## Q102690: FIX: No Include Dependencies for &#36;INCLUDE Metacommand Contents

	Article: Q102690
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
	
	A project created by using Microsoft FORTRAN PowerStation Visual WorkBench may
	not correctly establish a dependency for an include file specified with the
	$INCLUDE metacommand instead of the INCLUDE statement.
	
	CAUSE
	=====
	
	The project build engine parses only INCLUDE statements to establish include
	dependencies and does not parse $INCLUDE metacommands.
	
	RESOLUTION
	==========
	
	Modify your source code to change all $INCLUDE metacommands to INCLUDE
	statements.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
