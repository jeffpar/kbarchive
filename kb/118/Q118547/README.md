---
layout: page
title: "Q118547: PRB: Multithreaded Program Crashes"
permalink: /kb/118/Q118547/
---

## Q118547: PRB: Multithreaded Program Crashes

	Article: Q118547
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbFL32 kbFortranPS
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program that uses the multithread run-time library fails to run to completion
	or generates a Dr. Watson access-violation error message.
	
	CAUSE
	=====
	
	This behavior can occur if the compile options are not consistent with the
	libraries included in linking.
	
	RESOLUTION
	==========
	
	If the program is linked using the MSFRT.LIB and MSVCRT.LIB files, your object
	modules must be compiled using the -MD option.
	
	NOTE: This behavior was changed in Microsoft FORTRAN PowerStation version 4.0.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem and workaround, compile the sample code below
	(TESTC), using the four different tests listed. The first two tests demonstrate
	the problem, while the last two tests show two sets of options that do not cause
	problems:
	
	Test 1
	------
	
	The TESTC created using these options will produce a Dr. Watson error message:
	
	     CL -c TESTC.CPP
	     FL32 -LD TESTF.FOR
	     FL32 -MD TESTC.OBJ TESTF.LIB
	
	Test 2
	------
	
	The TESTC created using these options will not produce an error message, but will
	fail to run completely and will not produce any output:
	
	     CL -c -MD TESTC.CPP
	     FL32 -LD TESTF.FOR
	     FL32 -ML TESTC.OBJ TESTF.LIB
	
	-or-
	
	     FL32 -MT TESTC.OBJ TESTF.LIB
	
	Test 3
	------
	
	The TESTC created using these options will create a TESTC program that is linked
	to MSFRT.LIB and MSVCCRT.LIB. The actual run-time code is in the DLLs MSFRT10
	and MSVCRT10. This TESTC will correctly display the message, "Factorial of 7 is:
	5040":
	
	     CL -c -MD TESTC.CPP
	     FL32 -LD TESTF.FOR
	     FL32 -MD TESTC.OBJ TESTF.LIB
	
	Test 4
	------
	
	The TESTC created using these options has the run-time code statically linked
	into the executable file. It will also correctly display the message, "Factorial
	of 7 is: 5040":
	
	     CL -c TESTC.CPP
	     FL32 -LD TESTF.FOR
	     FL32 -ML TESTC.OBJ TESTF.LIB
	
	-or-
	
	     FL32 -MT TESTC.OBJ TESTF.LIB
	
	C Sample Code
	-------------
	
	  /* Compile options needed: see text above
	  */ 
	     #include <iostream.h>
	     extern "C" {void __stdcall FACT (int n, int *amt);}
	     int main() {
	        int amt;
	        FACT(7, &amt);
	        cout << "Factorial of 7 is: " << amt;
	        return 0;
	     }
	
	FORTRAN Sample Code
	-------------------
	
	  C Compile options needed: see text above
	        SUBROUTINE Fact[DLLEXPORT](n, amt)
	        INTEGER*4 n [VALUE]
	        INTEGER*4 amt [REFERENCE]
	        INTEGER*4 i
	        amt = 1
	        DO i = 1, n
	          amt = amt * i
	        END DO
	        END
	
	Additional query words: 1.00 multi-thread
	
	======================================================================
	Keywords          : kbcode kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
