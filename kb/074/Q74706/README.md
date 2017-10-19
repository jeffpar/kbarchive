---
layout: page
title: "Q74706: PRB: NMAKE Does Not Parse Escape Character Correctly"
permalink: /kb/074/Q74706/
---

## Q74706: PRB: NMAKE Does Not Parse Escape Character Correctly

	Article: Q74706
	Product(s): Microsoft Programming Utilities
	Version(s): 1.11,1.12,1.13,1.2,1.21,1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In NMAKE, the caret (^) symbol is used as an escape character for the characters
	#()$^\{}!@- (which NMAKE uses as control characters). If you create an NMAKE
	macro that contains one of these symbols, you may, due to context, need to use
	the caret symbol to indicate that you want the literal character in the macro.
	
	MORE INFORMATION
	================
	
	Using ^^ or ^$ gives unexpected results. In some cases, the leading caret is not
	removed even though it is needed to get a caret or dollar sign. However, NMAKE
	might also remove both characters. According to the Visual C/C++ for MS-DOS,
	version 1.0, README.WRI file, if you want to use $ in a command, then you need
	to use $$ instead of ^$. The README.WRI file also notes that if you want to use
	^ as a literal character, it is treated as a literal character when used within
	a quoted string.
	
	For example, if you create a macro containing two carets preceded by another
	character, such as abc^^abc, NMAKE will not parse out the first caret, leaving
	only one caret. Instead, it leaves both carets in the macro. If, on the other
	hand, you create a macro containing two carets preceded only by the equal sign
	for the macro assignment, such as ^^abc, NMAKE will parse out both carets
	leaving only the abc.
	
	The sample makefiles below illustrate these situations. Each makefile contains
	comments showing the expected output and the actual output.
	
	These sample makefiles all give the expected output with NMAKE 1.5 from Visual
	C++ 2.0.
	
	Sample Makefile #1
	------------------
	
	Note: This makefile does work correctly for NMAKE for MS-DOS, versions 1.3 and
	later.
	
	  test=abc^!abc   # note: test=abc!abc works
	  ALL:
	    echo $(test)
	   
	  # expected output : echo abc!abc
	  # resulting output: echo abc^!abc
	
	Sample Makefile #2
	------------------
	
	  test=abc^$abc   # note: test=abc$$abc works
	  ALL:
	    echo $(test)
	   
	  # expected output : echo abc$abc
	  # resulting output: echo abc^$abc
	
	Sample Makefile #3
	------------------
	
	  test=abc^^abc
	  ALL:
	    echo $(test)
	   
	  # expected output : echo abc^abc
	  # resulting output: echo abc^^abc
	
	Since the ^ is treated as a literal character within a quoted string, you can
	place the macro definition in a string and then use macro substitution to remove
	the quotes. For example,
	
	  test="abc^abc"
	  ALL:
	    @echo $(test:"= )
	
	Additional query words: 1.20 1.30 1.40
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2
	Version           : :1.11,1.12,1.13,1.2,1.21,1.3,1.4
	
	=============================================================================
	
