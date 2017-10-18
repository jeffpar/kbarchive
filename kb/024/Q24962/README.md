---
layout: page
title: "Q24962: &lt;constant&gt; and [&lt;constant&gt;] Are Semantically the Same"
permalink: kb/024/Q24962/
---

## Q24962: &lt;constant&gt; and [&lt;constant&gt;] Are Semantically the Same

	Article: Q24962
	Product(s): Microsoft Macro Assembler
	Version(s): 1.25,1.27,3.0x,4.0,5.0,5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.25, 1.27, 3.0x, 4.0, 5.0, 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While <constant> and [<constant>] are syntactically different (a
	constant and a constant within brackets), they are semantically the same. For
	example, the following statement:
	
	     MOV ax, [100]
	
	will move the value of 100 into ax, not the value that is at address 100.
	
	Another example is using a constant offset in a segment override:
	
	     MOV ax, ds:100     ; This will access the word at offset 100
	
	     MOV ax, ds:[100]   ; This will do the same thing
	
	Additional query words: 1.25 1.27 3.0x 4.00 5.00 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM125 kbMASM127 kbMASM30xSearch kbMASM400 kbMASM500 kbMASM600a kbMASM600b
	Version           : :1.25,1.27,3.0x,4.0,5.0,5.1,6.0,6.0a,6.0b
	
	=============================================================================
	
