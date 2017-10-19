---
layout: page
title: "Q71767: INFO: C2059, C2143: Syntax Errors Involving 'int constant'"
permalink: /kb/071/Q71767/
---

## Q71767: INFO: C2059, C2143: Syntax Errors Involving 'int constant'

	Article: Q71767
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When compiling a program with the Microsoft C/C++ compiler, the following error
	may be generated if an integer constant is recognized syntactically as being in
	an illegal location:
	
	  error C2059: syntax error: 'int constant'
	
	Microsoft C/C++ 7.0 and Visual C++ may generate the following:
	
	  C2143: syntax error: missing ';' before 'constant'
	
	  -or-
	
	  C2143: syntax error: missing ';' before 'int constant'
	
	Depending on the code, this error may result from a failure to include a line
	continuation character in a multi-line #define or macro definition statement, or
	from placing an integer constant on a line by itself.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates how this particular error might be generated.
	The #define statement spans two lines, but the line continuation character (a
	backslash) was inadvertently omitted from the end of the first line. This causes
	the compiler to "see" the integer constants as being on a line by themselves
	without any contextual meaning, and thus the C2059 error is generated.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #define coordinates {
	        16,16  }
	
	  void main(void)
	  {
	  }
	
	Additional query words: 8.00 8.00c
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
