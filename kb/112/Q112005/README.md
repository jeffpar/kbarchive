---
layout: page
title: "Q112005: BUG: Illegal Formal Argument and -Zi Crash Compiler"
permalink: kb/112/Q112005/
---

## Q112005: BUG: Illegal Formal Argument and -Zi Crash Compiler

	Article: Q112005
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using FORTRAN PowerStation to compile a file that contains a subprogram using a
	formal argument that has the same name as that subprogram may produce the
	following errors under Windows NT:
	
	  error F2209: (variable_name) : illegal as formal argument
	  fatal error C1900: Il mismatch between 'P1' version '0' and 'P2'
	  version '19930414'
	
	These error messages are then followed by a stack overflow exception.
	
	When using FORTRAN PowerStation for MS-DOS, the F2209 error is generated. If
	compiling from the Visual Workbench, the following errors also occur:
	
	  error F2513: (variable_name) : not a variable
	
	  error F2530: (variable_name) : symbol class illegal here
	
	  error F2040: label on continuation line
	
	  error F2037: illegal label field
	
	The F2040 and F2037 errors scroll repeatedly showing negative line numbers, until
	finally the compiler crashes with a DX1020 general protection (GP) fault error.
	The F2040 and F2037 errors do not occur if compiled from the MS-DOS command
	line, but the DX1020 error does.
	
	In all cases the F2209 error is correct.
	
	CAUSE
	=====
	
	This error occurs only when using the -Zi compiler option.
	
	RESOLUTION
	==========
	
	Correct the error by renaming the formal argument. Then recompile with -Zi.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	and 1.0a for MS-DOS, and version 1.0 for Windows NT. Microsoft is researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample below illustrates the problem:
	
	Sample Code
	-----------
	
	  c Compile options required: -Zi
	  c
	          integer function i(f,i)
	          integer f
	          i=f(i)
	          return
	          end
	
	Additional query words: 1.00 1.00a Dr. Watson subroutine
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
