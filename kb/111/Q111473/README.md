---
layout: page
title: "Q111473: BUG: ORG in STRUCT Affects Current Segment Size with -Sf"
permalink: kb/111/Q111473/
---

## Q111473: BUG: ORG in STRUCT Affects Current Segment Size with -Sf

	Article: Q111473
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A STRUCT declaration containing an ORG directive will change the current segment
	size when the -Sf switch is used and a listing file is produced with MASM 6.x.
	
	CAUSE
	=====
	
	When adding a first-pass listing (the -Sf switch) to the listing file, MASM's
	internal location counter is affected when the ORG directive is encountered
	within a STRUCT declaration. This location counter is ultimately used to
	determine segment size.
	
	RESOLUTION
	==========
	
	When declaring a STRUCT that contains an ORG directive, place the declaration
	outside of any open segments. Because this is a structure declaration rather
	than an actual instance, the structure does not have to be within a segment and
	can be placed outside all open segments where the location counter will not be
	adversely affected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Macro Assembler
	(MASM) versions 6.x. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates this problem. When the structure is
	declared within the open data segment, the size of the data segment is
	increased. This can be viewed in the map file for the sample, as well as in the
	listing file. Move the structure declaration before the .DATA and .STACK
	directives to obtain the expected behavior.
	
	An ORG directive is permitted in a structure declaration beginning with MASM
	version 6.0. This enables the generation of a template that can ease references
	to the internals of data structures that are predefined, for instance by the
	operating system, the operating platform, or a high-level language compiler.
	
	For additional information about this MASM construct as well as sample code
	demonstrating its use, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q111474 PRB: Usage of an ORG Directive in a STRUCT Declaration
	
	Sample Code
	-----------
	
	  ; Assemble options needed: -Fl -Sf -Fm
	  .MODEL SMALL,C
	  .386
	   
	  NUMLINES     EQU 25
	  NUMCOLS      EQU 80
	   
	  .STACK
	   
	  .DATA
	  status STRUCT                          ; Move STRUCT declaration
	      org (NUMLINES - 2) * NUMCOLS * 2   ;  before .DATA and .STACK
	      line1   db ?                       ;  to work around problem.
	      attrib1 db ?
	      org (NUMLINES - 1) * NUMCOLS * 2
	      line2   db ?
	      attrib2 db ?
	  status ENDS                            ; end STRUCT declaration
	   
	      msg db "Sample code", 13, 10, "$"
	   
	  .CODE
	  .STARTUP
	  <BLOCKQUOTE>
	      mov dx, OFFSET msg
	      mov ah, 9
	      int 21h                               ; output string
	  .EXIT
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a 6.11 6.1x buglist6.10 buglist6.10a buglist6.11 buglist6.00 buglist6.00a buglist6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
