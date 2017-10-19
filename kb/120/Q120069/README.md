---
layout: page
title: "Q120069: Real and Protected Mode Segment Size"
permalink: /kb/120/Q120069/
---

## Q120069: Real and Protected Mode Segment Size

	Article: Q120069
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	In real mode on an x86 machine, a physical segment can be up to 64K in
	size. A segment does not have to be 64K. Typically, your program segments
	will not be a full 64K. The size of the segment depends on what you and/or
	the assembler put in it.
	
	With a real mode application, even though a segment may be less than 64K,
	you can still access beyond the end of the segment up to the 64K limit.
	Therefore, if you unintentionally write beyond the end of the segment in
	real mode, there is no warning given by the operating system.
	
	In protected mode, each segment has a descriptor that describes the
	segment. One of the characteristics the descriptor contains is a segment
	limit. The CPU uses the segment limit to determine if you have accessed
	beyond the end of the segment. Unintentionally accessing beyond the segment
	boundary causes an interrupt called a "general protection fault" to occur.
	
	With 286 processors, the limit field is 16-bits in length, which limits
	segments to 64K of memory.
	
	With 386 processors and higher, you can create segments larger than 64K.
	The limit field is 20-bits in length, which allows the addressing of 1M
	items. The granularity bit of the descriptor determines if each item is 1
	byte or 1 page (4K on an x86 machine). Therefore, page granularity provides
	a segment limit of 4G of memory. The segment limit will nearly always be
	set to less than the full 4G.
	
	Additional query words: 6.00 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611
	Version           : :6.1,6.11
	
	=============================================================================
	
