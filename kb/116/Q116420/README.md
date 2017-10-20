---
layout: page
title: "Q116420: BUG: Running a Program in NMAKE Fails During Preprocessing"
permalink: /kb/116/Q116420/
---

## Q116420: BUG: Running a Program in NMAKE Fails During Preprocessing

{% raw %}

	Article: Q116420
	Product(s): Microsoft Programming Utilities
	Version(s): 1.2,1.3,1.4
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Program Maintenance Utility (NMAKE), versions 1.2, 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running NMAKE on a makefile that executes an external program during
	preprocessing with the bracket ("[]") syntax, you get the following error
	message:
	
	  fatal error U1023: syntax error in expression
	  Stop.
	
	CAUSE
	=====
	
	The bracket syntax does not work in NMAKE if the expression being evaluated uses
	either the subtraction operator ("-") or the bitwise XOR operator ("^").
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft Program Maintenance
	Utility (NMAKE), versions 1.2, 1.3, and 1.4.
	
	This syntax is no longer documented and it is not supported in Visual C++ for
	Windows version 1.51 or Visual C++ 32-bit Edition.
	
	MORE INFORMATION
	================
	
	The bracket syntax can be used to have NMAKE run a program during preprocessing
	of a makefile. NMAKE replaces the program specification in the makefile with the
	program's return code. For example, if "Test" is a program that has a return
	code of 1, after preprocessing, the makefile NMAKE would change the expression
	
	  !IF [Test] != 0
	
	to the following:
	
	  !IF 1 != 0
	
	The sample code below can be used to duplicate the problem with the bracket
	syntax and the subtraction and bitwise XOR operators. To reproduce the problem,
	build the Test program (which simply returns the integer value it has been
	passed on the command line) and then run NMAKE on the sample makefile.
	
	Sample Code
	-----------
	
	  /* TEST.CPP
	     Compile options needed: none
	  */ 
	
	     #include <stdio.h>
	     #include <stdlib.h>
	
	     int main( int argc, char ** argv )
	     {
	         return atoi( argv[1] );
	     }
	
	     # MAKEFILE
	     #
	     # Command line options needed: none
	     #
	     # The expression [Test 4] - 4 should be preprocessed to be
	     # 4 - 4, which evaluates to 0 or false. However, NMAKE issues
	     # the U1023 error instead.
	
	     all:
	     !IF [Test 4] - 4
	         @echo Expression evaluated to true
	     !ELSE
	         @echo Expression evaluated to false
	     !ENDIF
	
	Additional query words: 1.20 1.30 1.40 exclusive
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE120 kbNMAKE130 kbNMAKE140
	Version           : :1.2,1.3,1.4
	
	=============================================================================
	

{% endraw %}
