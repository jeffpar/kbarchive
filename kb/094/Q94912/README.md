---
layout: page
title: "Q94912: FIX: A2138, A2036 or Hang, Init Nested Structure Array"
permalink: /kb/094/Q94912/
---

## Q94912: FIX: A2138, A2036 or Hang, Init Nested Structure Array

	Article: Q94912
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to assemble code that initializes an array of nested structures fails
	and the computer hangs and stops responding or the assembler produces the
	following messages:
	
	  error A2138: invalid data initializer
	  error A2036: too many initial values for structure
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following two steps:
	
	- Remove the initialization from the structure declaration
	
	-or-
	
	- Remove the DUP operator and declare multiple nested structure fields
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b for MS-DOS and OS/2. This problem was corrected in MASM version 6.1 for
	MS-DOS.
	
	MORE INFORMATION
	================
	
	In code developed for Microsoft Macro Assembler (MASM) version 6.0 or later, an
	application can create nested structures or use the DUP operator to create
	arrays of structures. An application can initialize a nested structure or an
	array of structures. However, an attempt to initialize a structure that contains
	an array of nested structures fails with the errors listed above.
	
	MASM version 6.1 generates the following error message when an application
	attempts to initialize an array of nested structures:
	
	  error A2177: nested structure improperly initialized
	
	The following code example demonstrates this error.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small, c
	
	  inner_struct STRUCT
	     w1 DW ?
	  inner_struct ENDS
	
	  outer_struct STRUCT
	     s1 inner_struct 2 DUP ({})
	  outer_struct ENDS
	
	  .DATA
	  tst1 outer_struct { {{1},{2} }}   ; This line generates an error message
	  ; tst2 outer_struct { {} }        ; This line is allowed
	
	  END
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
