---
layout: page
title: "Q49245: DOCERR: Error in Macro Example in MASM 5.1 Update Manual"
permalink: /kb/049/Q49245/
---

## Q49245: DOCERR: Error in Macro Example in MASM 5.1 Update Manual

	Article: Q49245
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The macro example on Page Update-23 in the "Microsoft Macro Assembler 5.1:
	Updates and Microsoft Editor" has an error in it. The macro in the example is
	called RestRegs.
	
	The current example reads as follows:
	
	        RestRegs    MACRO
	           numloc   instr  regpushed,"#"
	              .
	              .
	              .
	                    ENDM
	
	The second line should read as follows:
	
	           numloc  instr  regpushed,<#>
	
	However, even with this correction made to the example this macro will not work
	correctly on MASM version 5.1. This example does not work correctly on MASM
	version 5.1 due to a problem with the SUBSTR directive when assigning a string a
	substring of itself.
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : MS-DOS:5.1
	
	=============================================================================
	
