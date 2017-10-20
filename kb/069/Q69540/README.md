---
layout: page
title: "Q69540: JMP to a Far Address Lists Segment First in Listing File"
permalink: /kb/069/Q69540/
---

## Q69540: JMP to a Far Address Lists Segment First in Listing File

{% raw %}

	Article: Q69540
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
	
	In the Macro Assembler (MASM) version 6.0 and later, the opcode for a JMP to a
	far address is shown in the listing file with the segment first, then the
	offset. In the actual .OBJ file, the address is stored in the reversed order
	(offset then segment).
	
	MORE INFORMATION
	================
	
	The following is the encoding for the JMP instruction from the listing (.LST)
	file generated from the sample program below:
	
	  0000  EA ---- 0000 E            jmp faddr
	
	The above address for faddr (---- 0000) is displayed with the segment listed
	first (----), then the offset(0000). Because the linker resolves this address at
	link time, the actual segment and offset is not known at assemble time, and is
	not listed in this file.
	
	If you then look at the actual .OBJ or .EXE file produced by the above code (by
	using CodeView, for example), you will see the offset first in the file, then
	the segment.
	
	This is expected behavior with MASM version 6.0 and later and is designed to make
	the segment:offset more readable. This is different from MASM version 5.1, which
	displayed the addresses for far JMP instructions in the reversed (offset then
	segment) form.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Fl
	
	  .MODEL large
	  EXTRN faddr:far
	
	  .CODE
	     jmp faddr
	  END
	
	Additional query words: kbinf 6.00 6.00a 6.00b 6.10 6.10a jump object
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	

{% endraw %}
