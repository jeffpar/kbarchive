---
layout: page
title: "Q120066: BUG: ML Uses DGROUP in Flat Model and Generates A2006"
permalink: /kb/120/Q120066/
---

## Q120066: BUG: ML Uses DGROUP in Flat Model and Generates A2006

	Article: Q120066
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The assembler uses the DGROUP symbol to load the DS register with a data segment
	value in the prolog code, even in a flat-model program. This causes the
	assembler to generate "error A2006: Undefined symbol: DGROUP" because groups are
	not supported in flat-model code.
	
	This behavior is demonstrated through the following procedure definition and
	generated prolog code, both from the listing file:
	
	     MyProc   proc <loadds> word_val:WORD
	
	     ;   push    bp
	     ;   mov     bp, sp
	     ;   push    ds
	     ;   mov     ax, DGROUP
	     ;   mov     ds, ax
	
	         ret
	     MyProc   endp
	
	RESOLUTION
	==========
	
	To work around the problem, take out the <loadds> when building in flat
	model.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in MASM version 6.11. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.11 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	
