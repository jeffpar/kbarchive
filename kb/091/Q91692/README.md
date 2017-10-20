---
layout: page
title: "Q91692: FIX: H2INC Version 1.0 Ignores /G3 and /G4 Option Switches"
permalink: /kb/091/Q91692/
---

## Q91692: FIX: H2INC Version 1.0 Ignores /G3 and /G4 Option Switches

{% raw %}

	Article: Q91692
	Product(s): Microsoft C Compiler
	Version(s): OS/2:1.0; winnt:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 1.0 of the H2INC utility, provided with Microsoft Macro Assembler
	(MASM) version 6.0, 6.0a, and 6.0b, the /G3 or /G4 option switch does not change
	the size of an int from a WORD to a DWORD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in H2INC version 1.0. This problem
	was corrected in H2INC for MS-DOS version 1.1 which is included with MASM for
	MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	Pages 436 and 440 of the "Microsoft Macro Assembler Programmer's Guide" for MASM
	version 6.0 document the /G3 and /G4 switches for the H2INC utility. As note
	above, H2INC version 1.0 does not implement these switches.
	
	Sample Code
	-----------
	
	  /* Command line options needed: /G3
	  */ 
	  int my_var;
	
	  ; Resulting .INC file
	  EXTERNDEF C my_var:SWORD    /* Notice it is not :SDWORD */ 
	
	Additional query words: 6.00 6.00a 6.00b 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM100
	Version           : OS/2:1.0; winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
