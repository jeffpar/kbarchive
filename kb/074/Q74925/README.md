---
layout: page
title: "Q74925: FIX: A1010 from Unclosed Segment in MASM @ShowStr Macro"
permalink: /kb/074/Q74925/
---

## Q74925: FIX: A1010 from Unclosed Segment in MASM @ShowStr Macro

	Article: Q74925
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 includes a predefined macro in
	DOS.INC called @ShowStr that displays a $-terminated string. When the argument
	to @ShowStr is a string literal and there are no segment directives or ends
	directives following the occurrence of @ShowStr, the assembler will generate the
	following error:
	
	  fatal error A1010: unmatched block nesting: _DATA
	
	RESOLUTION
	==========
	
	To work around this problem, make sure that a simplified segment directive or
	ends directive follows the @ShowStr macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	When @ShowStr is passed a string literal, the macro generates the following
	code:
	
	     sseg    TEXTEQU @CurSeg        ; save current segment
	     .DATA                          ; change segment
	     msg     BYTE    ofset, "$"     ; terminate string with a '$'
	     sseg    SEGMENT                ; restore segment
	     mov     dx,     OFFSET msg
	     mov     ah,     9
	     int     21h                    ; display '$' terminated string
	
	The line "sseg SEGMENT" restores the segment but the macro never closes the
	segment; it relies on the user subsequently closing the segment with the
	appropriate ends directive or by opening another segment with a simplified
	segment directive. If the segment is left open, an A1010 error is generated.
	
	In the sample code below, @ShowStr is in a segment started with .CODE. In the
	macro expansion, that segment is ended and the next segment begun with .DATA.
	The code segment is restored with the statement _TEXT SEGMENT. This segment is
	not closed in the macro or in the subsequent code, so the A1010 error is
	produced. The error can be eliminated by uncommenting either of the commented
	lines.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  INCLUDE dos.inc
	
	  .STACK 4096
	  .CODE
	      .startup
	      @ShowStr "Hello"
	      .exit 0
	  ; uncomment one of the following lines to work around the problem
	  ; _TEXT ENDS
	  ; .DATA
	
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
