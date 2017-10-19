---
layout: page
title: "Q123685: Characteristics of MASM Labels"
permalink: /kb/123/Q123685/
---

## Q123685: Characteristics of MASM Labels

	Article: Q123685
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,6.0,6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 6.0, 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most high-level programming languages use variables for data and functions or
	procedures for code. MASM uses labels for both data and code.
	
	It is helpful to think of a MASM label as an address because once the program is
	loaded into memory, each label corresponds to a particular address. It is also
	helpful to think of a data label as a variable and a code label as a function or
	procedure.
	
	You can think of a MASM label as a C pointer; however, this might lead to
	confusion because a label is more like a C array name than a C pointer. A MASM
	label has no space allocated to store its value, as does a C pointer.
	
	This article discusses the segment and offset of a MASM label, label type, and
	label distance.
	
	MORE INFORMATION
	================
	
	A MASM label is made up of a segment and an offset. In your MASM program, you
	can use the SEG and OFFSET operators to access the corresponding portion of the
	label. The the SEG and OFFSET directives work in a way similar to the C FP_SEG
	and FP_OFF macros. However, FP_SEG and FP_OFF work on C pointers, not MASM
	labels or memory addresses.
	
	The size of the segment of a MASM label is always 16 bits. MASM labels have
	either a 16-bit or a 32-bit offset. In general, the offset component of a label
	is 16 bits. However, in flat model programs, the offset component of a label is
	32 bits.
	
	In addition to a segment and an offset, every label has a type or distance
	associated with it. Data labels typically have a type, while code labels have an
	associated distance.
	
	The type or distance associated with a label is used to resolve ambiguities. For
	example, consider the following instruction:
	
	     mov MyLabel, 0
	
	Should the assembler generate code to move a byte or a word to MyLabel? The
	answer depends on how MyLabel was defined. If MyLabel was defined as a byte, a 0
	byte is moved to MyLabel, but if MyLabel was defined as a word, a 0 word is
	moved to MyLabel.
	
	If you want to move a value to a label that has a size different from the size
	for the type associated with the label, cast the label. You can cast a label by
	placing the type that you want to associate with the label, followed by PTR, in
	front of the data label. For example, the following instruction casts MyLabel to
	a label for a WORD:
	
	     mov WORD PTR MyLabel, 0
	
	The WORD PTR does not mean MyLabel contains a pointer to a word; it means the
	data at MyLabel should be considered to be a word.
	
	Similarly, you can tell the assembler whether to make a call or a jump NEAR or
	FAR by specifying the distance for the code label. For example, the following
	instruction tells the assembler to generate a 32-bit NEAR jump to the label
	CodeLabel:
	
	     jmp NEAR32 CodeLabel
	
	A jump such as this one is helpful when writing Windows NT or OS/2 flat model
	programs.
	
	Additional query words: kbinf 5.10 6.00 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM610 kbMASM611
	Version           : :5.1,6.0,6.1,6.11
	
	=============================================================================
	
