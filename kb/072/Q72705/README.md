---
layout: page
title: "Q72705: DOCERR: ENDM Can't Be Used to Return Value from Macro Function"
permalink: /kb/072/Q72705/
---

## Q72705: DOCERR: ENDM Can't Be Used to Return Value from Macro Function

	Article: Q72705
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the online help for the Microsoft Macro Assembler (MASM) version 6.0, the
	definition for the MACRO directive lists the ENDM directive as taking an
	optional value that is returned from the macro. This is incorrect. The only way
	to write a macro function that returns a value is with the EXITM directive.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
