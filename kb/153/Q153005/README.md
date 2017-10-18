---
layout: page
title: "Q153005: PRB: Longjmp Inside a _try Block Fails on PowerPC"
permalink: kb/153/Q153005/
---

## Q153005: PRB: Longjmp Inside a _try Block Fails on PowerPC

	Article: Q153005
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbVC kbHWPowerPC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.1, on platform(s):
	      - the hardware: PowerPC Processor 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program that contains a longjmp called inside a _try block may not call a
	_finally block. The sample code below is verified to work consistently on Alpha,
	MIPS and Intel platforms. It fails only on Power PC.
	
	WORKAROUND
	==========
	
	The solution is to include the setjmpex.h file instead of setjmp.h. The latter
	provides consistent behavior on all platforms, but may cause a performance
	degradation. Note: either setjmp.h or setjmpex.h may be included, but not both,
	because each defines the setjmp macro in a different way.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The on-line documentation claims the following:
	
	  "Exiting a try-finally statement using a return statement or the longjmp
	  run-time function is considered abnormal termination. It is illegal to jump
	  into a __try statement, but legal to jump out of one."
	
	Consequently, a longjmp within a _try block should cause the _finally to be
	executed.
	
	Sample Code
	-----------
	
	     /* Compile options needed:
	     */ 
	
	     #include <stdio.h>
	     #include <stdlib.h>
	     //#include <setjmpex.h>  // uncomment this line for the workaround
	     #include <setjmp.h> // comment this line out for the workaround
	     #include <windows.h>
	
	     CRITICAL_SECTION    cs;
	     jmp_buf             jmpbuf;
	
	     void main()
	     {
	          int  i = 0, j;
	          int  hits = 0;
	
	          if(setjmp(jmpbuf))
	          {
	               hits += 1;
	               i = 0;
	               printf("\n\n Jump.....\n\n");
	          }
	
	          while(1)
	          {
	               for(j = 0; j < 10; j++)
	                    printf("%d ", i++);
	               _try
	               {
	                    longjmp(jmpbuf, 1);
	               }
	               _finally
	               {
	                    printf("\n\nInside finally....\n");
	               }
	          }
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC kbHWPowerPC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
