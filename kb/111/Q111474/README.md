---
layout: page
title: "Q111474: PRB: Usage of an ORG Directive in a STRUCT Declaration"
permalink: /kb/111/Q111474/
---

## Q111474: PRB: Usage of an ORG Directive in a STRUCT Declaration

{% raw %}

	Article: Q111474
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Beginning with MASM version 6.0, an ORG directive is permitted in a structure
	declaration. This enables the generation of a template that can ease references
	to the internals of data structures that are predefined, for example by the
	operating system, the operating platform, or a high- level language compiler. A
	consequence of declaring an ORG in a STRUCT is that an instance is not intended
	to be defined in the source file, and in fact will generate the following
	error:
	
	  error: A2159: structure cannot be instanced
	
	This is the expected behavior.
	
	MORE INFORMATION
	================
	
	For additional information about the usage of an ORG directive inside a
	structure declaration, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q111473 BUG: ORG in STRUCT Affects Current Segment Size with -Sf
	
	The following code sample illustrates the usage of an ORG in a structure
	declaration. The sample declares a structure that is used as a template to refer
	to video memory for the last two lines of a text mode display. Possible usage
	includes easing the display of status information of an application running in
	text mode. This is not necessarily the best method to accomplish this task, but
	is presented to demonstrate a point.
	
	This code sample assumes a color video adapter running in the 80X25 text display
	mode with the processor running in real mode, and must be modified for another
	configuration.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	  .MODEL SMALL,C
	  .386
	   
	  VIDEOMEM     EQU 0B800h   ; segment address of video memory
	  NUMLINES     EQU 25
	  NUMCOLS      EQU 80
	  BLACKONWHITE EQU  70h     ; display attributes
	  YELLOWONBLUE EQU  1Eh
	   
	  status STRUCT
	      org (NUMLINES - 2) * NUMCOLS * 2
	      line1   db ?
	      attrib1 db ?
	      org (NUMLINES - 1) * NUMCOLS * 2
	      line2   db ?
	      attrib2 db ?
	  status ENDS
	   
	  .STACK
	   
	  .DATA
	      msg1    db "This is the first status line, "
	              db "with yellow characters on a blue background."
	      lenmsg1 dw $-msg1
	
	      msg2    db "This is the second status line, "
	              db "with black characters on a white background."
	      lenmsg2 dw $-msg2
	   
	  .CODE
	  .STARTUP
	   
	      mov ax, VIDEOMEM
	      mov es, ax
	   
	      mov cx, NUMCOLS
	      xor di, di
	  @@:
	      mov es:[di].status.attrib1, YELLOWONBLUE
	      mov es:[di].status.attrib2, BLACKONWHITE
	      inc di
	      inc di
	      loop @B
	
	      xor si, si
	      xor di, di
	      mov cx, lenmsg1
	  @@:
	      mov al, msg1[si]
	      mov es:[di].status.line1, al
	      inc si
	      inc di
	      inc di
	      loop @B
	
	      xor si, si
	      xor di, di
	      mov cx, lenmsg2
	  @@:
	      mov al, msg2[si]
	      mov es:[di].status.line2, al
	      inc si
	      inc di
	      inc di
	      loop @B
	
	  .EXIT
	   
	  END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a 6.1x
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	

{% endraw %}
