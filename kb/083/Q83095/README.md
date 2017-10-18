---
layout: page
title: "Q83095: INFO: CodeView Cannot Display #define or EQU Values"
permalink: kb/083/Q83095/
---

## Q83095: INFO: CodeView Cannot Display #define or EQU Values

	Article: Q83095
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly kbCodeView kbDebug kbide kbVC _IK
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	The Microsoft CodeView debugger (CV) cannot display any value declared
	in either a C-language #define preprocessor statement or in an
	assembly language EQU or TEXTEQU equate. These values cannot be
	displayed in the Local window, the Watch window, the Command window,
	or as a Quick Watch value.
	
	The Microsoft C compiler and the Microsoft Macro Assembler (MASM) do
	not produce any symbolic information for these statements. Without
	symbolic information, CodeView has no information about these symbols,
	and cannot display them.
	
	In the sample code below, for example, attempting to put a watch on X
	generates the following message:
	
	  X <Watch Expression Not In Context>
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi
	  */ 
	
	  #include <stdio.h>
	
	  #define X 17
	
	  void main(void)
	  {
	     printf("\n X is = %d", X);
	  }
	
	Additional query words: kbinf pound
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly kbCodeView kbDebug kbide kbVC _IK 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
