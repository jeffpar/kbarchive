---
layout: page
title: "Q75276: OFFSET Always Returns the END of a Segment Name"
permalink: kb/075/Q75276/
---

## Q75276: OFFSET Always Returns the END of a Segment Name

	Article: Q75276
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
	
	With the release of the Microsoft Macro Assembler (MASM) version 6.0, the OFFSET
	operator applied to a segment name now returns the end of the segment relative
	to the start of the segment.
	
	This is a change from MASM versions 5.x where "OFFSET segname" will return the
	beginning of the segment if it is declared class 'CODE'. If the segment is
	declared of some other class, "OFFSET segname" will return either the end of the
	segment relative to the beginning of a segment if full segment definitions are
	used, or the end of the segment relative to the start of the group the segment
	was contained in if simplified directives are used.
	
	MORE INFORMATION
	================
	
	As part of defining the BNF for MASM 6.0, an attempt was made to remove any
	ambiguities in the language. This is one of those changes. In MASM 6.0, "OFFSET
	segname" will always return the end of the segment unless an explicit group or
	segment override is provided.
	
	For example,
	
	  _DATA segment  para PUBLIC 'data'
	        db    dup 100 ( )
	  _DATA ends
	
	  STACK segment  para STACK 'stack'
	        db    dup 100 (?)
	  STACK ends
	
	  DGROUP group _DATA, STACK
	
	  TEXT  segment para 'CODE'
	        ORG   100
	
	        mov   sp, OFFSET STACK          ; mov's 100 into sp
	        mov   sp, OFFSET DGROUP:STACK   ; mov's 200 into sp
	
	        mov   ax, OFFSET TEXT           ; mov's size of TEXT into AX
	        mov   ax, OFFSET TEXT:0         ; mov's start of TEXT into AX
	
	For more information on the OFFSET operator, see the online Help.
	
	Additional query words: kbinf 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	
