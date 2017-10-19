---
layout: page
title: "Q75968: DOCERR: Errors in MASM 6.0 &quot;Installing and Using...&quot; Manual"
permalink: /kb/075/Q75968/
---

## Q75968: DOCERR: Errors in MASM 6.0 &quot;Installing and Using...&quot; Manual

	Article: Q75968
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has confirmed that the following documentation errors occur on pages
	26 and 56 of the "Microsoft Macro Assembler Installing and Using the
	Professional Development System" manual for MASM version 6.0. We will post new
	information here when the documentation has been corrected.
	
	Page 26
	-------
	
	At the top of page 26, in Table 3.1, the file type indicator for MASM source code
	is shown as being "ASM". This is incorrect; the file type indicator for MASM
	source code is "MACRO".
	
	Page 56
	-------
	
	The statements on page 56 of the "Microsoft Macro Assembler Installing and Using
	the Professional Development System" for MASM 6.0 read:
	
	     mov  ax, 0FFh
	     int  21h
	
	They should read as follows:
	
	     mov  ah, 0FFh
	     int  21h
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	
