---
layout: page
title: "Q141479: FIX: Visual FoxPro Quits If You Click Ignore or Suspend/Resume"
permalink: kb/141/Q141479/
---

## Q141479: FIX: Visual FoxPro Quits If You Click Ignore or Suspend/Resume

	Article: Q141479
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Program Error occurs while executing code when the Valid event of a Get object
	refers to a procedure that does not exist. If the user clicks either Ignore or
	Suspend followed by Resume, Visual FoxPro guits.
	
	WORKAROUND
	==========
	
	Either implement an error handling routine to trap for this error or click
	Cancel during the Program Error of Visual FoxPro's default error handling
	routine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program containing the following code:
	
	     DEFINE POPUP test_pop
	     DEFINE BAR 1 OF test_pop PROMPT "Bar 1"
	     DEFINE BAR 2 OF test_pop PROMPT "Bar 2"
	
	     @ 2.000,1.333 GET test_pos ;
	        PICTURE "@&N" ;
	        POPUP test_pop;
	        SIZE 5,15 ;
	        DEFAULT 1 ;
	        VALID pop_test()
	
	     READ CYCLE
	     RELEASE BAR ALL OF test_pop
	
	2. Save and close the program. Then use the DO command to run the program.
	
	3. Press the ENTER key. At this point, the following Program Error occurs:
	
	  File 'pop_test.prg' does not exist.
	
	4. Click Ignore. This results in an Illegal Operation error or general
	  protection (GP) fault depending on the version of Windows installed on the
	  computer.
	
	Additional query words: crash
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
