---
layout: page
title: "Q40593: INFO: Misspelling &quot;Default&quot; Gives No Error"
permalink: kb/040/Q40593/
---

## Q40593: INFO: Misspelling &quot;Default&quot; Gives No Error

	Article: Q40593
	Product(s): Microsoft C Compiler
	Version(s): MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5,1.51;WINNT:1.0,2.0,2. 1,4.0,5
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	It has been reported that when the keyword "default" is misspelled,
	the C/C++ compiler does not generate an error and the executable code does
	not execute the "defualt" branch in any case.
	
	This is not a problem with the C/C++ compiler. In C and C++ any name
	followed by a colon (:) is a label. In a switch statement the case and
	default keywords are special types of label which are used by the switch
	statement. When the keyword "default" is spelled incorrectly, it is treated
	as a label. You could use a goto statement to reference the label. The
	switch statement, however, does not recognize it. Since a "default:" label
	is not required by the switch statement, no error is (or can be) generated.
	
	NOTE: It is not good programming practice to jump to a label that is
	within a switch statement from outside the switch statement.
	
	Additional query words: 8.00 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5,1.51;WINNT:1.0,2.0,2. 1,4.0,5.0;
	Issue type        : kbinfo
	
	=============================================================================
	
