---
layout: page
title: "Q81327: Positioning External Declarations in Assembly"
permalink: kb/081/Q81327/
---

## Q81327: Positioning External Declarations in Assembly

	Article: Q81327
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Macro Assembler (MASM) versions 5.1 and 6.0 and Microsoft
	QuickAssembler versions 2.01 and 2.51 place several restrictions on the
	placement of EXTRN and EXTERN statements. The assembler also makes assumptions
	on where the declarations are placed.
	
	Because of these assumptions, the code may assemble correctly, but cause the
	following link errors:
	
	  Warning: L4004 Possible fixup overflow at <addr> in segment
	  <name>
	
	  -or-
	
	  Error L2002: fixup overflow at <addr> in segment <name>
	
	MORE INFORMATION
	================
	
	Here are the rules you should follow when declaring externals:
	
	1. If you know which segment defines an external symbol, put the EXTRN statement
	  in that segment.
	
	2. NEAR code labels (including procedures) must be declared in the code segment
	  from which they are accessed.
	
	3. If you know the group but not the segment, position the EXTRN statement
	  outside any segment and reference the variable with the group name. For
	  example, if var1 is in DGROUP, you would reference the variable as
	
	           mov DGROUP:var1, 10
	
	4. If you know nothing about the location of an external variable, put the EXTRN
	  statement outside any segment. You can use the SEG directive to access the
	  external variable like this:
	
	           mov ax, SEG var1
	           mov es, ax
	           mov ax, es:var1
	
	5. If the symbol is an absolute symbol or a far code label, you can declare it
	  external anywhere in the source code.
	
	While following these rules will help to avoid L2002 and L4004 fixup overflow
	errors, the above rules are not absolute. Using groups, ASSUME statements, and
	.MODELS you can often work around these errors. This error can also be generated
	by incorrectly positioning external data.
	
	EXTERN is the MASM 6.0 version of EXTRN. For more information about EXTERN see
	pageS 222 to 224 of the MASM version 6.0 Programmer's Guide. For more
	information on EXTRN see pageS 161 to 163 of the MASM version 5.1 Programmer's
	Guide, or pages 169 to 171 of the Microsoft QuickAssembler's Programer's Guide.
	
	Additional query words: kbinf 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
