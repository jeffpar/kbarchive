---
layout: page
title: "Q30381: FIX: Command Line Option /E Generates a Bad Fixup Record"
permalink: kb/030/Q30381/
---

## Q30381: FIX: Command Line Option /E Generates a Bad Fixup Record

	Article: Q30381
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
	
	The assembler will generate bad fixup records for floating point instructions.
	
	An example of this problem is the "FMUL" instruction, which will generate the
	following fixup record:
	
	  FIXUP
	   003:    fixup  seg  rel  offset     offset  0     fixup on 0xde9b
	           frame  loc  target ext "FIDRQQ"
	
	The frame method "loc" means Intel frame method number four. This means the fixup
	frame is the same as the segment of the location.
	
	RESOLUTION
	==========
	
	For floating point symbols this is meaningless, particularly in OS/2 and
	Windows. The frame method should be changed to frame method number five. Frame
	method number five would make the frame and the target segment the same.
	
	The LINK utility will ignore the frame method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1, and 5.1a.
	This problem was corrected in MASM version 6.0.
	
	Additional query words: 5.10 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
