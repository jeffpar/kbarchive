---
layout: page
title: "Q73685: BUG: Preprocessor Program Invocation Gets Wrong Return Value NMK"
permalink: kb/073/Q73685/
---

## Q73685: BUG: Preprocessor Program Invocation Gets Wrong Return Value NMK

	Article: Q73685
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, version 1.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NMK.COM version 1.11 does not correctly evaluate the return value from a program
	invocation in a preprocessor directive. NMK will always indicate that the
	program returns 0 (zero) no matter what the actual return value is. This can
	cause problems if the return value is used in some conditional code in the
	makefile. The sample code and makefile below may be used to illustrate this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NMK version 1.11. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	A program can be invoked in a makefile preprocessing directive by enclosing the
	program inside square brackets ([]). The program will be invoked before any
	other processing of the makefile is done.
	
	NMAKE evaluates the program correctly and may be used to work around the problem;
	however, you may need to use the DOS extended versions of the compiler or
	assembler to work around the memory limitations of NMAKE.
	
	For more information on preprocessing directives in makefiles, see the NMAKE
	documentation or online Help supplied with your version of the compiler or
	assembler.
	
	Sample Code and Makefile
	------------------------
	
	To illustrate the problem described above, compile or assemble one of the sample
	programs below to create an executable file called TEST.EXE. Save the following
	makefile as a file called MAKEFILE and invoke NMK with no arguments.
	
	MAKEFILE
	--------
	
	  !IF ( [TEST.EXE] )   # This test is TRUE for NMAKE and FALSE for NMK
	
	  all:
	      echo Worked
	
	  !ELSE
	
	  all:
	      echo Failed
	
	  !ENDIF
	
	TEST.C
	------
	
	  /* Sample C code that can be invoked as a part of a makefile
	     preprocessor directive.
	
	     Compile options needed: none
	  */ 
	
	  #include <stdlib.h>
	
	  void main(void)
	  {
	     exit(1);
	  }
	
	TEST.ASM
	--------
	
	  ; Sample assembly code that can be invoked as a part of a makefile
	  ; preprocessor directive
	
	  ; Compile options needed: none
	
	     .MODEL small, os_dos
	
	     .STACK
	
	     .CODE
	     .STARTUP
	        mov al, 1h
	     .EXIT
	
	     END
	
	Additional query words: 1.11 buglist1.11
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS
	Version           : MS-DOS:1.11
	
	=============================================================================
	
