---
layout: page
title: "Q59567: FIX: Incorrectly Generated A4100: Impure Memory Reference"
permalink: kb/059/Q59567/
---

## Q59567: FIX: Incorrectly Generated A4100: Impure Memory Reference

	Article: Q59567
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Macro Assembler (MASM) may generate the following warning
	
	  A4100: Impure memory reference
	
	on a line where data is being accessed from the code segment, not where it is
	being stored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, and
	5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Writing data to the code segment is acceptable in real mode; however, it may
	cause problems in protected (priviledged) mode. The /P option tells MASM 5.0,
	5.1, and 5.1a to generate warning messages if an attempt is made to store data
	in the code segment when operating in protected mode. This is called an impure
	memory reference.
	
	Note that in MASM 6.0, checking for impure memory references is no longer enabled
	by a command-line option, but by OPTION READONLY. The equivalent warning message
	in MASM 6.0 would be A4000: cannot modify READONLY segment.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .286p
	
	  .CODE
	      mov al, cs:[bp]
	      mul word ptr cs:[bp+2]  ; flagged as an error
	  END
	
	Additional query words: 5.00 5.10 5.10a buglist5.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
