---
layout: page
title: "Q113420: BUG: A2008 When Angle Brackets Missing on FOR Argument List"
permalink: /kb/113/Q113420/
---

## Q113420: BUG: A2008 When Angle Brackets Missing on FOR Argument List

	Article: Q113420
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Angle brackets ("<>") are required for the argument list of a FOR
	statement. If the angle brackets are missing from the argument list of a FOR
	statement in a macro, no listing file will be created and errors A1008 and A2008
	will be generated. The sample given at the end of this article generates the
	following errors:
	
	  test.asm(17): error A2008: syntax error : integer
	
	  numargs(3): Macro Called From
	  test.asm(17): Main Line Code
	
	  test.asm(17): fatal error A1008: unmatched macro nesting
	
	  numargs(5): Macro Called From
	  test.asm(17): Main Line Code
	
	CAUSE
	=====
	
	Because A1008 is a fatal error, no listing file is created.
	
	RESOLUTION
	==========
	
	The error messages indicate where the error occurs, but may be difficult to
	interpret. The first message line indicates that an A2008 error occurred at line
	17 of the program (see the sample below). The second message shows that the
	actual error is on line 3 of the numargs macro. The error can be located and
	eliminated by finding this line and adding the angle brackets around varg (shown
	as a commented line in the sample).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Sample Code
	-----------
	
	  ; Assemble options needed:  /c /Fl /Sa
	
	    .MODEL small
	
	    numargs  MACRO varg:VARARG
	      mov ax,0
	      ; Following line should be FOR val, <varg>
	      FOR val, varg
	        inc ax
	      ENDM
	    ENDM
	
	    .STACK
	    .DATA
	    .CODE
	    .STARTUP
	      numargs 1,1,1
	    .EXIT
	    END
	
	Additional query words: 6.00 6.00a 6.10 6.10a 6.x 6.1x buglist6.00 buglist6.10 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
