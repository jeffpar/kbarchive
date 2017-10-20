---
layout: page
title: "Q62097: INFO: Line Continuation Evaluated Before Inline Comment"
permalink: /kb/062/Q62097/
---

## Q62097: INFO: Line Continuation Evaluated Before Inline Comment

{% raw %}

	Article: Q62097
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 27-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To maintain ANSI compliance, the above C versions evaluate line continuation
	characters "\" before inline comment tokens "//". This is a change from C
	version 5.1 behavior, which ignores line continuation characters within inline
	comments. This order of evaluation may results in the following error in the
	sample below:
	
	  error C2065: 'INT2' : undeclared identifier
	
	MORE INFORMATION
	================
	
	Section 2.1.1.2 of the ANSI Draft proposal (dated December 7, 1988) states the
	order in which source code translation is to take place. The second and third
	steps are paraphrased below.
	
	  2. Each instance of a new-line character and an immediately preceding
	  backslash character is deleted, splicing physical source lines to form
	  logical source lines. ...
	
	  3. The source file is decomposed into preprocessing tokens and sequences of
	  white-space characters... Each comment is replaced by one space character.
	
	As this indicates, the line concatenation should be performed before any and all
	evaluation of preprocessing tokens and comments. The change in interpretation
	can cause problems with programs that depend on the C 5.1 interpretation. The
	problem usually manifests itself in sections of code being ignored. This can be
	seen in the following program, which behaves differently under the different
	compilers.
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	
	  #define INT1 1          //    Inline comment    \ 
	  #define INT2 2    //  This line is ignored  \ 
	
	  void main(void)
	  {
	     printf("%d %d \n",INT1,INT2);
	  }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
