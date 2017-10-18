---
layout: page
title: "Q68562: .MODEL Directive Forces DOSSEG Segment Ordering in MASM"
permalink: kb/068/Q68562/
---

## Q68562: .MODEL Directive Forces DOSSEG Segment Ordering in MASM

	Article: Q68562
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The .MODEL assembler directive forces the segments in the resulting executable
	program to be ordered as if the DOSSEG directive had been used. This will
	override any other directives used to organize segments in an executable
	program. The code below demonstrates this behavior.
	
	Because of this, the options below will be ignored:
	
	  /A and /S command line switches
	  .ALPHA and .SEQ assembler directives
	
	This behavior is not documented and no warnings or errors are generated.
	
	This behavior is also true with QuickAssembler versions 2.01 and 2.51. The .MODEL
	assembler directive was designed for use in mixed-language programming. Because
	of this, it will automatically order the segments in a way compatible with the
	way higher-level language compilers order them. This will happen even if the
	<,language> option on the .MODEL directive is not used.
	
	MORE INFORMATION
	================
	
	The map file created from the linker is included below.
	
	Map file:
	
	Start  Stop   Length Name                        Class
	00000H 00000H 00000H _TEXT                       CODE
	00000H 00002H 00003H B                           CODE
	00004H 00004H 00000H _DATA                       DATA
	00004H 00005H 00002H A                           DATA
	00010H 0010FH 00100H STACK                       STACK
	
	Origin   Group
	0000:0   DGROUP
	
	When the .MODEL and .STACK directives are removed (.STACK must be removed because
	it requires .MODEL), the following map file results. Note that the segments
	appear in the proper order in this case.
	
	Start  Stop   Length Name                        Class
	00000H 00001H 00002H A                           DATA
	00002H 00004H 00003H B                           CODE
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL medium
	  .286
	  .SEQ
	  .STACK 100h
	
	  A SEGMENT WORD PUBLIC 'DATA'
	  test_data DW 10
	  A ENDS
	
	  B SEGMENT WORD PUBLIC 'CODE'
	      mov ax, 1
	  B ENDS
	
	  END
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM611 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b,6.11
	
	=============================================================================
	
