---
layout: page
title: "Q131498: DLL with PROGRAM Statement Fails to Load"
permalink: kb/131/Q131498/
---

## Q131498: DLL with PROGRAM Statement Fails to Load

	Article: Q131498
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a FORTRAN DLL contains a PROGRAM statement or other main section of code,
	programs calling the DLL fail to load it; they return an error. The error
	returned depends on the program.
	
	- Visual Basic version 3.0 and Microsoft Word version 6.0 give an "Out of
	  memory" error when attempting to call a function or subroutine in the DLL.
	
	- Microsoft Excel version 5.0 reports "Run time error '48' Error in loading
	  DLL" when attempting to call a function or subroutine in the DLL.
	
	- A Windows-based application built in C that uses LoadLibrary() to load the
	  DLL returns 0 (System was out of memory, executable file was corrupt, or
	  relocations were invalid).
	
	- An application that loads the DLL by linking with the DLL import library
	  terminates the application upon loading the DLL. The Visual C++ debugger
	  displays the message "Process 0xXXXX Terminated Normally (240)" if the
	  program is being debugged. If the program is being executed, the program
	  doesn't appear to execute but reports no warnings, errors, or messages. The
	  program does not load and no window is displayed.
	
	- A Windows-based application built in FORTRAN gives no warnings, errors, or
	  messages. The program does not load and no window is displayed.
	
	CAUSE
	=====
	
	A DLL should not have a PROGRAM statement.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Behavior
	-----------------------------------
	
	  C  Compile options needed: /Gw /Aw
	  C
	  C  DLL functions and subroutines
	        SUBROUTINE SubroutineOne()
	        ...
	        END
	
	        INTEGER*4 FUNCTION FunctionOne()
	        ...
	        END
	
	  C  The code below is not needed for a DLL
	        PROGRAM MainProgram
	        ...
	        END
	
	Additional query words: 1.00 1.50 1.51 1.52 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS
	Version           : :5.1
	
	=============================================================================
	
