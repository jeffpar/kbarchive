---
layout: page
title: "Q148203: BUG: Passing LOC() Intrinsic Result to C Function Fails"
permalink: /kb/148/Q148203/
---

## Q148203: BUG: Passing LOC() Intrinsic Result to C Function Fails

	Article: Q148203
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a variable character substring as an argument to the LOC() intrinsic
	function and passing the result to a C function causes the variable character
	substring to become corrupted.
	
	RESOLUTION
	==========
	
	- Use a literal character substring as the LOC() intrinsic argument.
	
	-or-
	
	- Assign the variable character substring to a temporary character variable,
	  and use it as the LOC() intrinsic argument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem and Workarounds
	-------------------------------------------------
	
	  C Fortran Main Source Code
	  C Compile options needed: none
	
	        INTERFACE
	            SUBROUTINE MYFUNC(I)
	            INTEGER I
	            !MS$ATTRIBUTES VALUE :: I
	            !MS$ATTRIBUTES C,ALIAS:'_myfunc' :: myfunc
	            END SUBROUTINE MYFUNC
	        END INTERFACE
	
	        CHARACTER STR*3, TEMP*4
	        INTEGER L
	
	        STR = 'ABC'
	        L = 3
	
	  C this fails
	        CALL MYFUNC(LOC(STR(1:L)//CHAR(0)))
	
	  C these work
	        CALL MYFUNC(LOC(STR//CHAR(0)))
	        CALL MYFUNC(LOC(STR(1:3)//CHAR(0)))
	        TEMP=STR(1:L)//CHAR(0)
	        CALL MYFUNC(LOC(TEMP))
	        END
	
	  ------------
	
	  /* C Function Source Code:
	     Compile options needed: /c
	  */ 
	
	  #include <stdio.h>
	  void myfunc(char *s)
	  {
	      long x;
	      x = (long) s;
	      printf("s: %x  String: %s\n", x, s);
	  }
	
	Program Output
	--------------
	
	  s: 12ffa8 String: -
	  s: 12ffa4 String: ABC
	  s: 12ffa0 String: ABC
	  s: 41bac8 String: ABC
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
