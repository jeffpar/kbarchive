---
layout: page
title: "Q80381: Relative Addresses (Relocatables) and the Minus Operator"
permalink: /kb/080/Q80381/
---

## Q80381: Relative Addresses (Relocatables) and the Minus Operator

	Article: Q80381
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
	
	The Microsoft Macro Assembler does not support using the minus operator (-) to
	negate a relative address, as in the following statement:
	
	     lea ax, [bx - offset Table]
	
	Under MASM 5.1 and 5.1a, the error generated for this statement is:
	
	  A2040: operands must be in same segment, or one must be constant
	
	Under MASM 6.0, the error generated is:
	
	  A2094: operand must be relocatable
	
	MORE INFORMATION
	================
	
	Relocatable means not having an absolute address. Relocatables are often
	referred to as "relative addresses." The assembler does not know where the
	label, data, or code will be located in memory. The linker provides the
	address.
	
	The assembler generates a fixup record (FIXUPP) for each address it cannot
	determine at assembly time, which contains the information the linker will need
	to determine the address. The FIXUPP record contains the LOCATION of the address
	to be fixed up, the TARGET address to which the fixup refers, and the FRAME
	relative to which the address computation is performed. These fields are
	explained in detail on pages 682-693 in "The MS-DOS Encyclopedia." The FIXUPP
	record follows the data record that link needs to update.
	
	Note that an address that needs to be fixed up is indicated in the source listing
	produced by the assembler by an R following the instruction. This is a handy way
	to observe some of the common fixups.
	
	A statement such as the following
	
	     lea ax, [offset Table1 - offset Table]
	
	(where Table1 and Table are in the same segment) includes a difference of
	relocatables and will be an immediate value. The assembler will perform the
	computation. This is one of the recommendations in the A2040 error shown in the
	summary.
	
	A statement like such as the following
	
	     lea ax, [bx + offset Table]
	
	is equivalent to lea ax, Table[bx]. The offset of Table is known by the
	assembler, stored in a data record, fixed up, and added to bx at run time.
	
	In the following statement introduced in the summary
	
	     lea ax, [bx - offset Table]
	
	the offset of Table is known, but the negation of an address is not defined for
	any language. The assembler could merely toggle the bits, but how would the
	linker interpret the new, negated address and perform the fixup? What would
	happen at run time? As it stands, the value produced would have no meaning.
	Since this fixup is not supported, an error is generated.
	
	Additional query words: kbinf 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
