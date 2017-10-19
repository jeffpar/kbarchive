---
layout: page
title: "Q24953: Phase Errors May Be Caused By Forward References"
permalink: /kb/024/Q24953/
---

## Q24953: Phase Errors May Be Caused By Forward References

	Article: Q24953
	Product(s): Microsoft Macro Assembler
	Version(s): 1.25,1.27,3.0x,4.0,5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.25, 1.27, 3.0x, 4.0, 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Phase errors indicate that a relative address of a label changed between pass 1
	and pass 2 of the assembly process. They usually are caused by improper forward
	references to labels. During pass 1, the assembler will have to make assumptions
	(e.g. it might assume a near jump during pass 1 if the location of a label is
	not known). During pass 2, the assembler may have to change those assumptions
	(e.g. now it knows that the jump is to a far label). If this involves changing
	the size of an instruction, that difference can cause a phase error.
	
	To examine the assumptions made by the assembler on pass 1, use the /D option to
	get a pass 1 listing.
	
	MORE INFORMATION
	================
	
	Phase errors can usually be prevented by using segment overrides or explicit
	type specification, as shown in the following examples:
	
	     jmp dword ptr far_label         ;jump to far label
	
	     mov ax, word ptr label
	
	Additional query words: 1.25 1.27 3.0x 4.00 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM125 kbMASM127 kbMASM30xSearch kbMASM400 kbMASM500
	Version           : :1.25,1.27,3.0x,4.0,5.0,5.1
	
	=============================================================================
	
