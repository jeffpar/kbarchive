---
layout: page
title: "Q119517: New Keywords Near16, Near32, Far16 and Far32 in MASM"
permalink: kb/119/Q119517/
---

## Q119517: New Keywords Near16, Near32, Far16 and Far32 in MASM

	Article: Q119517
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.1a 
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MASM 6.1 there are four new distance specifiers: near16, near32, far16, and
	far32.
	
	A near pointer consists of an offset. A near16 pointer is a near pointer that
	consists of a 16 bit offset. A near32 pointer is a near pointer consisting of a
	32 bit offset. A far pointer is a pointer that consists of both a segment and an
	offset. A far16 pointer is a far pointer that consists of a segment and a 16 bit
	offset. A far32 pointer is a far pointer consisting of a segment and a 32 bit
	offset. Segments are always 16 bits. Note: near32 and far32 pointers are only
	available on 386 and successive processors.
	
	MORE INFORMATION
	================
	
	The properties of the new distance specifiers are summarized by the following
	table:
	
	 pointer    size in bits        contain            example
	 -------    ------------    -----------------    -----------
	 near16       16 bits           offset_16            IP
	 near32       32 bits           offset_32            EIP
	 far16        32 bits       segment:offset_16       CS:IP
	 far32        48 bits       segment:offset_32       CS:EIP
	
	Additional query words: kbinf 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611 kbMASM610a
	Version           : :6.1,6.11,6.1a
	
	=============================================================================
	
