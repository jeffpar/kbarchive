---
layout: page
title: "Q81894: FIX: MASM Allows Alignments &gt; Segment Alignment"
permalink: kb/081/Q81894/
---

## Q81894: FIX: MASM Allows Alignments &gt; Segment Alignment

	Article: Q81894
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) versions 5.1 and 5.1a incorrectly allow
	ALIGN directives that are greater than the alignment of the segment they appear
	within. MASM 5.1 does not generate errors for these statements; however, it
	cannot guarantee that the item following these ALIGN directives will be aligned
	on the given boundary.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The maximum ALIGN value for data or code is the alignment used when defining the
	segment. When a segment is declared, it is guaranteed to start only at its
	specified alignment. Since the assembler can align items relative only to the
	start of a segment, any ALIGN statement greater than the segment's alignment
	should generate an error. If the following sample code is assembled with MASM
	5.1 or MASM 5.1a, no error is generated. Padding is inserted after the ALIGN 4
	directive, but it will not align the next statement on the indicated boundary.
	MASM 6.0 correctly generates the following error:
	
	  A2189: invalid combination with segment alignment : 4
	
	Valid segment alignments include: BYTE, WORD, DWORD, PARA, or PAGE. PARA is the
	default.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  STACK  SEGMENT PARA STACK 'STACK'
	         DB      100h DUP('x')
	  STACK  ENDS
	
	  _DATA  SEGMENT WORD PUBLIC 'DATA'
	  msg    DB      "Hello World!", 13, 10, '$'
	  _DATA  ENDS
	
	  _TEXT1 SEGMENT WORD PUBLIC 'CODE'
	         ASSUME CS:_TEXT1
	  retrn: ret
	  _TEXT1 ENDS
	
	  _TEXT2 SEGMENT WORD PUBLIC 'CODE'
	         ASSUME CS:_TEXT2, DS:_DATA
	  start: mov     ax, SEG msg
	         mov     ds, ax
	
	         ALIGN   4
	
	         mov     dx, OFFSET msg
	         mov     ah, 09h
	         int     21h
	
	         mov     ax, 4C00h
	         int     21h
	  _TEXT2 ENDS
	
	  END    start
	
	Additional query words: 5.10 5.10a 6.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
