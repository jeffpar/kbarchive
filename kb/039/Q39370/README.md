---
layout: page
title: "Q39370: Addressing above 1 Megabyte Under MS-DOS"
permalink: /kb/039/Q39370/
---

## Q39370: Addressing above 1 Megabyte Under MS-DOS

{% raw %}

	Article: Q39370
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a 80286 or higher processor is in real mode, addressing is done using a
	16-bit segment and 16-bit offset. Therefore, it is only possible to address up
	to 1 megabyte of memory. To address memory above 1 meg under MS-DOS, you have to
	put the processor into protected mode by using IBM ROM BIOS Interupt 15 Function
	89h. Addressing will be done using a selector into a descriptor table.
	
	For more information about this interrupt, call IBM hardware support, (800)
	426-2468. If ROM BIOS routines are not operating as expected, you may need to
	contact the company that supplied the BIOS in your particular machine.
	
	For more information about protected mode, selectors and descriptor tables, see
	the Intel guides for the 80286, 80386, or 80486 or "Microsoft's 80386/80486
	Programming Guide".
	
	Additional query words: 5.00 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
